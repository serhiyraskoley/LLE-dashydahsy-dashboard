import { Layout } from 'antd';
import LeftSidebar from "./components/LeftSidebar";
import CustomCards from "./components/Cards";

const App = () => {
  return (
      <Layout>
        <LeftSidebar />
          <CustomCards />
      </Layout>
  );
}

export default App;
