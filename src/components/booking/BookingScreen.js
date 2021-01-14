import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadBookingByEmail } from "../../duck/booking";
import {
  getBookingByIdAndFilter,
  getBookingByPriceAndFilter,
} from "../../duck/selectors";
import useForm from "../hooks/useForm";

import "./booking.css";

export default function BookingScreen() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.booking);
  const [bookings, setBookings] = useState([]);

  const [formValues, handleInputChanged] = useForm({
    email: "contacto@tuten.cl",
  });

  const [filterValues, handleFilterChanged] = useForm({
    bookingField: "bookingId",
    bookingFilter: "igual",
    bookingFilterValue: "",
  });

  const { bookingFilterValue, bookingFilter, bookingField } = filterValues;

  const handleSubmitFilter = () => {
    if (bookingField === "bookingId") {
      const result = getBookingByIdAndFilter({
        state: state,
        value: bookingFilterValue,
        filter: bookingFilter,
      });
      setBookings(result);
    } else if (bookingField === "bookingPrice") {
      const result = getBookingByPriceAndFilter({
        state: state,
        value: bookingFilterValue,
        filter: bookingFilter,
      });
      setBookings(result);
    }
  };

  useEffect(() => {
    dispatch(startLoadBookingByEmail(formValues.email));
  }, [dispatch, formValues]);

  useEffect(() => {
    setBookings([...state]);
  }, [state]);

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
              name="bookingField"
              onChange={handleFilterChanged}
              value={filterValues.bookingField}
            >
              <option value="bookingId">ID</option>
              <option value="bookingPrice">Price</option>
            </select>
            <input
              type="text"
              className="form-control mx-3"
              name="bookingFilterValue"
              value={filterValues.bookingFilterValue}
              onChange={handleFilterChanged}
              id="bookingFilterValue"
              placeholder=" Ej. 233"
            />
            <select
              name="bookingFilter"
              onChange={handleFilterChanged}
              value={filterValues.bookingFilter}
            >
              <option value="igual">Igual</option>
              <option value="mayor_igual">Mayor o Igual</option>
              <option value="menor_igual">Menor o Igual</option>
            </select>
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
          {bookings.map((booking) => (
            <tr key={booking.bookingId}>
              <th scope="row">{booking.bookingId}</th>
              <td>{`${booking.firstName} ${booking.lastName}`}</td>
              <td>{convertUnixToDate(booking.bookingTime)}</td>
              <td>{booking.streetAddress}</td>
              <td>{booking.bookingPrice}</td>
            </tr>
          ))}

          {state.length === 0 && (
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
