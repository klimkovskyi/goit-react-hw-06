import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contact = useSelector(state => state.contacts.contacts);
  const inputValue = useSelector(state => state.contacts.inputValue);

  const filteredContacts = contact.filter(contact =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id} className={s.item}>
            <Contact name={name} number={number} id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
