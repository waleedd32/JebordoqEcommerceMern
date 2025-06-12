import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Collection = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTERS
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
      </div>
    </div>
  );
};
export default Collection;
