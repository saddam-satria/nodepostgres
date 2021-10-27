import React from 'react';

const Register = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="py-12 my-6">
      <div className="w-full py-12 flex justify-center">
        <div className="w-full mx-12 xl:w-1/2 py-4">
          <form method="post" onSubmit={submitHandler}>
            <div className="flex flex-col w-full md:w-1/2 mx-auto">
              <span className="p-3 text-white bg-red-400 my-2 rounded-md font-poppins">Error</span>
              <label htmlFor="firstname" className="capitalize font-normal font-poppins">
                firstname
              </label>
              <input className="p-3 bg-blue-50 rounded-md my-4 focus:outline-none font-poppins" name="firstname" type="text" placeholder="firstname" />
              <label htmlFor="lastname" className="capitalize font-normal font-poppins">
                lastname
              </label>
              <input className="p-3 bg-blue-50 rounded-md my-4 focus:outline-none font-poppins" name="lastname" type="text" placeholder="lastname" />
              <label htmlFor="email" className="capitalize font-normal font-poppins">
                email
              </label>
              <input className="p-3 bg-blue-50 rounded-md my-4 focus:outline-none font-poppins" name="email" type="email" placeholder="email" />
              <label htmlFor="password" className="capitalize font-normal font-poppins">
                password
              </label>
              <input className="p-3 my-4 bg-blue-50 rounded-md focus:outline-none font-poppins" name="password" type="password" placeholder="password" />
              <div className="ml-auto">
                <button type="submit" className="p-2 px-6 text-white capitalize rounded-md bg-blue-400">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
