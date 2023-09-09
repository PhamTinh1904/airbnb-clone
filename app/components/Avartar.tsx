"use client";
import Image from "next/image";
import pladehoderImg from "../../public/images/placeholder.jpg";

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({
  src
}) => {
  return (
    <Image
      className=" rounded-full"
      alt="avatar"
      height={"30"}
      width={"30"}
      src={src || pladehoderImg}
    />
  );
};

export default Avatar;
