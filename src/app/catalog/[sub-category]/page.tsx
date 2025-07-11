import CategoryBtns from "@/components/shared/CategoryBtns";
import ProductCard from "@/components/shared/ProductCard";
import { prods } from "@/constants";
import { glasses } from "@/constants/glasses";
import React from "react";

export const revalidate = 600;
export const dynamicParams = true;

export default async function SubCategory({
  params,
}: {
  params: { "sub-category": string };
}) {
  const { "sub-category": subCategory } = params;

  // Combine both sources
  const combined = [...glasses, ...prods];

  // Filter products by category match
  const filteredProds = combined.filter((el) => el.category === subCategory);

  // If nothing found
  if (filteredProds.length === 0) {
    return <div className="text-center py-10">Product not found</div>;
  }

  return (
    <div className="container px-5 md:px-1 mx-auto">
      <CategoryBtns />
      <div>
        <h2 className="text-[35px] font-bold mb-5 text-center">
          {filteredProds[0].category_name}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pb-20">
          {filteredProds.map((el) => (
            <ProductCard key={el.id} prod={el} />
          ))}
        </div>
      </div>
    </div>
  );
}
