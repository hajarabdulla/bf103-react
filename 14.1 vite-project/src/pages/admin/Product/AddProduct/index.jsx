import React, { useContext } from "react";
import { MainProvider } from "../../../../context/contextProvider";
import { yupResolver } from "@hookform/resolvers/yup";
import { productValidation } from "../validation";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddProduct = () => {
  const { suppliers, categories } = useContext(MainProvider);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productValidation),
  });

  const onSubmit = async (data) => {
    await axios.post("https://northwind.vercel.app/api/products", data);
  };

  return (
    <>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="name"
            id="name"
            {...register("name")}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          <p className="text-red-600 mb-3">{errors?.name?.message ?? ""}</p>
        </div>

        <div className="mt-5">
          <label
            htmlFor="suppliers"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Suppliers
          </label>
          <select
            id="supplierId"
            {...register("supplierId")}
            className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Select a supplier</option>
            {suppliers?.map((item) => (
              <option key={item?.id} value={item?.id}>
                {item?.companyName}
              </option>
            ))}
          </select>
          <p className="text-red-600 mb-3">
            {errors?.suppliers?.message ?? ""}
          </p>
        </div>

        <div className="mt-5">
          <label
            htmlFor="categories"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Categories
          </label>
          <select
            id="categoryId"
            {...register("categoryId")}
            className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Select a category</option>
            {categories.map((item) => (
              <option key={item?.id} value={item?.id}>
                {item?.name}
              </option>
            ))}
          </select>
          <p className="text-red-600 mb-3">
            {errors?.categories?.message ?? ""}
          </p>
        </div>

        <div className="mt-5">
          <label
            htmlFor="unitPrice"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Unit Price
          </label>
          <input
            type="number"
            id="unitPrice"
            {...register("unitPrice")}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          <p className="text-red-600 mb-3">
            {errors?.unitPrice?.message ?? ""}
          </p>
        </div>

        <div className="mt-5">
          <label
            htmlFor="unitsInStock"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Units In Stock
          </label>
          <input
            type="number"
            id="unitsInStock"
            {...register("unitsInStock")}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          <p className="text-red-600 mb-3">
            {errors?.unitsInStock?.message ?? ""}
          </p>
        </div>

        <div className="mt-5">
          <label
            htmlFor="unitsOnOrder"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Units On Order
          </label>
          <input
            type="number"
            id="unitsOnOrder"
            {...register("unitsOnOrder")}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          <p className="text-red-600 mb-3">
            {errors?.unitsOnOrder?.message ?? ""}
          </p>
        </div>

        <div className="mt-5">
          <label
            htmlFor="reorderLevel"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Reorder Level
          </label>
          <input
            type="number"
            id="reorderLevel"
            {...register("reorderLevel")}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          <p className="text-red-600 mb-3">
            {errors?.reorderLevel?.message ?? ""}
          </p>
        </div>

        <div className="flex items-start mt-5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              {...register("discontinued")}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Discontinued
          </label>
          <p className="text-red-600 mb-3">
            {errors?.discontinued?.message ?? ""}
          </p>
        </div>

        <button
          type="submit"
          className="my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register new account
        </button>
      </form>
    </>
  );
};

export default AddProduct;
