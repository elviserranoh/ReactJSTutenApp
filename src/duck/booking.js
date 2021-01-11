const LOAD_BOOKING = "[Booking] Load";
const FILTER_BOOKING_BY_ID = "[Booking] Filter Booking By Id";
const FILTER_BOOKING_BY_PRICE = "[Booking] Filter Booking By Price";

export const bookingReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_BOOKING:
      return [...action.payload];
    case FILTER_BOOKING_BY_ID:
      return state.filter((book) => parseInt(book.bookingId) === parseInt(action.payload));
    case FILTER_BOOKING_BY_PRICE:
      return state.filter((book) => parseInt(book.bookingPrice) === parseInt(action.payload));
    default:
      return state;
  }
};

// Action Creators
export const loadBooking = (bookings) => ({
  type: LOAD_BOOKING,
  payload: bookings,
});

export const filterBookingById = (bookingId) => ({
  type: FILTER_BOOKING_BY_ID,
  payload: bookingId,
});

export const filterBookingByPrice = (bookingPrice) => ({
  type: FILTER_BOOKING_BY_PRICE,
  payload: bookingPrice,
});

// Middleware - Thunk
export const startLoadBookingByEmail = (emailClient) => {
  return async (dispatch, getState) => {
    const { auth } = getState();

    const resp = await fetch(
      `https://dev.tuten.cl/TutenREST/rest/user/${emailClient}/bookings?current=${auth.current}`,
      {
        method: "GET",
        headers: {
          Accept: "Application/json",
          "Content-Type": "Application/json",
          App: auth.app,
          adminemail: auth.email,
          token: auth.token,
        },
      }
    );

    if (resp.ok) {
      const data = await resp.json();

      const listBooking = data.map((booking) => {
        return {
          bookingId: booking.bookingId,
          firstName: booking.tutenUserClient.firstName,
          lastName: booking.tutenUserClient.lastName,
          bookingTime: booking.bookingTime,
          streetAddress: booking.locationId.streetAddress,
          bookingPrice: booking.bookingPrice,
        };
      });
      dispatch(loadBooking(listBooking));
    }
  };
};
