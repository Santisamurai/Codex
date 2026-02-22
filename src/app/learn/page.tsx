import PageGrid from "@/components/page-grid";

const learnItems = [
  { href: "/learn/cars", title: "Cars", description: "Car anatomy, aero basics, and setup principles." },
  { href: "/learn/teams", title: "Teams", description: "How teams are structured from pit wall to factory." },
  { href: "/learn/drivers", title: "Drivers", description: "Driver styles, race craft, and training." },
  { href: "/learn/tracks", title: "Tracks", description: "Circuit types, corner profiles, and overtaking zones." },
  { href: "/learn/rules", title: "Rules", description: "Race weekend format, penalties, and points." },
  { href: "/learn/season-2026", title: "Season 2026", description: "Preview storylines for the 2026 campaign." }
];

export default function LearnPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">Learn</h1>
      <p className="text-sm text-slate-600">Start with fundamentals, then dive into technical topics.</p>
      <PageGrid items={learnItems} />
    </section>
  );
}
