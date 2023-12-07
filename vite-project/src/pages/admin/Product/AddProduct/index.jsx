import React, { useContext } from "react";
import { MainProvider } from "../../../../context/contextProvider";

const AddProduct = () => {
  const { suppliers, categories } = useContext(MainProvider);

  return (
    <>
      <form class="max-w-sm mx-auto">
        <div class="mb-5">
          <label
            htmlFor="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="name"
            id="name"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>

        <label
          htmlFor="suppliers"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Suppliers
        </label>
        <select
          id="suppliers"
          className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {suppliers?.map((item) => (
            <option key={item?.id} value={item?.id}>
              {item?.companyName}
            </option>
          ))}
        </select>

        <label
          htmlFor="categories"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Categories
        </label>
        <select
          id="categories"
          className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {categories.map((item) => (
            <option key={item?.id} value={item?.id}>
              {item?.name}
            </option>
          ))}
        </select>

        <div className="mb-5">
          <label
            htmlFor="unitPrice"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Unit Price
          </label>
          <input
            type="number"
            id="unitPrice"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="unitsInStock"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Units In Stock
          </label>
          <input
            type="number"
            id="unitsInStock"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="unitsOnOrder"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Units On Order
          </label>
          <input
            type="number"
            id="unitsOnOrder"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="reorderLevel"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Reorder Level
          </label>
          <input
            type="number"
            id="reorderLevel"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>

        <div className="flex items-start mb-5">
          <div class="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
          </div>
          <label
            htmlFor="terms"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Discontinued
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register new account
        </button>
      </form>
    </>
  );
};

export default AddProduct;
