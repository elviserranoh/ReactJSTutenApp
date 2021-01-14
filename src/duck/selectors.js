export const getBookingByPriceAndFilter = ({ state, value, filter }) => {
  const bookingFilterByPrice =
    filter === "igual"
      ? state.filter((book) => parseInt(book.bookingPrice) === parseInt(value))
      : filter === "mayor_igual"
      ? state.filter((book) => parseInt(book.bookingPrice) >= parseInt(value))
      : state.filter((book) => parseInt(book.bookingPrice) <= parseInt(value));
        return bookingFilterByPrice;
};

export const getBookingByIdAndFilter = ({ state, value, filter }) => {
  const bookingFilterById =
    filter === "igual"
      ? state.filter((book) => parseInt(book.bookingId) === parseInt(value))
      : filter === "mayor_igual"
      ? state.filter((book) => parseInt(book.bookingId) >= parseInt(value))
      : state.filter((book) => parseInt(book.bookingId) <= parseInt(value));
      return bookingFilterById;
};
