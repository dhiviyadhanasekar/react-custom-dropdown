import React from "react";
import PropTypes from "prop-types";
import { useStateWithCallbackLazy } from "use-state-with-callback";
import ListOption from "./listOption";
import "./styles/dropdown.css";

const NOOP = function () {};
//TODO: Keyboard navigation, close other boxes if this is open
const Dropdown = (props) => {
  const {
    name,
    label,
    options,
    onShow = NOOP,
    onHide = NOOP,
    onOptionSelect = NOOP
  } = props;
  const [isShown, setIsShown] = useStateWithCallbackLazy(false);
  const [selectedOption, setSelectedOption] = useStateWithCallbackLazy(null);

  const onShowHandler = (e) => {
    setIsShown(!isShown, (isShownValue) => {
      return isShownValue ? onShow(e) : onHide(e);
    });
  };

  const onItemClickHandler = (e) => {
    onShowHandler(e);
    setSelectedOption(e.target.value, (selectedValue) => {
      onOptionSelect(e, selectedValue);
    });
  };

  return (
    <div className="wrapper">
      {label && (
        <label htmlFor={`dropdown-${name}`} className="label">
          {label}
        </label>
      )}
      <div role="listbox" aria-live="polite" id={`dropdown-${name}`}>
        <div className="container" onClick={onShowHandler}>
          {selectedOption}
          <span className="arrow">▼</span>
        </div>
        {isShown && (
          <ul className="list">
            {options.map(({ value, key }, index) => (
              <ListOption
                key={key || index}
                value={value}
                onClick={onItemClickHandler}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      value: PropTypes.any
    })
  )
};

export default Dropdown;
