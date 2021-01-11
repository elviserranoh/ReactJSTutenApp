import Sweet from "sweetalert2";

// Action Types
const LOGIN = "[Auth] Login";
const LOGOUT = "[Auth] Logout";
const ERROR = "[Auth] Error";

// Reducers

// https://dev.tuten.cl/TutenREST/rest/user/contacto@tuten.cl/bookings?current=true
// {
//   adminemail: "",
//   token: "",
//   app: "",
//   current: true
// }

const initialState = {
  isAuthenticated: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...action.payload,
        isAuthenticated: true,
        current: true,
        errorAuth: false,
      };
    case LOGOUT:
      return {
        isAuthenticated: false,
      };
    case ERROR:
      console.log("error", action);
      return {
        ...state,
        errorAuth: action.payload,
      };
    default:
      return state;
  }
};

//Action Creators
export const loginWithEmailAndPassword = (payload) => ({
  type: LOGIN,
  payload,
});

export const logout = () => ({
  type: LOGOUT,
});

export const setErrorAuth = (err) => ({
  type: ERROR,
  payload: err,
});

// Middleware - Thunk

export const startLoginWithEmailAndPassword = ({ email, password, app }) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(
        `https://dev.tuten.cl/TutenREST/rest/user/${email}`,
        {
          method: "PUT",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
            app: app,
            password: password,
          },
          body: JSON.stringify({ email }),
        }
      ).catch((err) => {
        console.log("err", err.response);
      });

      if (resp.ok) {
        const data = await resp.json();

        const payload = {
          token: data.sessionTokenBck,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          app: app,
        };

        localStorage.setItem("user", JSON.stringify(payload));
        dispatch(loginWithEmailAndPassword(payload));
      } else {
        dispatch(setErrorAuth(true));
        Sweet.fire({
          icon: "error",
          title: "Authentication Error",
          text: "Email or Password are Wrong",
        });
      }
    } catch (error) {
      console.log("error pendejo mont", error);
    }
  };
};

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(logout());
  };
};
