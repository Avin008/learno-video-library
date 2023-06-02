import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  setData,
  signupUser,
} from "../services/firebaseFunc";
import { useAuthStore } from "../store";

const SignupPage = (): React.ReactElement => {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const router = useRouter();

  const addAuth = useAuthStore(
    (store: any) => store.addAuth
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await signupUser(
        userData.email,
        userData.password
      );
      setData(
        "users",
        res.user.uid,
        userData.firstname,
        userData.lastname,
        userData.email
      );
      addAuth(res.user.uid);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center sm:col-span-12 lg:col-span-10">
      <form onSubmit={handleSubmit}>
        <div className="m-auto mt-10 h-fit space-y-4 rounded-md border p-6 shadow-md dark:border-dark-border dark:bg-dark-background sm:w-80 md:w-96">
          <h1 className="text-2xl font-semibold dark:text-dark-text">
            Sign Up
          </h1>
          <div className="space-y-3">
            <span className="flex flex-col space-y-1">
              <label
                className="dark:text-dark-text"
                htmlFor="email"
              >
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
              <label
                className="dark:text-dark-text"
                htmlFor="email"
              >
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
              <label
                className="dark:text-dark-text"
                htmlFor="email"
              >
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
              <label
                className="dark:text-dark-text"
                htmlFor="password"
              >
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
              <button className="rounded-md bg-dark-primary p-2 font-semibold hover:bg-opacity-90 active:bg-opacity-95 dark:text-dark-text">
                Sign Up
              </button>
            </span>
            <span className="flex justify-center pt-2 font-medium transition-all hover:underline dark:text-dark-primary">
              <Link href="/login">
                Already Have an Account
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
