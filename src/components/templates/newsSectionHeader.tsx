import Image from "next/image";

const NewsSectionHeader = () => {
  return (
    <div className="flex justify-center w-full p-5 border-b border-zinc-800">
      <Image src="/blott-header-logo.png" alt="Blott" width={200} height={49} />
    </div>
  );
};

export default NewsSectionHeader;
