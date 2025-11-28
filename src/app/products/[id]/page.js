"use client";
import { useEffect, useState } from "react";
import { use } from "react"; // Next.js param unwrap hook
import Link from "next/link";

const ProductDetails = ({ params }) => {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://gadgetgear-server-beta.vercel.app/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <div className="text-center mt-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  if (!product)
    return (
      <div className="text-center mt-20 text-error">Product not found</div>
    );

  return (
    <div className="min-h-screen bg-base-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link href="/products" className="btn btn-outline mb-6">
          ← Back to Products
        </Link>

        <div className="flex flex-col md:flex-row gap-10 bg-base-100 shadow-2xl rounded-2xl overflow-hidden border border-base-200">
          {/* Image Section */}
          <div className="md:w-1/2 h-[400px] md:h-[500px] bg-base-200 relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="badge badge-primary mb-4">{product.category}</div>
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
            <h2 className="text-3xl font-semibold text-primary mb-6">
              ${product.price}
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="flex gap-4">
              <button className="btn btn-primary btn-lg flex-1">Buy Now</button>
              <button className="btn btn-outline btn-lg flex-1">
                Add to Cart
              </button>
            </div>

            <div className="divider my-8"></div>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
              <p>✅ Free Shipping</p>
              <p>✅ 2 Year Warranty</p>
              <p>✅ 30 Days Return</p>
              <p>✅ 100% Authentic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
