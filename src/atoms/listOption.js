import React from "react";
import PropTypes from "prop-types";
import "./styles/listOption.css";

const ListOption = (props) => {
  const { value, onClick } = props;
  return (
    <li
      className="listItem"
      tabIndex="-1"
      onClick={onClick}
      value={value}
      role="menuitem"
    >
      {value}
    </li>
  );
};
ListOption.propTypes = {
  value: PropTypes.any
};

export default ListOption;
