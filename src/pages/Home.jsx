import Banner from "../Components/Banner/Banner";
import Sidebar from "../Components/SideFeature/Sidebar";

const Home = () => {
  // #C0F3EC
  //#2D6BFF
  //#E0EEED
  return (
    <div className="px-3 w-full top-0 grid grid-cols-1   md:grid-cols-3">
      <div className=" col-span-2 w-full h-[80vh] overflow-hidden">  
        <Banner></Banner>
      </div>
      <div>
        <Sidebar></Sidebar>
      </div>
      
    </div>
  );
};

export default Home;
