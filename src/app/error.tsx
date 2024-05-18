"use client";

const ErrorPage = () => {
  return (
    <div className=" text-center">
      <h1 className="text-4xl text-center text-red-500 my-8">
        Something went wrong!!!
      </h1>
      <button className="btn btn-outline btn-secondary ">Try Again</button>
    </div>
  );
};

export default ErrorPage;
