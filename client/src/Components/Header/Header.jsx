
import React from "react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";


const Header = () => {
  return (
    <>
      <header className="flex justify-center gap-6 h-[110px]">
      <div>
        <img
        className="mt-6"
          width="80px"
          height="80px"
          src="src/assets/images/logo.png.png"
          alt=""
        />
      </div>
      <div className="">
        <form className=" w-[850px] mt-8">
          <div className="flex ">
            <label
              // for="search-dropdown"
              className="mb-2 text-sm font-medium  sr-only dark:text-white"
            >
              Your Email
            </label>
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              className="text-green-800 flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center bg-gray-100 border border-e-0 border-gray-300 dark:border-gray-700 dark:text-white rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              type="button"
            >
             All categories{" "}
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div className="relative w-full ">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 dark:placeholder-gray-400 dark:text-white"
                placeholder="Search medicines, medical products"
                required
              />
              <button
                type="submit"
                className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white rounded-e-lg border focus:ring-4 focus:outline-none bg-green-600 hover:bg-green-900"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className=" flex justify-between mt-10 gap-3">
        <FavoriteBorderIcon />
        <ShoppingBagIcon />
        <AccountCircleIcon />
      </div>
    </header>
    <hr />
    </>

  );
};

export default Header;
