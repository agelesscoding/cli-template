import Link from "next/link";

interface DashboardHomeLayoutProps {
  children: React.ReactNode;
}

export default function DashboardHomeLayout(props: DashboardHomeLayoutProps) {
  return (
    <div className="dashboard-home-layout">
      <header className="dashboard-home-layout-header">
        Transactions/2022 New business TIQENG-7723
      </header>
      <div className="routes">
        <Link href="/home/activity-feed">Activiti Feed</Link> |{" "}
        <Link href="/home/workspace">Workspace</Link>
      </div>
      {props.children}
    </div>
  );
}
