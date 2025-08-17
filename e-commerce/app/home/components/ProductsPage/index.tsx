import ProductCard from "../OurProducts";
const products = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    price: 100,
    image: "/images/dog.jpg",
    rating: 3,
    reviews: 35,
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    price: 360,
    image: "/images/bcamera.png",
    rating: 4,
    reviews: 95,
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    price: 700,
    image: "/images/pc.jpeg",
    rating: 5,
    reviews: 325,
  },
  {
    id: 4,
    name: "Curology Product Set",
    price: 500,
    image: "/images/lotion.jpg",
    rating: 4,
    reviews: 145,
  },
  {
    id: 5,
    name: "Kids Electric Car",
    price: 960,
    image: "/images/redcar.jpeg",
    rating: 5,
    reviews: 65,
    tag: "NEW",
  },
  {
    id: 6,
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    image: "/images/shoes.jpeg",
    rating: 5,
    reviews: 35,
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    image: "/images/game1.jpg",
    rating: 5,
    reviews: 55,
    tag: "NEW",
  },
  {
    id: 8,
    name: "Quilted Satin Jacket",
    price: 660,
    image: "/images/jacket.jpeg",
    rating: 5,
    reviews: 55,
    colors: ["#000000", "#1c3d5a"],
  },
];
export default function ProductsPage() {
  return (
    <section className="py-10 px-6 ml-23">
      <h2 className="text-red-500 font-semibold">Our Products</h2>
      <h1 className="text-2xl font-bold mt-1 mb-6">Explore Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}
