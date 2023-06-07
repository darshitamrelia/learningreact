import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Redux/cartSlice";
import { changeName } from "./Redux/profileSlice";
import { ChangeImage } from "./Redux/profileSlice";

function App() {
  const { totalItem } = useSelector((state) => state.cart);
  const { name, Address, Image } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2>Total Item {totalItem} </h2>
      <button
        className="btn btn-sm btn-primary"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>

      <hr />

      <h1>User Name: {name} </h1>
      <h3>Address : {Address}</h3>

      <button
        className="btn btn-sm btn-info"
        onClick={() => dispatch(changeName())}
      >
        Change Name
      </button>

      {/* <button
        className="btn btn-sm m-2 btn-info"
        onClick={() => dispatch(ChangeImage())}
      >
        Change Image
      </button> */}

      <hr />

      <button
        className="btn btn-sm m-auto py-3 btn-info d-flex justify-content-center align-self-center"
        onClick={() => dispatch(ChangeImage())}
      >
        Change Image
      </button>
      <img src={Image} width="100%" />
    </div>
  );
}

export default App;
