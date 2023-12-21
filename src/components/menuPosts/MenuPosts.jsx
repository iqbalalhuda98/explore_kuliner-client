import Image from "next/image";
import Link from "next/link";

function MenuPosts({ withImage }) {
  return (
    <div className="flex flex-col gap-[35px] mt-[35px] mb-[60px]">
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1 relative aspect-square">
            <Image
              src="/iconPopular/coding.png"
              alt=""
              fill
              className="rounded-full border-[3px] border-gray-300 object-cover"
            />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-[5px]">
          <span className="font-semibold py-[3px] px-2 rounded-[10px] text-xs text-white w-max bg-[#ff7857]">
            Travel
          </span>
          <h3 className="text-lg font-medium text-[#626262]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h3>
          <div className="font-medium">
            <span>John Doe</span>
            <span className="text-gray-500"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1 relative aspect-square">
            <Image
              src="/iconPopular/culture.png"
              alt=""
              fill
              className="rounded-full border-[3px] border-gray-300 object-cover"
            />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-[5px]">
          <span className="font-semibold py-[3px] px-2 rounded-[10px] text-xs text-white w-max bg-[#ffb14f]">
            Travel
          </span>
          <h3 className="text-lg font-medium text-[#626262]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h3>
          <div className="font-medium">
            <span>John Doe</span>
            <span className="text-gray-500"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1 relative aspect-square">
            <Image
              src="/iconPopular/fashion.png"
              alt=""
              fill
              className="rounded-full border-[3px] border-gray-300 object-cover"
            />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-[5px]">
          <span className="font-semibold py-[3px] px-2 rounded-[10px] text-xs text-white w-max bg-[#7fb881]">
            Travel
          </span>
          <h3 className="text-lg font-medium text-[#626262]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h3>
          <div className="font-medium">
            <span>John Doe</span>
            <span className="text-gray-500"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1 relative aspect-square">
            <Image
              src="/iconPopular/food.png"
              alt=""
              fill
              className="rounded-full border-[3px] border-gray-300 object-cover"
            />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-[5px]">
          <span className="font-semibold py-[3px] px-2 rounded-[10px] text-xs text-white w-max bg-[#789cff]">
            Travel
          </span>
          <h3 className="text-lg font-medium text-[#626262]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h3>
          <div className="font-medium">
            <span>John Doe</span>
            <span className="text-gray-500"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MenuPosts;
