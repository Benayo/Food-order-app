import React from "react";

import classes from "../AddProducts.module.css";

const AddProductItem = (props) => {
  return (
    <tr key={props.key}>
      <td>
        <div className={classes["item-detail--1"]}>
          <div className={classes.image}>
            <img src={props.image} alt="" />
          </div>
          <div className={classes["item-detail--1--sub"]}>
            <div className={classes.name}>{props.name}</div>
            <div className={classes.description}>{props.description}</div>
          </div>
        </div>
      </td>
      <td>
        <div className={classes.category}>{props.category}</div>
        {/* <div className="text-sm text-gray-500">
    {person.department}
  </div> */}
      </td>
      <td>
        <span className={classes.active}>Active</span>
      </td>
      <td className={classes.price}>{props.price}</td>
      <td className={classes.actions}>
        <button className={classes.edit} onClick={props.onEdit}>
          Edit
        </button>
      </td>
      <td className={classes.actions}>
        <button onClick={props.onDelete} className={classes.delete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default AddProductItem;
