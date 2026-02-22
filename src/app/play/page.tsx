import PageGrid from "@/components/page-grid";

const playItems = [
  { href: "/play/quizzes", title: "Quizzes", description: "Fast trivia rounds on teams, tracks, and race rules." },
  { href: "/play/strategy-sim", title: "Strategy Sim", description: "Plan pit stops and tire compounds against weather changes." }
];

export default function PlayPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">Play</h1>
      <p className="text-sm text-slate-600">Test your knowledge and race-day decision making.</p>
      <PageGrid items={playItems} />
    </section>
  );
}
