import React from "react";
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src="/avatar.png"
        alt=""
        width={700}
        height={600}
        priority={true}
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
