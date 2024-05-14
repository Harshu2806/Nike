import React, { useState } from "react";
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";
import { cancel1 } from '../assets/icons';

const PopularProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after selection.
          Discover a world of comfort, design, and value.
        </p>

        {selectedProduct ? (
          <div className="flex flex-col items-center border-2 border-black pb-7 pt-7 bg-zinc-200 rounded-lg ">
            {/* Show product details */}
            <div  className="right-2 top-1 cursor-pointer pl-[90%]">
            <img src={cancel1} alt="cancel" onClick={() => setSelectedProduct(null)}  width={25} height={25} />
          </div>
            <img src={selectedProduct.imgURL} alt={selectedProduct.name} className="w-[980px] h-[480px] justify-center items-center" />
            <h3 className="text-4xl mt-5 pl-20 text-coral-red font-palanquin">{selectedProduct.name}</h3>
            <p className="mt-2 font-semibold">{selectedProduct.price}</p>
            {/* Add more details as needed */}
            
            
          </div>
        ) : (
          <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
            {/* Show product grid */}
            {products.map((product) => (
              <PopularProductCard
                key={product.name}
                {...product}
                onClick={() => handleProductClick(product)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularProducts;
