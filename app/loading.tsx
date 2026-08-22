export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-slate-400 text-sm font-mono gap-12">
      <div className="loader" />
      <div className="font-mono">Loading Pantheon...</div>
    </div>
  );
}