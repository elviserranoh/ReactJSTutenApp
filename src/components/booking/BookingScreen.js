import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterBookingByPrice, filterBookingById, startLoadBookingByEmail } from "../../duck/booking";
import useForm from "../hooks/useForm";

import "./booking.css";

export default function BookingScreen() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.booking);

  const [formValues, handleInputChanged] = useForm({
    email: "contacto@tuten.cl",
  });

  const [filterValues, handleFilterChanged] = useForm({
    bookingFilter: "bookingId",
    bookingFilterValue: "",
  });

  const handleSubmitFilter = () => {
   if(filterValues.bookingFilter === "bookingId") {
    dispatch(filterBookingById(filterValues.bookingFilterValue));
   } else if(filterValues.bookingFilter === "bookingPrice") {
    dispatch(filterBookingByPrice(filterValues.bookingFilterValue));
   }
  };

  useEffect(() => {
    dispatch(startLoadBookingByEmail(formValues.email));
  }, [dispatch, formValues]);

  const convertUnixToDate = (unix_timestamp) => {
    var date = new Date(unix_timestamp);
    return date.toLocaleDateString();
  };

  return (
    <div className="container-fluid  mt-4">
      <div className="d-flex">
        <div>
          <label htmlFor="emailClient" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            name="email"
            id="emailClient"
            onChange={handleInputChanged}
            value={formValues.email}
            placeholder="elvis@dev.tuten.cl"
          />
        </div>
        <div className="mr-2">
          <label htmlFor="bookingFilterValue" className="form-label">
            Filtrar
          </label>
          <div className="d-flex flex-row">
            <select
              name="bookingFilter"
              onChange={handleFilterChanged}
              value={filterValues.bookingFilter}
            >
              <option value="bookingId">ID</option>
              <option value="bookingPrice">Price</option>
            </select>
            <input
              type="text"
              className="form-control"
              name="bookingFilterValue"
              value={filterValues.bookingFilterValue}
              onChange={handleFilterChanged}
              id="bookingFilterValue"
              placeholder=" Ej. 233"
            />
            <button
              onClick={handleSubmitFilter}
              className="btn btn-primary btn-sm ml-1"
            >
              Filtrar
            </button>
          </div>
        </div>
      </div>
      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th scope="col">BookingId</th>
            <th scope="col">Cliente</th>
            <th scope="col">Fecha de Creación</th>
            <th scope="col">Dirección</th>
            <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {state.map((booking) => (
            <tr key={booking.bookingId}>
              <th scope="row">{booking.bookingId}</th>
              <td>{`${booking.firstName} ${booking.lastName}`}</td>
              <td>{convertUnixToDate(booking.bookingTime)}</td>
              <td>{booking.streetAddress}</td>
              <td>{booking.bookingPrice}</td>
            </tr>
          ))}

          {state.length == 0 && (
            <tr>
              <td colSpan="5">
                <p className="text-center">No Hay registros para el cliente</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}