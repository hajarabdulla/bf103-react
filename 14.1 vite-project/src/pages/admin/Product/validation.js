import * as yup from "yup";

export const productValidation = yup.object().shape({
  name: yup.string().required(),
  supplierId: yup.string().required(),
  categoryId: yup.string().required(),
  unitPrice: yup.number("Unit Price should be number").positive().required(),
  unitsInStock: yup.number().positive().required(),
  unitsOnOrder: yup.number().positive().required(),
  reorderLevel: yup.number().positive().required(),
  discontinued: yup.boolean(),
});
