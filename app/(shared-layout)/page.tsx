import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">Go to blog page</Link>
    </div>
  );
}
