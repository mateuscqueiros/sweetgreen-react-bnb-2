import { IconArrowRight, IconMenu2, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import { ActionButton, Button } from './components/elements';
import { cn } from './utils/cn';

import bannerImage from '/banner.webp';
import buffaloChickenImg from '/buffalo-chicken.jpg';
import kaleImg from '/kale-caesar.jpg';
import logo from '/logo.svg';

type FoodItemType = {
  img: any;
  description: string;
  name: string;
};

type CategoryType = {
  id: number;
  title: string;
  content: FoodItemType[];
};

const categories: CategoryType[] = [
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
        img: kaleImg,
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

function App() {
  const [open, setOpen] = useState(false);

  let activeCategoryClass =
    'text-black after:absolute after:content-[" "] after:h-[5px] after:w-[5px] after:bottom-[-5px] after:left-[50%] after:rounded-full after:bg-black';

  return (
    <>
      <header id="header" className="menu md:h-full">
        <div className="container relative w-full max-w-content-width mx-auto md:p-5 md:flex md:flex-row md:justify-between md:items-center">
          <nav
            className={cn(
              'transition-[left] absolute top-0 left-[-250px] h-screen bg-white w-[250px] p-5 z-50 shadow-2xl md:bg-transparent md:static md:w-fit md:h-[unset] md:p-0',
              open ? 'left-0 fixed' : ''
            )}
          >
            <div className="list-container relative h-full flex flex-col justify-between">
              <ul className="menu-items-list p-0 m-0 h-[120px] flex flex-col justify-between list-none uppercase md:h-[unset] md:gap-[30px] md:flex-row">
                <li className="menu-item">Our menu</li>
                <li className="menu-item">Our mission</li>
                <li className="menu-item">Outpost</li>
              </ul>
              <IconX
                onClick={() => setOpen(false)}
                className="absolute right-0 top-0 cursor-pointer md:hidden"
              />
              <div className="header-actions-mobile flex w-full gap-5 md:hidden">
                <ActionButton variant="primary">Sign in</ActionButton>
                <ActionButton variant="secondary">Order</ActionButton>
              </div>
            </div>
          </nav>
          <div className="header-fixed relative p-5 md:p-0 flex justify-center items-center">
            <IconMenu2
              className="absolute left-5 cursor-pointer md:hidden"
              onClick={() => setOpen(true)}
            />
            <img src={logo} alt="Logo" />
          </div>
          <div className="header-actions-desktop hidden md:flex">
            <ActionButton variant="primary">Sign in</ActionButton>
            <ActionButton variant="secondary">Order</ActionButton>
          </div>
        </div>
      </header>
      <main className="w-full max-w-content-width mx-auto">
        <section id="home-banner" className="relative w-full">
          <div className="banner-image brightness-[.7]">
            <img
              className="h-[500px] min-w-full object-cover"
              src={bannerImage}
              alt="Banner"
            />
          </div>
          <div className="banner-content absolute top-0 flex items-end justify-start z-10 p-5 h-full w-full">
            <div className="banner-info text-white">
              <span className="uppercase">New menu</span>
              <h1 className="my-4 font-light text-4xl leading-[3.5rem] sm:text-[4rem]">
                Now serving summer
              </h1>
              <Button icon={<IconArrowRight />}>Order now</Button>
            </div>
          </div>
        </section>
        <section id="home-carousel-section">
          <div className="carousel-header mt-2 p-4 overflow-auto flex flex-wrap justify-center">
            <ul className="food-classes m-0 p-0 w-full max-w-[450px] flex justify-between">
              {categories.map((item) => (
                <li
                  key={item.id}
                  id="category"
                  className={cn(
                    'active relative text-2xl list-none text-faded-text cursor-pointer sm:text-3xl',
                    true ? activeCategoryClass : null
                  )}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
