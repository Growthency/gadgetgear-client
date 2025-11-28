"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let url = `https://gadgetgear-server-beta.vercel.app/products?`;
    if (search) url += `search=${search}&`;
    if (category) url += `category=${category}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => setLoading(false));
  }, [search, category]);

  return (
    <div className="min-h-screen p-4 md:p-10 bg-base-100">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">All Gadgets</h1>
        <div className="flex flex-col md:flex-row justify-center gap-4 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search products..."
            className="input input-bordered w-full"
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="select select-bordered w-full md:w-auto"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option>Phone</option>
            <option>Laptop</option>
            <option>Headphone</option>
            <option>Watch</option>
            <option>Camera</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="text-center mt-20">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="card bg-base-100 shadow-xl border border-gray-200"
            >
              <figure className="h-48">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-base">{product.title}</h2>
                <div className="badge badge-outline">{product.category}</div>
                <div className="card-actions justify-between items-center mt-4">
                  <div className="text-lg font-bold text-primary">
                    ${product.price}
                  </div>
                  <Link
                    href={`/products/${product._id}`}
                    className="btn btn-sm btn-neutral"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProducts;
