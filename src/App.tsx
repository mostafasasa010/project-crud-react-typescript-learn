import ProductCard from "./components/ProductCard";
import { productList } from "./data";

const App = () => {
  // Renders
  const products = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-5 p-4 gap-2">
        {products}
      </div>
    </div>
  );
};

export default App;
