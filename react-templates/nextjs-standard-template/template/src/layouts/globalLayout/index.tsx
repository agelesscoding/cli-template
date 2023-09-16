
import { type InjectedProps, withGlobal } from "@/hocs/withGlobal";

interface GlobalLayoutProps extends InjectedProps {
  children: React.ReactNode;
}
const GlobalLayout: React.FC<GlobalLayoutProps> = (props) => {
  return props.children;
};

export default withGlobal(GlobalLayout);
