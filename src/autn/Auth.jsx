import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetch } from "../hooks/Fetch";
import { UserActon } from "../Redux/UserAction";

const Auth = () => {
  const fetch = useFetch();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  console.log(user);

  const hadleChageUserName = (e) => {
    dispatch(UserActon({ ...user, username: e.target.value }));
  };
  const hadleChagePPassword = (e) => {
    dispatch(UserActon({ ...user, password: e.target.value }));
  };

  const hanleSubmit = () => {
    fetch.loginUser();
  };

  return (
    <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white border border-black rounded-lg shadow-md p-6">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-black mb-6">
            Войти в аккаунт
          </h2>
        </div>
        <form className="space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-black"
            >
              Логин
            </label>
            <input
              onChange={(e) => hadleChageUserName(e)}
              id="username"
              name="username"
              type="text"
              required
              className="appearance-none rounded-full relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-white text-black"
              placeholder="Логин"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black"
            >
              Пароль
            </label>
            <input
              onChange={(e) => hadleChagePPassword(e)}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-full relative block w-full px-3 py-2 border 
              placeholder-gray-500 text-gray-900 
              focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-white text-black"
              placeholder="Пароль"
            />
          </div>

          <div className="text-center">
            <button
              type="button"
              className="mt-4 w-full inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Войти через Google
            </button>
          </div>

          <div>
            <button
              onClick={() => hanleSubmit()}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
