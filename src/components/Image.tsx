interface IProps {
  imageURL: string;
  imageAlt: string;
  imageClass?: string;
}

const Image = ({ imageURL, imageAlt, imageClass }: IProps) => {
  return <img src={imageURL} alt={imageAlt} className={imageClass} />;
};

export default Image;
