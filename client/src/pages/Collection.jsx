import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Collection = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS{" "}
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block `}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <div className="flex gap-2">
              <input className="w-3" type="checkbox" value="Men" /> Men
            </div>
            <div className="flex gap-2">
              <input className="w-3" type="checkbox" value="Women" /> Women
            </div>
            <div className="flex gap-2">
              <input className="w-3" type="checkbox" value="Kids" /> Kids
            </div>
          </div>
        </div>

        {/* SubCategory Filter */}

        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block `}
        >
          <p className="mb-3 text-sm font-medium">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <div className="flex gap-2">
              <input className="w-3" type="checkbox" value="Topwear" /> Topwear
            </div>
            <div className="flex gap-2">
              <input className="w-3" type="checkbox" value="Bottomwear" />{" "}
              Bottomwear
            </div>
            <div className="flex gap-2">
              <input className="w-3" type="checkbox" value="Winterwear" />{" "}
              Winterwear
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Collection;
