import React from "react";

export const Login = () => {
  return (
    <main className="container-element container-fluid p-0 m-0 d-flex">
      <div className="img-wrapper p-0 m-0">
        <img
          className="img-login img-fluid w-100 p-0 m-0 h-100"
          src="https://s3-alpha-sig.figma.com/img/7a6a/500a/6af385cc960e064ac5ece5f5c3cb89af?Expires=1603065600&Signature=YxCVrx2IKcHulp7ermma7L7j3z3uuZanX1fQQxFIWA7FaUbC5esrwY4B7XAkwsATwqoeJA0a7k7YdlHe~6vh80FoOIz8B~bZ0x17q~d~NX2fAR0CcMVEasroaLTjIsGsXHg1uMXxvZEjgGEpo1jl3xaT-QK6D9JDilvHoW8NFxxGHBuKf3SO3fhyXLf4z3b5HZGuZ3OnJ0eY0tuDq9GrsD901TW7uJDZZxEnNRSlH7T0tYpAKrD0XaDT2pRCWyaCOmdOkRz848fVPkL7Ay0YhWwBpVlQLSwE682QjEEPoe0FuzyKcLyq6w3zknGuHuQpPm44SF6mN9qa9xWw5NmFIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
        />
      </div>
      <div className="form-wrapper container-fluid m-0">
        <div className="d-flex align-items-center justify-content-center brand-name-wrapper">
          <h1 className="font-weight-bold align-middle brand-name">
            join.ts.io
          </h1>
        </div>

        <div className="d-flex justify-content-center login-wrapper">
          <form className="form align-self-center">
            <legend className="h1 mb-5 font-weight-bold">Login</legend>
            <div className="form-group">
              <label className="h5 mb-1" htmlFor="username">
                Username
              </label>
              <input
                type="email"
                className="form-control mb-3 input-login"
                id="username"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group mb-5">
              <label className="h5 mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                className="form-control input-login"
                id="password"
                placeholder="Enter password"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-lg active w-100 p-3 mb-3 mt-5"
            >
              Log in
            </button>
            <p>
              <u>Forgot password?</u>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};
