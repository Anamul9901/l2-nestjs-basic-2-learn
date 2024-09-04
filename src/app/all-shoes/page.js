const AllShoesPage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    cache: "no-cache", // 'no-cache' use korle ai api er konu data cache kore rakbe nah. tai backend e data change korle sathe sathe data change hobe.
  });
  const shoes = await res.json();
  console.log(shoes);
  return (
    <div className="max-w-7xl mx-auto w-full">
      <h1 className="text-center text-3xl font-semibold">All Shoes</h1>
      <div className="grid grid-cols-3 gap-5 p-5">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {shoe.title}
                <div className="badge badge-secondary">{shoe.price}</div>
              </h2>
              <p>{shoe.description}</p>
              <div className="card-actions justify-end">
                <button className="rounded-lg font-medium bg-transparent border border-blue-500 text-blue-500 px-3 py-1">
                  Buy Now
                </button>
                <button className="rounded-lg font-medium bg-transparent border border-blue-500 text-blue-500 px-3 py-1">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllShoesPage;
