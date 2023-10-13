import { useState } from "react";
import CategoryPills from "./components/CategoryPills";
import { categories } from "./data/home";
import PageHeader from "./layouts/PageHeader";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="flex flex-col max-h-screen">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <div>Sidebar</div>
        <div className="px-8 pb-4 overflow-x-hidden">
          <div className="sticky top-0 z-10 pb-4 bg-white">
            <CategoryPills
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
