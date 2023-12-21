import Image from "next/image";
import Link from "next/link";

function Card() {
  return (
    <div className="mb-[50px] flex items-center gap-[50px]">
      <div className="relative flex-1 h-[350px]">
        <Image
          src="/food/featured.jpg"
          alt="card-image"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col gap-5">
        <div className="text-base">
          <span className="text-gray-500 font-normal">11.02.2023 - </span>
          <span className="text-red-500 font-medium">CULTURE</span>
        </div>
        <Link href="/">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className="text-base lg:text-lg font-light leading-tight text-[#626262]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          rerum reprehenderit quaerat soluta et exercitationem voluptatem
          corporis doloremque dicta est maxime voluptas dolorum, mollitia quod
          cupiditate temporibus alias aliquam voluptate?
        </p>
        <Link href="/" className="border-b border-b-red-500 w-max py-[2px]">Read More</Link>
      </div>
    </div>
  );
}

export default Card;
