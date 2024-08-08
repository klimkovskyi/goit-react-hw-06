export const addContact = contact => {
  return {
    type: "ADD/CONTACT",
    payload: contact,
  };
};

export const deleteContact = id => {
  return {
    type: "DELETE/CONTACT",
    payload: id,
  };
};

export const setInputValue = value => {
  return { type: "INPUT/VALUE", payload: value };
};
