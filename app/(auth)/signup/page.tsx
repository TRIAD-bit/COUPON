import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 py-16 text-zinc-50">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">Discount Marketplace</p>
        <h1 className="mt-3 text-3xl font-semibold">Create your account</h1>
        <p className="mt-2 text-sm text-zinc-400">Start discovering exclusive deals and subscriptions.</p>

        <form className="mt-8 space-y-4">
          <div>
            <label className="mb-2 block text-sm text-zinc-300" htmlFor="name">Full name</label>
            <input
              id="name"
              type="text"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm outline-none ring-0"
              placeholder="Alex Morgan"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-zinc-300" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm outline-none ring-0"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-zinc-300" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm outline-none ring-0"
              placeholder="••••••••"
            />
          </div>
          <button className="w-full rounded-lg bg-emerald-500 px-4 py-2.5 font-medium text-zinc-950 transition hover:bg-emerald-400">
            Create account
          </button>
        </form>

        <p className="mt-6 text-sm text-zinc-400">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-emerald-400 hover:text-emerald-300">
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
}
