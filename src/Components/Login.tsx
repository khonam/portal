import { Link } from "react-router-dom";
import luffy from "../assets/luffy.jpg";

export default function Login() {
  return (
    <div className="h-screen">
      <div className="h-screen container mx-auto flex justify-center items-center">
        <div className="lg:border-2 flex justify-center items-center rounded-lg lg:shadow-xl">
          <div>
            <img
              src={luffy}
              alt="luffy"
              width={300}
              className="hidden lg:flex rounded-l-lg w-[25rem] h-[23rem]"
            />
          </div>
          <form className="p-4 space-y-2">
            <div className="text-center">
              <h1 className="font-bold text-2xl mb-5">FORM LOGIN</h1>
            </div>
            <div>
              <input
                type="text"
                placeholder="Username ..."
                className="p-2 border-2 rounded-lg w-[20rem]"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password ..."
                className="p-2 border-2 rounded-lg w-[20rem]"
              />
            </div>
            <div className="flex justify-end">
              <Link to="/lupa_password" className="text-green-700">
                Lupa password ?
              </Link>
            </div>
            <div>
              <button
                type="submit"
                className="p-2 bg-green-700 hover:bg-green-800 text-white text-md font-medium rounded-lg w-[20rem]"
              >
                Login
              </button>
            </div>
            <div className="text-center">
              <p className="text-md">
                Belum punya akun?
                <Link to="/register" className="text-green-700">
                  {" "}
                  Daftar
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
