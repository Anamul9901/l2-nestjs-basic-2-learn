import Link from "next/link";

export const metadata = {
  title: "Home Page",
  description: "This is home page",
};

const HomePage = async () => {
  // nextJs e data fetch korar contition:
  // 1: server component hote hobe. {mane upre "use client" use kora jabe nah}
  // 2: async component hote hobe
  const res = await fetch("http://localhost:5000/shoes", {
    // cache: "force-cache", // force-cache dele er all data fase load er jonno cache er modde store kore rakbe. aita na dleo auto by-default force-cache hoye thakbe

    // next.js e sobkisu cache hoy thake. tai server e data change korle o oita change hoy nah, karon data stasick hoye thake.
    //tai next er vetor revalidate use kore bole dua jai je koto second por por data re-cache hobe
    next: {
      revalidate: 30, // standard time 30s
    },
  });
  const shoes = await res.json();
  console.log(shoes);
  return (
    <div className="max-w-7xl mx-auto w-full">
      <h1 className="text-4xl font-semibold text-center">
        Welcome to Next.Js HomePage
      </h1>
      <div className="flex justify-between p-5">
        {shoes.slice(0, 3).map((shoe) => (
          <div key={shoe.id} className="card bg-base-100 w-80 shadow-xl">
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

      <div className="text-center">
        <Link href="/all-shoes" className="rounded-lg font-medium bg-blue-500 border border-blue-500 text-white px-3 py-1">
          Details
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
