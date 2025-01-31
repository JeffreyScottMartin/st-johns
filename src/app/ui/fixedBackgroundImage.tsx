"use client";
import Image from "next/image";

const fixedBackgroundImage = () => {
  return (
    <div className="relative h-full w-full">
      <div className="-z-5 fixed top-0 left-0 w-full h-full overflow-hidden">
        <Image
          src="/congregation-bw.webp"
          alt="Desktop Background Image"
          className="hidden md:block"
          fill
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
          style={{
            objectFit: "cover",
            zIndex: -100,
            opacity: 1,
          }}
          quality={75}
          priority
        />
        <Image
          src="/congregation-bw.webp"
          alt="Mobile Background Image"
          className="block md:hidden"
          fill
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
          style={{
            objectFit: "cover",
            zIndex: -100,
            opacity: 1,
          }}
          quality={75}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default fixedBackgroundImage;
