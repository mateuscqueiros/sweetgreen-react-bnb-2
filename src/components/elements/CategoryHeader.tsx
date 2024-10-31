import { cn } from '../../utils/cn';
import { FoodItemType } from './FoodItem';
import buffaloChickenImg from '/buffalo-chicken.jpg';
import guacamoleImg from '/guacamole.webp';
import kaleImg from '/kale-caesar.jpg';

export type CategoryType = {
  id: number;
  title: string;
  content: FoodItemType[];
};

export type CategoryHeaderProps = {
  item: CategoryType;
  activeCategory: number;
} & React.ButtonHTMLAttributes<HTMLLIElement>;

export const categories: CategoryType[] = [
  {
    id: 0,
    title: 'Salads',
    content: [
      {
        name: 'Kale Caesar',
        img: kaleImg,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      },
      {
        name: 'Guacamole Greens',
        img: guacamoleImg,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      },
      {
        name: 'Buffalo Chicken',
        img: buffaloChickenImg,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      },
    ],
  },
  {
    id: 1,
    title: 'Bowls',
    content: [],
  },
  {
    id: 2,
    title: 'Sides',
    content: [],
  },
];

export function CategoryHeader({
  item,
  activeCategory,
  ...rest
}: CategoryHeaderProps) {
  let activeCategoryClass =
    'text-black after:absolute after:content-[" "] after:h-[5px] after:w-[5px] after:bottom-[-5px] after:left-[50%] after:rounded-full after:bg-black';
  return (
    <li
      key={item.id}
      id="category"
      className={cn(
        'active relative text-2xl list-none text-faded-text cursor-pointer sm:text-3xl',
        activeCategory === item.id ? activeCategoryClass : null
      )}
      {...rest}
    >
      {item.title}
    </li>
  );
}
