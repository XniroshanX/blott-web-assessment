"use client";
import Image from "next/image";
import Button from "../uis/button";
import { useRouter } from "next/navigation";

const HomePageFooter = () => {
  const router = useRouter();

  const navigateHandler = () => {
    router.push("/news");
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center p-20">
      <div className="w-full sm:1/2">
        <Image
          className="mb-10 sm:mb-0"
          src={"/blott-logo.png"}
          alt="Blott Logo"
          height={56}
          width={500}
        />
      </div>
      <div className="w-full sm:1/2 flex justify-center">
        <Button label="Ready" onClick={navigateHandler} />
      </div>
    </div>
  );
};

export default HomePageFooter;
