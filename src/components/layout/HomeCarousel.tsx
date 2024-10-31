import { useState } from 'react';
import { cn } from '../../utils/cn';
import { categories, CategoryHeader, FoodItem } from '../elements';

export function HomeCarouselSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  const activeCategoryData = categories.find((c) => c.id === activeCategory);

  console.log(activeCategoryData);
  return (
    <section id="home-carousel-section">
      <div className="carousel-header mt-2 p-4 overflow-auto flex flex-wrap justify-center">
        <ul className="food-classes m-0 p-0 w-full max-w-[450px] flex justify-between">
          {categories.map((item) => (
            <CategoryHeader
              key={item.id}
              item={item}
              activeCategory={activeCategory}
              onClick={() => setActiveCategory(item.id)}
            />
          ))}
        </ul>
      </div>
      <div className="carousel-content p-4">
        <div
          className={cn(
            'tab-content',
            activeCategoryData && activeCategoryData.content.length > 0
              ? 'grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-4'
              : null
          )}
        >
          {activeCategoryData?.content.map((item) => (
            <FoodItem key={item.name} item={item} />
          ))}
          {activeCategoryData?.content.length === 0 && (
            <div className="w-full flex justify-center">
              Sem conteúdo para essa categoria
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
