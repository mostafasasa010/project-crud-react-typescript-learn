import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";
import { formInputsList, productList } from "./data";
import Input from "./components/ui/Input";

const App = () => {
  // States
  const [isOpen, setIsOpen] = useState(false);

  // Handlers
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  // Renders
  const renderProducts = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  const renderInputList = formInputsList.map((input, i) => (
    <div key={i} className="flex flex-col">
      <label htmlFor={input.id}>{input.label}</label>
      <Input type={input.type} id={input.id} name={input.name} />
    </div>
  ));
  return (
    <main className="container">
      <Button classBtn="bg-indigo-700 mt-3" onClick={openModal}>
        Bulid
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-5 gap-2 md:gap-4">
        {renderProducts}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add New Product">
        {renderInputList}
        <div className="flex items-center justify-between gap-2 mt-3">
          <Button classBtn="bg-indigo-700">Add</Button>
          <Button classBtn="bg-[#c2344d]" onClick={closeModal}>
            Cancel
          </Button>
        </div>
      </Modal>
    </main>
  );
};

export default App;
