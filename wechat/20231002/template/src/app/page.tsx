import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Main Page</h1>
      <Link href="/dashboard/workspace/forms">Go to `forms` page.</Link>
    </main>
  )
}
