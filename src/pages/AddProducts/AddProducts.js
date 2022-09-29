import React from "react";
import SideBar from "../DashBoard/Vendors/navigation/SideBar";
import Header from "../DashBoard/Vendors/components/sections/Header";
import classes from "./AddProducts.module.css";

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

const AddProducts = () => {
  return (
    <section className={classes.container}>
      <SideBar />
      <div className={classes["layout-container"]}>
        <Header
          to="/vendor-dashboard"
          title="Add products"
          title2=""
          view="Go to dashboard"
        ></Header>
        <form>
          <div className={classes["addImage--container"]}>
            <div className={classes.addImage}>+Add Image</div>
            <div className={classes.remove}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class=" h-4 w-4 md:h-6 md:w-6 mx-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>{" "}
              <span>Remove Image</span>
            </div>
          </div>

          <div className={classes["input__control"]}>
            <input
              className={classes["input"]}
              type="text"
              placeholder="Food name"
            />
            {<p className={classes["error-text"]}>Food name is required!</p>}
          </div>

          <div className={classes["input__control"]}>
            <input
              className={classes["input"]}
              type="number"
              placeholder="Food price"
            />
            {<p className={classes["error-text"]}>Food price</p>}
          </div>

          <div className={classes["input__control"]}>
            <input
              className={classes["input"]}
              type="text"
              placeholder="Item category"
            />
          </div>

          <div className={classes["input__control"]}>
            <textarea
              className={classes["input"]}
              cols="20"
              rows="10"
              type="number"
              placeholder="Briefly describe the food item"
            />
            {<p className={classes["error-text"]}>Description is required!</p>}

            <div className="py-4">
              <div className="text-sm">+10 items Added</div>
            </div>

            <div className={classes["action--btn"]}>
              <button className={classes["btn--stroke"]}>Add new item</button>
              <button className={classes["btn--full"]}>Upload item</button>
            </div>
          </div>
        </form>

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
              <div className={classes["table--container--sub--3"]}>
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
                      <tr key={person.email}>
                        <td>
                          <div className={classes["item-detail--1"]}>
                            <div className={classes.image}>
                              <img src={person.image} alt="" />
                            </div>
                            <div className={classes["item-detail--1--sub"]}>
                              <div className={classes.name}>{person.name}</div>
                              <div className={classes.description}>
                                {person.description}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className={classes.category}>
                            {person.category}
                          </div>
                          {/* <div className="text-sm text-gray-500">
                      {person.department}
                    </div> */}
                        </td>
                        <td>
                          <span className={classes.active}>Active</span>
                        </td>
                        <td className={classes.price}>{person.price}</td>
                        <td className={classes.actions}>
                          <button className={classes.edit}>Edit</button>
                        </td>
                        <td className={classes.actions}>
                          <button className={classes.delete}>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="w-full my-8 flex  justify-end  ">
            <button className={classes["btn--full"]}>Upload items</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddProducts;
