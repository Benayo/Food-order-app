import React from "react";

import classes from "../AddProducts.module.css";

import AddProductItem from "./AddProductItem";

const people = [
  {
    name: "Jellof Rice",
    category: "Rice",
    description: "Delicious jellof rice 🤤",
    price: 2500,
    // email: "jane.cooper@example.com",
    image:
      "https://nomadparadise.com/wp-content/uploads/2020/08/nigerian-food-01.jpg.webp",
  },
  {
    name: "Pounded Yam",
    category: "Yam flour",
    description: "Pounded Yam with egusi soup🍲",
    price: 7200,
    // email: "john.doe@example.com",
    image:
      "https://nomadparadise.com/wp-content/uploads/2020/08/nigerian-food-02b.jpg.webp",
  },
  {
    name: "Amala",
    category: "Yam flour",
    description: "Amala with Ewedu & Gbegiri 🍲",
    price: 1500,
    // email: "veronica.lodge@example.com",
    image:
      "https://nomadparadise.com/wp-content/uploads/2020/08/nigerian-food-03.jpg.webp",
  },
  // More people...
];

const AddProductList = (props) => {
  const table = (
    <table className={classes.table}>
      <thead className="bg-gray-50 ">
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Catergory</th>
          <th scope="col">Status</th>
          <th scope="col">Price (NGN)</th>
          <th scope="col" className="relative px-6 py-3">
            <span className="sr-only">Edit</span>
          </th>
          <th scope="col" className="relative px-6 py-3">
            <span className="sr-only">Delete</span>
          </th>
        </tr>
      </thead>

      <tbody className={classes["table--body"]}>
        {people.map((person) => (
          <AddProductItem
            onEdit={props.onEdit}
            onDelete={props.onDelete}
            key={person.email}
            image={person.image}
            name={person.name}
            description={person.description}
            category={person.category}
            price={person.price}
          />
        ))}
      </tbody>
    </table>
  );

  return (
    <section>
      <div className={classes.header}>
        <div>Added items</div>
        <div className={classes.view}>
          <span>Upload items</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </div>
      </div>
      <div className={classes["table--container"]}>
        <div className={classes["table--container--sub--1"]}>
          <div className={classes["table--container--sub--2"]}>
            <div className={classes["table--container--sub--3"]}>{table}</div>
          </div>
        </div>
        <div className="w-full my-8 flex  justify-end  ">
          <button onSubmit={props.onSubmit} className={classes["btn--full"]}>
            Upload items
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddProductList;
