import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Home</h1>
        <Link href="/create">
          <a>to create</a>
        </Link>
      </main>
    </div>
  );
}
