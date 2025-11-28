import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <FeaturedProducts />

      {/* Extra Section: FAQ */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="collapse collapse-plus bg-base-200 mb-2">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            How do I order a product?
          </div>
          <div className="collapse-content">
            <p>
              Simply create an account, browse products, and click on purchase.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 mb-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Is shipping free?
          </div>
          <div className="collapse-content">
            <p>Yes, we offer free shipping on orders over $50.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
