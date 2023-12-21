import MenuCategories from "../menuCategories/MenuCategories";
import MenuPosts from "../menuPosts/MenuPosts";

function Menu() {
  return (
    <div className="flex-[2] mt-[50px]">
      <h2 className="text-gray-500 text-base font-normal">{"What's hot"}</h2>
      <h1 className="text-[28px] font-extrabold">Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className="text-gray-500 text-base font-normal">Discover by topic</h2>
      <h1 className="text-[28px] font-extrabold">Categories</h1>
      <MenuCategories />
      <h2 className="text-gray-500 text-base font-normal">
        Chosen by the editor
      </h2>
      <h1 className="text-[28px] font-extrabold">Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
}

export default Menu;
