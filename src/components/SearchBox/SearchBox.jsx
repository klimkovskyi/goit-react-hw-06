import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setInputValue } from "../../redux/contacts/action";

const SearchBox = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(state => state.contacts.inputValue);

  const handleChangeInput = e => {
    dispatch(setInputValue(e.target.value));
    console.log(e.target.value);
  };

  return (
    <div className={s.wrapper}>
      <label className={s.label} htmlFor="searchInput">
        <span>Find contacts by name</span>
        <input
          type="text"
          id="searchInput"
          name="searchInput"
          onChange={handleChangeInput}
          value={inputValue}
        />
      </label>
    </div>
  );
};

export default SearchBox;
