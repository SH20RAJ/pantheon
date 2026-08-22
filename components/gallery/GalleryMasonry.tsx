"use client";

import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';

const useMedia = (queries: string[], values: number[], defaultValue: number): number => {
  const get = () => {
    if (typeof window === 'undefined') return defaultValue;
    return values[queries.findIndex(q => matchMedia(q).matches)] ?? defaultValue;
  };

  const [value, setValue] = useState<number>(get);

  useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach(q => matchMedia(q).addEventListener('change', handler));

    return () => {
      queries.forEach(q => matchMedia(q).removeEventListener('change', handler));
    };
  }, [queries]);

  return value;
};

const useMeasure = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });

    ro.observe(ref.current);

    return () => ro.disconnect();
  }, []);

  return [ref, size] as const;
};

interface Item {
  id: string;
  img: string;
  height: number;
}

interface GridItem extends Item {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface MasonryProps {
  items: Item[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: 'bottom' | 'top' | 'left' | 'right' | 'center' | 'random';
  blurToFocus?: boolean;
}

const BORDER_RADIUS = 10;

const Masonry: React.FC<MasonryProps> = ({
  items,
  ease = 'power3.out',
  duration = 0.6,
  stagger = 0.05,
  animateFrom = 'bottom',
  blurToFocus = true
}) => {
  const columns = useMedia(
    ['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)', '(min-width:400px)'],
    [5, 4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure<HTMLDivElement>();
  const [activeId, setActiveId] = useState<string | null>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  const getInitialPosition = (item: GridItem) => {
    const containerRect = containerRef.current?.getBoundingClientRect();

    if (!containerRect) {
      return { x: item.x, y: item.y };
    }

    let direction = animateFrom;

    if (animateFrom === 'random') {
      const dirs = ['top', 'bottom', 'left', 'right'];
      direction = dirs[Math.floor(Math.random() * dirs.length)] as typeof animateFrom;
    }

    switch (direction) {
      case 'top':
        return { x: item.x, y: -200 };

      case 'bottom':
        return { x: item.x, y: window.innerHeight + 200 };

      case 'left':
        return { x: -200, y: item.y };

      case 'right':
        return { x: window.innerWidth + 200, y: item.y };

      case 'center':
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2
        };

      default:
        return { x: item.x, y: item.y + 100 };
    }
  };

  const { grid, maxContainerHeight } = useMemo(() => {
    if (!width) {
      return {
        grid: [] as GridItem[],
        maxContainerHeight: 0
      };
    }

    const colHeights = new Array(columns).fill(0);
    const gap = 20;
    const totalGaps = (columns - 1) * gap;
    const columnWidth = (width - totalGaps) / columns;

    const computedGrid: GridItem[] = items.map(child => {
      const col = colHeights.indexOf(Math.min(...colHeights));

      const x = col * (columnWidth + gap);
      const height = child.height / 2;
      const y = colHeights[col];

      colHeights[col] += height + gap;

      return {
        ...child,
        x,
        y,
        w: columnWidth,
        h: height
      };
    });

    return {
      grid: computedGrid,
      maxContainerHeight: Math.max(...colHeights)
    };
  }, [columns, items, width]);

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
  if (!grid.length) return;

  grid.forEach((item, index) => {
    if (item.id === activeId) return;

    const selector = `[data-key="${item.id}"]`;
    const element = document.querySelector<HTMLElement>(selector);

    if (!element) return;

    const animProps = {
      x: item.x,
      y: item.y,
      width: item.w,
      height: item.h
    };

    if (!hasMounted.current) {
      const start = getInitialPosition(item);

      // Set the starting position immediately
      gsap.set(element, {
        opacity: 0,
        x: start.x,
        y: start.y,
        width: item.w,
        height: item.h,
        ...(blurToFocus && {
          filter: 'blur(10px)'
        })
      });

      // Then animate from that position
      gsap.to(element, {
        opacity: 1,
        ...animProps,
        ...(blurToFocus && {
          filter: 'blur(0px)'
        }),
        duration: 0.8,
        ease: 'power3.out',
        delay: index * stagger
      });
    } else {
      gsap.to(element, {
        ...animProps,
        duration,
        ease,
        overwrite: 'auto'
      });
    }
  });

  hasMounted.current = true;
}, [
  grid,
  stagger,
  animateFrom,
  blurToFocus,
  duration,
  ease,
  activeId
]);

  // ---------------------------------------------------------------------
  // Expand
  // ---------------------------------------------------------------------

  const openItem = (item: GridItem, wrapperEl: HTMLElement) => {
    if (activeId) return;

    setActiveId(item.id);

    const containerRect = containerRef.current?.getBoundingClientRect();

    if (!containerRect) return;

    const aspect = item.w / item.h;

    const maxW = window.innerWidth * 0.5;
    const maxH = window.innerHeight * 0.5;

    let targetW = maxW;
    let targetH = targetW / aspect;

    if (targetH > maxH) {
      targetH = maxH;
      targetW = targetH * aspect;
    }

    const targetX =
      (window.innerWidth - targetW) / 2 - containerRect.left;

    const targetY =
      (window.innerHeight - targetH) / 2 - containerRect.top;

    gsap.set(wrapperEl, {
      zIndex: 100
    });

    gsap.to(wrapperEl, {
      x: targetX,
      y: targetY,
      width: targetW,
      height: targetH,
      duration: 0.45,
      ease: 'power3.out'
    });

    const imgEl = wrapperEl.querySelector<HTMLImageElement>('.masonry-img');

    if (imgEl) {
      gsap.to(imgEl, {
        filter: 'grayscale(0)',
        duration: 0.45,
        ease: 'power3.out'
      });
    }

    if (backdropRef.current) {
      gsap.to(backdropRef.current, {
        opacity: 1,
        duration: 0.35,
        ease: 'power2.out',
        pointerEvents: 'auto'
      });
    }
  };

  // ---------------------------------------------------------------------
  // Collapse
  // ---------------------------------------------------------------------

  const closeItem = () => {
    if (!activeId) return;

    const wrapperEl = document.querySelector<HTMLElement>(
      `[data-key="${activeId}"]`
    );

    const item = grid.find(g => g.id === activeId);

    if (wrapperEl && item) {
      gsap.to(wrapperEl, {
        x: item.x,
        y: item.y,
        width: item.w,
        height: item.h,
        duration: 0.4,
        ease: 'power3.inOut',
        onComplete: () => {
          gsap.set(wrapperEl, {
            zIndex: 1
          });
        }
      });

      const imgEl =
        wrapperEl.querySelector<HTMLImageElement>('.masonry-img');

      if (imgEl) {
        gsap.to(imgEl, {
          filter: 'grayscale(1)',
          duration: 0.4,
          ease: 'power3.inOut'
        });
      }
    }

    if (backdropRef.current) {
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.3,
        pointerEvents: 'none'
      });
    }

    setActiveId(null);
  };

  return (
    <>
      <div
        ref={backdropRef}
        onClick={closeItem}
        className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-md opacity-0"
        style={{
          pointerEvents: 'none'
        }}
      />

      <div
        ref={containerRef}
        className="relative w-full"
        style={{
          height: maxContainerHeight
            ? `${maxContainerHeight}px`
            : 'auto'
        }}
      >
        {grid.map(item => (
          <div
            key={item.id}
            data-key={item.id}
            className="absolute box-content cursor-pointer"
            style={{
              willChange: 'transform, width, height, opacity',
              zIndex: activeId === item.id ? 100 : 1
            }}
            onClick={e => {
              e.stopPropagation();

              if (activeId === item.id) {
                closeItem();
              } else {
                openItem(item, e.currentTarget);
              }
            }}
          >
            <div
              className="relative w-full h-full overflow-hidden shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] transition-[filter] duration-200 hover:brightness-110"
              style={{
                borderRadius: BORDER_RADIUS
              }}
            >
              <img
                src={item.img}
                alt=""
                loading="lazy"
                decoding="async"
                className="masonry-img absolute inset-0 w-full h-full object-cover"
                style={{
                  borderRadius: BORDER_RADIUS,
                  filter: 'grayscale(1)'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Masonry;