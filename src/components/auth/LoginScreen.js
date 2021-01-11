import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { setErrorAuth, startLoginWithEmailAndPassword } from "../../duck/user";
export const LoginScreen = () => {
  const { errorAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    isValid,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: {
      email: "testapis@tuten.cl",
      password: "1234",
      app: "APP_BCK",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .min(4, "Password is to short - should be 4 chars minimun.")
        .required("Required"),
      app: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(startLoginWithEmailAndPassword({ ...values }));
    },
  });

  useEffect(() => {
    setSubmitting(false);
    dispatch(setErrorAuth(false));
  }, [dispatch, setSubmitting, errorAuth]);

  return (
    <div className="container-fluid">
      <div className="row" style={{ height: "100vh" }}>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <form onSubmit={handleSubmit} className="w-75">
            <h2 className="text-black-50">Sign in.</h2>
            <p className="mt-3 text-muted">
              Give us some of your information to get free access to fieldly
            </p>
            <div className="mt-4 mb-3">
              <label htmlFor="email" className="fw-bold  text-black-50">
                Your e-mail
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  placeholder="elviserranoh@gmail.com"
                  className="form-control"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email ? (
                  <div className="mt-1 text-danger">{errors.email}</div>
                ) : null}
              </div>
            </div>
            <div className="mt-3 mb-3">
              <label htmlFor="password" className="fw-bold text-black-50">
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <div className="mt-1 text-danger">{errors.password}</div>
                )}
              </div>
            </div>
            <div className="mt-3 mb-3">
              <label htmlFor="app" className="fw-bold text-black-50">
                App
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  className="form-control"
                  name="app"
                  id="app"
                  value={values.app}
                  onChange={handleChange}
                />
                {errors.app && (
                  <div className="mt-1 text-danger">{errors.app}</div>
                )}
              </div>
            </div>
            <button
              className="mt-3 btn btn-primary w-100"
              disabled={!isValid || isSubmitting}
            >
              Log In
            </button>
          </form>
        </div>
        <div
          className="col-md-6 d-none d-md-flex justify-content-center align-items-end"
          style={{ backgroundColor: "#5923B7" }}
        >
          <p className="text-white fw-bold" style={{ fontSize: 12 }}>
            @dev.tuten.cl
          </p>
        </div>
      </div>
    </div>
  );
};
