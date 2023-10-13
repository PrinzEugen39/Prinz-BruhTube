import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./Button";
import { useState } from "react";

type CategoryPillProps = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};

const TRANSLATE_AMOUNT = 200;

export default function CategoryPills({
  categories,
  selectedCategory,
  onSelect,
}: CategoryPillProps) {
  const [translate, setTranslate] = useState(0);
  const [isLeftVisible, SetIsLeftVisible] = useState(false);
  const [isRightVisible, SetIsRightVisible] = useState(false);

  return (
    <div className="relative overflow-x-hidden">
      <div className="flex gap-3 transition-transform whitespace-nowrap w-[max-content]"
      style={{ transform: `translateX(-${translate}px)`}}>
        {categories.map((category) => (
          <Button
            onClick={() => onSelect(category)}
            key={category}
            variant={selectedCategory === category ? "dark" : "default"}
            className="px-3 py-1 rounded-lg whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
      </div>
      {isLeftVisible && (
        <div className="absolute left-0 -translate-y-1/2 top-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
          <Button
            onClick={() => {
              setTranslate((translate) => {
                const newTranslate = translate - TRANSLATE_AMOUNT;
                if (newTranslate <= 0) return 0;
                return newTranslate;
              });
            }}
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p-1.5"
          >
            <ChevronLeft />
          </Button>
        </div>
      )}
      {isRightVisible && (
        <div className="absolute right-0 -translate-y-1/2 top-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p-1.5"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
}
