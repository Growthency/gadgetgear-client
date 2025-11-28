import Link from "next/link";

async function getProducts() {
  try {

    const res = await fetch(
      "https://gadgetgear-server-beta.vercel.app/products",
      {
        cache: "no-store",
      }
    );


    if (!res.ok) {
      return [];
    }

 
    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return []; 
    }

    return res.json();
  } catch (error) {
    console.log("Error fetching products:", error);
    return [];
  }
}

const FeaturedProducts = async () => {
  const products = await getProducts();
  
  const featured = Array.isArray(products) ? products.slice(0, 6) : [];

  return (
    <div className="py-16 px-4 md:px-8 bg-base-100">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2">Featured Gadgets</h2>
        <p className="text-gray-500">Check out our latest arrivals</p>
      </div>

      {featured.length === 0 ? (
        <div className="text-center p-10 border border-dashed border-gray-300 rounded-lg bg-base-200">
          <h3 className="text-xl font-semibold text-warning">
            No Products Found
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Server might be down or database is empty.
            <br />
            Make sure backend is running on port 5000.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((product) => (
            <div
              key={product._id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow border border-base-200"
            >
              <figure className="h-48 overflow-hidden">
                <img
                  src={product.image || "https://placehold.co/400x300"}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {product.title}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className="text-sm text-gray-500">
                  {product.shortDescription?.slice(0, 60)}...
                </p>
                <div className="card-actions justify-between items-center mt-4">
                  <div className="font-bold text-xl text-primary">
                    ${product.price}
                  </div>
                  <Link
                    href={`/products/${product._id}`}
                    className="btn btn-sm btn-outline"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-10">
        <Link href="/products" className="btn btn-neutral px-8">
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProducts;
