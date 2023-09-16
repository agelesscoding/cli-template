import Link from "next/link";
import HomeDetailTextComponent from "./_components/text";

export default function HomeDetail() {
  return (
    <div className="dashboard-home-detail">
      <h1>Dashboard Home Detail Page</h1>
      <Link href="/home">go to Dashboard Home page</Link>
      <HomeDetailTextComponent />
    </div>
  );
}
