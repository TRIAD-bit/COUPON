import Link from "next/link";

const stats = [
  { label: "Active deals", value: "24" },
  { label: "Saved offers", value: "8" },
  { label: "Monthly spend", value: "$142" },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-zinc-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">Dashboard</p>
            <h1 className="text-3xl font-semibold">Your discount overview</h1>
          </div>
          <Link href="/" className="text-sm font-medium text-emerald-400 hover:text-emerald-300">
            Back home
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg">
              <p className="text-sm text-zinc-400">{stat.label}</p>
              <p className="mt-2 text-3xl font-semibold">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg">
          <h2 className="text-xl font-semibold">Recommended deals</h2>
          <ul className="mt-4 space-y-3 text-sm text-zinc-300">
            <li className="rounded-lg border border-zinc-800 bg-zinc-950 p-3">15% off annual plans for early adopters</li>
            <li className="rounded-lg border border-zinc-800 bg-zinc-950 p-3">Free shipping on selected partners this week</li>
            <li className="rounded-lg border border-zinc-800 bg-zinc-950 p-3">Bundle pricing unlocked after your third purchase</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
