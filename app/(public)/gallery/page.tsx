import Gallery from "@/components/ui/Gallery";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Gallery
        fit={0.8}
        minRadius={600}
        maxVerticalRotationDeg={0}
        segments={34}
        dragDampening={2}
        grayscale
      />
    </div>
  );
}
