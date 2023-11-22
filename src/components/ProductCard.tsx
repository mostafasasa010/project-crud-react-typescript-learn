import { IProduct } from "../interfaces";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { title, description, imageURL, category } = product;
  return (
    <div className="p-2 border border-gray-300 rounded-md">
      <Image
        imageURL={imageURL}
        imageAlt="Product Pic"
        imageClass="rounded-md"
      />
      <h4 className="text-lg font-semibold my-3">{title}</h4>
      <p className="text-sm text-gray-500">{description}</p>
      <div className="flex my-3 gap-2">
        <span className="w-5 h-5 bg-orange-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-blue-600 rounded-full cursor-pointer" />
      </div>
      <div className="flex items-center justify-between">
        <span>$350</span>
        <div className="flex gap-2 items-center">
          <span>{category.name}</span>
          <Image
            imageURL={category.imageURL}
            imageAlt="Product Pic"
            imageClass="w-10 h-10 rounded-full object-bottom"
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 mt-3">
        <Button classBtn="bg-green-600">Edit</Button>
        <Button classBtn="bg-red-600">Delete</Button>
      </div>
    </div>
  );
};

export default ProductCard;
