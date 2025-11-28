"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // ডাটা ফেচ করা
  useEffect(() => {
    fetch("https://gadgetgear-server-beta.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  // ডিলিট হ্যান্ডলার
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this?");
    if (!confirm) return;

    try {
      const res = await fetch(
        `https://gadgetgear-server-beta.vercel.app/products/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();

      if (data.deletedCount > 0) {
        toast.success("Product Deleted Successfully!");
        // UI থেকে রিমুভ করা
        const remaining = products.filter((p) => p._id !== id);
        setProducts(remaining);
      }
    } catch (error) {
      toast.error("Failed to delete");
    }
  };

  if (loading)
    return (
      <div className="text-center mt-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  return (
    <div className="min-h-screen p-4 md:p-10 bg-base-100">
      <div className="flex justify-between items-center mb-8 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold">
          Manage Products ({products.length})
        </h1>
        <Link href="/dashboard/add-product" className="btn btn-primary btn-sm">
          Add New +
        </Link>
      </div>

      <div className="overflow-x-auto max-w-6xl mx-auto shadow-xl rounded-xl border border-base-200">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-base-200">
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="hover">
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={product.image} alt={product.title} />
                    </div>
                  </div>
                </td>
                <td className="font-bold">{product.title}</td>
                <td>${product.price}</td>
                <td>
                  <div className="badge badge-ghost">{product.category}</div>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-error btn-xs text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
