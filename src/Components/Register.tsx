import { Link } from "react-router-dom";
import luffy from "../assets/luffy.jpg";
import { useState } from "react";

export default function Register() {
  const [regis, setregis] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handlesubmit = (e: any) => {
    e.preventDefault();
    console.log(regis);
  };
  const handlechange = (e: any) => {
    const { name, value } = e.target;
    setregis({ ...regis, [name]: value });
  };
  return (
    <div className="h-screen">
      <div className="h-screen container mx-auto flex justify-center items-center">
        <div className="lg:border-2 flex justify-center items-center lg:shadow-xl rounded-lg">
          <form className="p-4 space-y-2" onSubmit={handlesubmit}>
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-5">FORM REGISTER</h1>
            </div>
            <div>
              <input
                type="text"
                name="username"
                value={regis.username}
                onChange={handlechange}
                placeholder="Username ..."
                className="p-2 w-[20rem] rounded-lg border-2"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={regis.email}
                onChange={handlechange}
                placeholder="Email ..."
                className="p-2 w-[20rem] rounded-lg border-2"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={regis.password}
                onChange={handlechange}
                placeholder="Password ..."
                className="p-2 w-[20rem] rounded-lg border-2"
              />
            </div>
            <div>
              <button
                type="submit"
                className="p-2 w-[20rem] rounded-lg bg-green-700 hover:bg-green-800 text-white text-md font-medium"
              >
                Register
              </button>
            </div>
            <div className="text-center">
              <p className="text-md">
                Sudah punya akun?
                <Link to="/" className="text-green-700">
                  {" "}
                  Login
                </Link>
              </p>
            </div>
          </form>
          <div>
            <img
              src={luffy}
              alt="luffy"
              width={300}
              className="rounded-r-lg w-[25rem] h-[23rem] hidden lg:flex"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
