import Link from "next/link";

type GridItem = {
  href: string;
  title: string;
  description: string;
};

export default function PageGrid({ items }: { items: GridItem[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="card transition hover:-translate-y-0.5 hover:shadow-md">
          <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{item.description}</p>
        </Link>
      ))}
    </div>
  );
}
