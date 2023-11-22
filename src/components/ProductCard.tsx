import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { title, description, imageURL, category, price } = product;
  return (
    <div className="max-w-sm md:max-w-lg mx-auto p-2 border border-gray-300 rounded-md">
      <Image
        imageURL={imageURL}
        imageAlt={title}
        imageClass="rounded-md h-52 w-full lg:object-cover"
      />
      <h4 className="text-lg font-semibold my-3">{title}</h4>
      <p className="text-sm text-gray-500">{txtSlicer(description)}</p>
      <div className="flex my-3 gap-2">
        <span className="w-5 h-5 bg-orange-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-blue-600 rounded-full cursor-pointer" />
      </div>
      <div className="flex items-center justify-between">
        <span>${price}</span>
        <div className="flex gap-2 items-center">
          <span>{category.name}</span>
          <Image
            imageURL={category.imageURL}
            imageAlt={category.name}
            imageClass="w-10 h-10 rounded-full object-bottom"
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 mt-3">
        <Button classBtn="bg-indigo-700">Edit</Button>
        <Button classBtn="bg-[#c2344d]">Delete</Button>
      </div>
    </div>
  );
};

export default ProductCard;
