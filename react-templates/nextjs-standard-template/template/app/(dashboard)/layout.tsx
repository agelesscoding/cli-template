interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout(props: DashboardLayoutProps) {
  return (
    <div className="dashboard-layout">{props.children}</div>
  );
}
