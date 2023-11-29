import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SupplierDetail = () => {
  const { supplierId } = useParams();
  const [supplier, setSupplier] = useState({});

  const getSupplier = async () => {
    const res = await axios.get(
      `https://northwind.vercel.app/api/suppliers/${supplierId}`
    );
    setSupplier(res?.data);
  };

  useEffect(() => {
    getSupplier();
  }, []);

  return (
    <div>
      <h1>{supplier.id}</h1>
      <p>{supplier.companyName}</p>
      <p>{supplier.contactName}</p>
      <p>{supplier.contactTitle}</p>
      <p>{supplier.address?.street}</p>
      <p>{supplier.address?.city}</p>
      <p>{supplier.address?.region}</p>
      <p>{supplier.address?.postalCode}</p>
      <p>{supplier.address?.country}</p>
      <p>{supplier.address?.phone}</p>
    </div>
  );
};

export default SupplierDetail;
