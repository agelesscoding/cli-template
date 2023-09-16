import Link from "next/link";

export default function DashboardHome() {
  return (
    <div className="dashboard-home">
      <h1>Dashboard Home Page</h1>
      <Link href="/about">go to About page</Link>
      <br />
      <Link href="/home/1">go to Home Detail page: `/dashboard/home/1`</Link>
    </div>
  );
}
