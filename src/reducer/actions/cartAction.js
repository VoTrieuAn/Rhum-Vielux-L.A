export const addMovieAction = (item) => {
  return {
    payload: { ...item, quantity: 1 },
    type: "cart/add",
  };
};

export const minusMovieAction = (id) => {
  return {
    payload: id,
    type: "cart/minus",
  };
};

export const deleteMovieAction = (id) => {
  return {
    payload: id,
    type: "cart/delete",
  };
};

export const deleteAllMovieAction = () => {
  return {
    type: "cart/deleteAll",
  };
};
