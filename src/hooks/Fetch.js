import { useSelector } from "react-redux";
export const useFetch = () => {
  const user = useSelector((state) => state.user);
  const loginUser = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: `${user.username}`,
        password: `${user.password}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("userData", JSON.stringify(data));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return {
    loginUser,
  };
};
