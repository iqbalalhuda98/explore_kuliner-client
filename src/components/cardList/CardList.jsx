import Image from "next/image";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

function CardList() {
  return (
    <div className="flex-[5]">
      <h1 className="my-12 text-3xl font-extrabold">Recent Posts</h1>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
}

export default CardList;
