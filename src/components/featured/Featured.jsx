import Image from "next/image";

function Featured() {
  return (
    <div className="mt-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-snug">
        <b>Hey, Explore Kuliner here!</b> Discover culinary delights and ideas
        around you.
      </h1>
      <div className="mt-16 flex text-center gap-12">
        <div className="flex-1 h-[500px] relative hidden lg:flex">
          <Image
            src="/food/featured.jpg"
            alt="featured-image"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col gap-5 text-start justify-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="text-base md:text-lg lg:text-xl font-light leading-tight text-[#626262]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            impedit accusantium, obcaecati natus modi fugiat libero velit atque
            explicabo earum? Vel commodi odit ad rerum inventore earum labore
            culpa quibusdam.
          </p>
          <button className="px-5 py-4 border-none rounded-[5px] w-max bg-gray-200">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
