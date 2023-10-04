import Header from "../../components/Header";
import LeftNav from "../../components/LeftNav";
import Navbar from "../../components/Navbar";
import NewsHome from "../../components/NewsHome";
import RightNav from "../../components/RightNav";
import Scroll from "../../components/Scroll";

const Home = () => {
  return (
    <div>
      {" "}
      <Header></Header>
      <Scroll></Scroll>
      <div className="my-7">
        <Navbar></Navbar>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div>
          {" "}
          <LeftNav></LeftNav>{" "}
        </div>
        <div className="md:col-span-2">
          <NewsHome></NewsHome>
        </div>
        <div>
          {" "}
          <RightNav></RightNav>{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
