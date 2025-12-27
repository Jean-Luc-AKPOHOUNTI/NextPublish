import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold text-neutral-900"
        >
          NextPublish
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/articles"
            className="text-neutral-600 hover:text-neutral-900 transition"
          >
            Articles
          </Link>

          <Link
            href="/dashboard"
            className="text-neutral-600 hover:text-neutral-900 transition"
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}