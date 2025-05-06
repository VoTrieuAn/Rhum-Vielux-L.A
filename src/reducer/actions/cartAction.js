export const addInputProductAction = (item, quantity) => {
  return {
    payload: { ...item, quantity },
    type: "cart/addInput",
  };
};

export const addProductAction = (item) => {
  return {
    payload: item,
    type: "cart/add",
  };
};

export const minusProductAction = (id) => {
  return {
    payload: id,
    type: "cart/minus",
  };
};

export const deleteProductAction = (id) => {
  return {
    payload: id,
    type: "cart/delete",
  };
};

export const deleteAllProductAction = () => {
  return {
    type: "cart/deleteAll",
  };
};
