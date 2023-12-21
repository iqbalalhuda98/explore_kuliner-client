import Link from "next/link";

function MenuCategories() {
  return (
    <div className="mt-[35px] mb-[60px] flex flex-wrap gap-5">
      <Link
        href="/"
        className="py-[10px] px-[25px] rounded-[10px] text-sm bg-[#57c4ff31]"
      >
        Cate1
      </Link>
      <Link
        href="/"
        className="py-[10px] px-[25px] rounded-[10px] text-sm bg-[#da85c731]"
      >
        Cate2
      </Link>
      <Link
        href="/"
        className="py-[10px] px-[25px] rounded-[10px] text-sm bg-[#7fb88133]"
      >
        Cate3
      </Link>
      <Link
        href="/"
        className="py-[10px] px-[25px] rounded-[10px] text-sm bg-[#ff795736]"
      >
        Cate4
      </Link>
      <Link
        href="/"
        className="py-[10px] px-[25px] rounded-[10px] text-sm bg-[#ffb04f45]"
      >
        Cate5
      </Link>
      <Link
        href="/"
        className="py-[10px] px-[25px] rounded-[10px] text-sm bg-[#5e4fff31]"
      >
        Cate6
      </Link>
    </div>
  );
}

export default MenuCategories;
