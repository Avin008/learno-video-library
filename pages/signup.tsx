import Link from "next/link";
import { useState } from "react";

const SignupPage = (): React.ReactElement => {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex min-h-screen items-center justify-center sm:col-span-12 lg:col-span-10">
      <form>
        <div className="m-auto h-fit w-80 space-y-4 rounded-md border p-6 shadow-md dark:border-dark-border dark:bg-dark-background">
          <h1 className="text-2xl font-semibold dark:text-dark-text">
            Sign Up
          </h1>
          <div className="space-y-3">
            <span className="flex flex-col space-y-1">
              <label className="dark:text-dark-text" htmlFor="email">
                First Name
              </label>
              <input
                className="border border-gray-400 p-2 dark:bg-transparent dark:text-dark-text"
                type="text"
                placeholder="John"
                name="firstname"
                id="firstname"
                required
                value={userData.firstname}
                onChange={inputHandler}
              />
            </span>
            <span className="flex flex-col space-y-1">
              <label className="dark:text-dark-text" htmlFor="email">
                Last Name
              </label>
              <input
                className="border border-gray-400 p-2 dark:bg-transparent dark:text-dark-text"
                type="text"
                placeholder="Doe"
                name="lastname"
                id="lastname"
                required
                value={userData.lastname}
                onChange={inputHandler}
              />
            </span>
            <span className="flex flex-col space-y-1">
              <label className="dark:text-dark-text" htmlFor="email">
                Email
              </label>
              <input
                className="border border-gray-400 p-2 dark:bg-transparent dark:text-dark-text"
                type="email"
                placeholder="johndoe@gmail.com"
                name="email"
                id="email"
                required
                value={userData.email}
                onChange={inputHandler}
              />
            </span>
            <span className="flex flex-col space-y-1">
              <label className="dark:text-dark-text" htmlFor="password">
                Password
              </label>
              <input
                className="border border-gray-400 p-2 dark:bg-transparent dark:text-dark-text"
                type="password"
                placeholder="**********"
                name="password"
                id="password"
                required
                value={userData.password}
                onChange={inputHandler}
              />
            </span>
          </div>
          <div className="pt-3">
            <span className="flex flex-col space-y-2">
              <button
                className="rounded-sm bg-dark-primary p-2 font-semibold hover:bg-opacity-90 active:bg-opacity-95 dark:text-dark-text"
                // onClick={signupUser}
              >
                Sign Up
              </button>
            </span>
            <span className="flex justify-center pt-2 font-medium transition-all hover:underline dark:text-dark-primary">
              <Link href="/login">Already Have an Account</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
