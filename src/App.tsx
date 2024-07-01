import CreateProduct from "./components/CreateProduct";
import { ErrorMessage } from "./components/ErrorMessage";
import { Loader } from "./components/Loader";
import Modal from "./components/Modal";
import { Product } from "./components/Product";
import { useProducts } from "./hooks/products";

function App() {
  const { loading, error, products } = useProducts();

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}

      {/* <Product product={products[0]} />
      <Product product={products[1]} /> */}

      <Modal title="Create new product">
        <CreateProduct />
      </Modal>
    </div>
  );
  // return React.createElement("h1", {}, "Hello From JS");
}

export default App;
