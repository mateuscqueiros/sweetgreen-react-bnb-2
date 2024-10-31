import { IconArrowRight } from '@tabler/icons-react';
import { Button } from './Button';

export type FoodItemType = {
  img: any;
  description: string;
  name: string;
};

type FoodItemProps = {
  item: FoodItemType;
};

export function FoodItem({ item }: FoodItemProps) {
  return (
    <div key={item.name} className="food-card relative">
      <div className="card-image">
        <Button className="absolute top-4 left-4 text-sm h-8 w-24 cursor-auto">
          Popular
        </Button>
        <img
          src={item.img}
          alt={item.name}
          className="rounded-md w-full h-full min-h-80 object-cover"
        />
      </div>
      <div className="card-content">
        <h3 className="text-xl uppercase my-4 italic font-medium">
          {item.name}
        </h3>
        <p className="mb-3">{item.description}</p>
        <a href="#" className="order-button object-fit flex items-center">
          <span className="text">Order now</span>
          <IconArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
