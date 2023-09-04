import React, { useState } from "react";
import image from "../cod 1 hero.png";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/authSlice";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, errorMessage } = useSelector((state) => state.auth);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = object({
    email: string()
      .email("Please Enter a valid Email")
      .required("Email is Required"),
    password: string()
      .max(20)
      .min(8, "Password should be Minimum")
      .required("Password is Required"),
  });

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const formValue = { email, password };
  //   dispatch(login({ formValue, navigate }));
  // }

  function formSubmit(value) {
    console.log("value", value);
    dispatch(login({ formValue: value, navigate }));
  }
  return (
    <div className=" main-login ">
      <div className="login-bg">
        <div className="login-box">
          <h6>{errorMessage}</h6>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={formSubmit}
          >
            {() => {
              return (
                <Form>
                  <Field
                    type="email "
                    name="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <ErrorMessage
                    className="error"
                    name="email"
                    component="div"
                  />
                  <Field
                    type="password"
                    name="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    className="password"
                    name="password"
                    component="div"
                  />
                  <center>
                    <button className="btn login" type="submit">
                      {loading ? "Logging.." : "submit"}
                    </button>
                  </center>
                </Form>
              );
            }}
          </Formik>
        </div>
        <div className="video-smoke-container">
          <video className="smoke1" playsInline loop autoPlay muted>
            <source
              src="https://www.activision.com/cdn/cod/hero/hub-hero-smoke-BG.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </div>
      <div className="ImageLion">
        <img src={image} alt=""></img>
      </div>
    </div>
  );
}

export default Login;
