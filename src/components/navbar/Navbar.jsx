import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

function Navbar() {
  return (
    <div className="flex items-center justify-between h-[100px]">
      <div className="hidden md:flex gap-2.5 flex-1">
        <Image
          src="/socialMedia/instagram.png"
          alt="instagram"
          width={24}
          height={24}
        />
        <Image
          src="/socialMedia/tiktok.png"
          alt="tiktok"
          width={24}
          height={24}
        />
        <Image
          src="/socialMedia/youtube.png"
          alt="youtube"
          width={24}
          height={24}
        />
      </div>
      <div className="flex-1 text-start md:text-center text-2xl md:text-[32px] xl:text-4xl font-bold">
        Explore Kuliner
      </div>
      <div className="flex gap-[15px] xl:gap-5 flex-1 text-lg xl:text-xl justify-end">
        {/* <ThemeToggle /> */}
        <Link href="/" className="hidden sm:flex">
          Homepage
        </Link>
        <Link href="/" className="hidden sm:flex">
          Contact
        </Link>
        <Link href="/" className="hidden sm:flex">
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
}

export default Navbar;
