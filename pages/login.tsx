import Link from "next/link";

const LoginPage = (): React.ReactElement => {
  return (
    <div className="flex min-h-screen items-center justify-center sm:col-span-12 lg:col-span-10">
      <form className="">
        <div className="m-auto mx-2 h-fit w-96 space-y-2 rounded-md border p-6 shadow-md dark:border-dark-border dark:bg-dark-background">
          <h1 className="text-2xl font-semibold dark:text-dark-text">Login</h1>
          <div className="space-y-3">
            <span className="flex flex-col space-y-1">
              <label className="dark:text-dark-text" htmlFor="email">
                Email
              </label>
              <input
                className="border p-2 dark:border-dark-border dark:bg-transparent dark:placeholder:text-gray-500"
                type="email"
                placeholder="johndoe@gmail.com"
                name="email"
                id="email"
                required
                // value={userData.email}
                // onChange={handleInput}
              />
            </span>
            <span className="flex flex-col space-y-1">
              <label className="dark:text-dark-text" htmlFor="password">
                Password
              </label>
              <input
                className="border p-2 dark:border-dark-border dark:bg-transparent dark:placeholder:text-gray-500"
                type="password"
                placeholder="**********"
                name="password"
                id="password"
                required
                // value={userData.password}
                // onChange={handleInput}
              />
            </span>
          </div>
          <div className="space-y-2 pt-3">
            <span className="flex flex-col space-y-2">
              <button className="rounded-sm border p-2 font-semibold dark:border-dark-border dark:bg-dark-primary dark:text-dark-text">
                Login
              </button>
              <button
                className="rounded-sm bg-yellow-800 p-2 font-semibold text-white hover:bg-opacity-90 active:opacity-95"
                // onClick={guestLogin}
              >
                Login As Guest
              </button>
            </span>
            <span className="flex justify-center pt-2 font-medium hover:underline dark:text-dark-primary">
              <Link href="/signup">Create New Account</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
