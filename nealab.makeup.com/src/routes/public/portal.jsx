import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Portal() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //Current user logged in
  const { currentUser } = useAuth();

  useEffect(() => {
    //Checks if user is logged in already and redirects if they are
    if (currentUser) {
      navigate("/dashboard");
    }
  });

  //Handle login
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(username, password);
      navigate("/dashboard");
    } catch {
      setError("Invalid login details");
    }
    setLoading(false);
  }

  return (
    <div className="font-Rasa text-NealabDarkPink h-screen w-full">
      <div className="text-center mt-5 text-5xl">
        <NavLink className="hover:font-semibold hover:cursor-pointer" to="/">
          Nealab Rasooli
        </NavLink>
      </div>
      <div className=" bg-NealabDarkPink shadow-xl text-white w-2/5 lg:w-1/4 md:w-1/2 py-10 px-5 rounded mx-auto mt-20">
        <form onSubmit={handleSubmit} action="" className=" flex flex-col">
          <label htmlFor="username" className="">
            Username:
          </label>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            id="username"
            type="text"
            className="text-black text-sm"
          />
          <label htmlFor="password" className="">
            Password:
          </label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="password"
            type="password"
            className="text-black text-sm"
          />
          {error ? (
            <p className="text-white text-xs mt-2">{error}</p>
          ) : (
            <div className="hidden"></div>
          )}
          <div className="flex flex-row justify-center items-center mt-5 hover:cursor-pointer hover:scale-105">
            <button className="mr-2 text-md">Log In</button>
            <button disabled={loading} className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
