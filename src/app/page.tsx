import HomePageFooter from "@/components/templates/homePageFooter";
import HomePageHeader from "@/components/templates/homePageHeader";

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-screen bg-gradient-to-br from-black to-slate-000">
      <HomePageHeader />
      <HomePageFooter />
    </div>
  );
}
