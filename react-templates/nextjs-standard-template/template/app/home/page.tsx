import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">go to About page</Link>
    </div>
  );
}

Home.displayName = "Home";
