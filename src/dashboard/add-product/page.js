"use client";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AddProduct = () => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  if (!loading && !user) {
    router.push("/login");
    return <div>Loading...</div>;
  }

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const form = e.target;

    const product = {
      title: form.title.value,
      price: form.price.value,
      category: form.category.value,
      description: form.description.value,
      image: form.image.value || "https://placehold.co/400x300",
      email: user.email,
    };

    try {
      const res = await fetch(
        "https://gadgetgear-server-beta.vercel.app/products",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(product),
        }
      );
      const data = await res.json();

      if (data.insertedId) {
        toast.success("Product Added Successfully!");
        form.reset();
      }
    } catch (error) {
      toast.error("Failed to add product");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200 py-12">
      <div className="card w-full max-w-lg shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-4">
            Add New Gadget
          </h2>
          <form onSubmit={handleAddProduct} className="space-y-4">
            <div className="form-control">
              <label className="label">Title</label>
              <input
                type="text"
                name="title"
                placeholder="Product Name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="flex gap-4">
              <div className="form-control w-1/2">
                <label className="label">Price ($)</label>
                <input
                  type="number"
                  name="price"
                  placeholder="100"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">Category</label>
                <select
                  name="category"
                  className="select select-bordered"
                  required
                >
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>Phone</option>
                  <option>Laptop</option>
                  <option>Headphone</option>
                  <option>Watch</option>
                  <option>Camera</option>
                </select>
              </div>
            </div>

            <div className="form-control">
              <label className="label">Image URL</label>
              <input
                type="text"
                name="image"
                placeholder="https://image-link.com"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">Description</label>
              <textarea
                name="description"
                className="textarea textarea-bordered h-24"
                placeholder="Product details..."
                required
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
