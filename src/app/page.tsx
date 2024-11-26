import HomePageFooter from "@/components/templates/homePageFooter";
import HomePageHeader from "@/components/templates/homePageHeader";

const Home = () => {
  return (
    <div className="flex flex-col justify-between h-screen bg-gradient-to-br from-black to-slate-000">
      <HomePageHeader />
      <HomePageFooter />
    </div>
  );
};

export default Home;
