interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout(props: DashboardLayoutProps) {
  return (
    <div className="dashboard-home-layout">{props.children}</div>
  );
}
