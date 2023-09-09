"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import logoImg from "../../../public/images/logo.png";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
    onClick={()=>router.push('/')}
      src={logoImg}
      className="hidden md:block cursor-pointer"
      alt="logo"
      height={'100'}
      width={'100'}
    />
  );
};

export default Logo;
