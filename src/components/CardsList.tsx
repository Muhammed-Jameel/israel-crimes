import Link from "next/link";
import React from "react";

type CardProps = {
  name: string;
  imageLink: string;
  counter?: number;
  route?: string;
};

const ItemsCard = ({ route, name, imageLink, counter }: CardProps) => (
  <Link
    href={`/${route}/${name}`}
    className="lg:w-1/5 sm:w-2/6 w-full m-10 h-4/6 flex flex-col items-center justify-center rounded-xl text-white"
    style={{ backgroundImage: `url(${imageLink})` }}
  >
    <h3 className="text-2xl font-medium">{name}</h3>
    <p>{counter}</p>
  </Link>
);

interface ListComponentProps {
  items: CardProps[];
  route?: string;
}

const ListComponent: React.FC<ListComponentProps> = ({ items, route }) => {
  return (
    <div className="flex justify-around flex-wrap gap-4">
      {items.map((item, index) => (
        <ItemsCard
          route={route}
          key={index}
          name={item.name}
          imageLink={item.imageLink}
          counter={item.counter}
        />
      ))}
    </div>
  );
};

export default ListComponent;
