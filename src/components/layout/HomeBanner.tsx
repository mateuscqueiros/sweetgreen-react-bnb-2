import { IconArrowRight } from '@tabler/icons-react';
import { Button } from '../elements';
import bannerImage from '/banner.webp';

export function HomeBannerSection() {
  return (
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
  );
}
