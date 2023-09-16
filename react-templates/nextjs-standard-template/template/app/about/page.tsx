import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <Link href="/home">go to Home page</Link>
    </div>
  );
}

About.displayName = "About";
