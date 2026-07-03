import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 py-16 text-zinc-50">
      <div className="w-full max-w-5xl rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-2xl backdrop-blur sm:p-12">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">Discount Marketplace</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">
            Discover better deals, faster.
          </h1>
          <p className="mt-6 text-lg text-zinc-400">
            A polished starter experience for browsing discounts, managing offers, and preparing Stripe-ready checkout flows.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/signup" className="rounded-full bg-emerald-500 px-6 py-3 font-medium text-zinc-950 transition hover:bg-emerald-400">
            Create account
          </Link>
          <Link href="/login" className="rounded-full border border-zinc-700 px-6 py-3 font-medium text-zinc-100 transition hover:border-zinc-500">
            Sign in
          </Link>
          <Link href="/dashboard" className="rounded-full border border-emerald-500/40 px-6 py-3 font-medium text-emerald-300 transition hover:border-emerald-400">
            Open dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
