import React from "react";

type CardProps = {
  name: string;
  imageLink: string;
  counter?: number;
};

const ItemsCard = ({ name, imageLink, counter }: CardProps) => (
  <aside
    className="w-1/5 m-10 h-4/6 flex flex-col items-center justify-center"
    style={{ backgroundImage: `url(${imageLink})` }}
  >
    <h3 className="text-2xl font-medium">{name}</h3>
    <p>{counter}</p>
  </aside>
);

interface ListComponentProps {
  items: CardProps[];
}

const ListComponent: React.FC<ListComponentProps> = ({ items }) => {
  return (
    <div className="flex justify-around flex-wrap">
      {items.map((item, index) => (
        <ItemsCard
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
