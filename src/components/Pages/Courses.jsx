import React, { useContext } from "react";
import { courseList } from "../../courseList";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Container from "../Container";
import { AppDetails } from "../../App";

function Courses() {
  const Navigate = useNavigate();

  const { cart, setCart, courseListData, setCourseListData } =
    useContext(AppDetails);

  function addToCart(item) {
    const data = courseListData.map((singleItem) => {
      if (singleItem.id === item.id) {
        return { ...singleItem, cart: true };
      } else {
        return singleItem;
      }
    });

    setCourseListData(data);
    setCart([...cart, item]);
  }

  return (
    <div className="container">
      <h3>Courses</h3>
      <div className="row">
        {courseListData.map((item) => {
          const { name, id, cart } = item;
          return (
            <div className="col-md-4  mb-4">
              <div className="card shadow">
                <div className="card-body">
                  <h6 className="mb-0">
                    {name} {id}
                  </h6>
                  {/* <Link to={`/course/${id}`} className="mt-2 d-block">
                    View Course
                  </Link> */}

                  <button
                    className="btn-sm mt-3 btn btn-primary"
                    onClick={() => Navigate(`/course/${id}`, { state: item })}
                  >
                    View Main Course
                  </button>
                  {cart ? null : (
                    <button
                      className="btn-sm mt-3 btn-danger ms-2"
                      onClick={() => addToCart(item)}
                    >
                      Add To Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
