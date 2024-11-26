import Image from "next/image";
import Button from "../uis/button";

const HomePageFooter = () => {
  return (
    <div className="flex items-center justify-center p-20">
      <div className="w-1/2">
        <Image
          src={"/blott-logo.png"}
          alt="Blott Logo"
          height={56}
          width={500}
        />
      </div>
      <div className="w-1/2 flex justify-center">
        <Button label="Ready" />
      </div>
    </div>
  );
};

export default HomePageFooter;
