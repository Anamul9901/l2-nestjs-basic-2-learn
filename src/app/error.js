"use client";
// only ai error handeling page clien side page. er jonno 'use client' use kort hobe must

//* error handaling korar karone only je page theke error asbe sodu je page e error dekhabe. onno page kaj korbe
const ErrorPage = ({ error, reset }) => {
  // console.log(error);
  // error er maddome kun jaiga theke error asce oita buja jabe
  // reset er maddome abar request pathanu jabe.
  return (
    <div className="text-center">
      <h1 className="text-center text-3xl text-red-500">
        Something went wrong
      </h1>
      <h1 className="text-center text-xl text-red-500">{error.message}</h1>
      <button onClick={() => reset()} className="btn btn-sm btn-secondary">
        Try again
      </button>
    </div>
  );
};

export default ErrorPage;
