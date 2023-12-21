import Image from "next/image";
import Link from "next/link";

function CategoryList() {
  return (
    <div>
      <h1 className="my-12 text-3xl font-extrabold">Popular Categories</h1>
      <div className="flex flex-wrap justify-between gap-5">
        <Link
          href={`/blog`}
          className="flex items-center gap-[10px] w-[100%] sm:w-[45%] md:w-[25%] lg:w-[15%] h-20 justify-center bg-[#57c4ff31] rounded-[10px] font-medium"
        >
          <div className="relative w-8 h-8">
            <Image
              src="/iconPopular/coding.png"
              alt=""
              fill
              className="rounded-full"
            />
          </div>
          category1
        </Link>
        <Link
          href={`/blog`}
          className="flex items-center gap-[10px] w-[100%] sm:w-[45%] md:w-[25%] lg:w-[15%] h-20 justify-center bg-[#da85c731] rounded-[10px] font-medium"
        >
          <div className="relative w-8 h-8">
            <Image
              src="/iconPopular/culture.png"
              alt=""
              fill
              className="rounded-full"
            />
          </div>
          category2
        </Link>
        <Link
          href={`/blog`}
          className="flex items-center gap-[10px] w-[100%] sm:w-[45%] md:w-[25%] lg:w-[15%] h-20 justify-center bg-[#7fb88133] rounded-[10px] font-medium"
        >
          <div className="relative w-8 h-8">
            <Image
              src="/iconPopular/fashion.png"
              alt=""
              fill
              className="rounded-full"
            />
          </div>
          category3
        </Link>
        <Link
          href={`/blog`}
          className="flex items-center gap-[10px] w-[100%] sm:w-[45%] md:w-[25%] lg:w-[15%] h-20 justify-center bg-[#ff795736] rounded-[10px] font-medium"
        >
          <div className="relative w-8 h-8">
            <Image
              src="/iconPopular/food.png"
              alt=""
              fill
              className="rounded-full"
            />
          </div>
          category4
        </Link>
        <Link
          href={`/blog`}
          className="flex items-center gap-[10px] w-[100%] sm:w-[45%] md:w-[25%] lg:w-[15%] h-20 justify-center bg-[#ffb04f45] rounded-[10px] font-medium"
        >
          <div className="relative w-8 h-8">
            <Image
              src="/iconPopular/style.png"
              alt=""
              fill
              className="rounded-full"
            />
          </div>
          category5
        </Link>
        <Link
          href={`/blog`}
          className="flex items-center gap-[10px] w-[100%] sm:w-[45%] md:w-[25%] lg:w-[15%] h-20 justify-center bg-[#5e4fff31] rounded-[10px] font-medium"
        >
          <div className="relative w-8 h-8">
            <Image
              src="/iconPopular/travel.png"
              alt=""
              fill
              className="rounded-full"
            />
          </div>
          category6
        </Link>
      </div>
    </div>
  );
}

export default CategoryList;
