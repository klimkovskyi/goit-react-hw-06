import contactsData from "../../contacts.json";

const initialState = {
  contacts: contactsData,
  inputValue: "",
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD/CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case "DELETE/CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    case "INPUT/VALUE":
      return {
        ...state,
        inputValue: action.payload,
      };
    default:
      return state;
  }
};
