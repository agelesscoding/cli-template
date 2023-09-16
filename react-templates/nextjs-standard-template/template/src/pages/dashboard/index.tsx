
import Footer from "@/components/footer";
import Header from "@/components/header";
import GlobalLayout from "@/layouts/globalLayout";
import { type InjectedProps, withGlobal } from "@/hocs/withGlobal";

const Dashboard: React.FC<InjectedProps> = (props) => {
  const handleClick = () => {
    props.setSiteName("New Site");
  };

  return (
    <GlobalLayout>
      <Header />
      <main>
        site name: {props.siteName}
        <button onClick={handleClick}>set site name to `New Site`</button>
      </main>
      <Footer />
    </GlobalLayout>
  );
};

export default withGlobal(Dashboard);
