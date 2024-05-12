import "./index.css";

const productItem = (props) => {
  const { productdetails } = props;
  const { id, imageUrl, name } = productdetails;

  return (
    <li>
      <div className="image">
        <img src={imageUrl} alt="product" className="image" />
        <h1 className="name">{name}</h1>
        <p></p>
      </div>
    </li>
  );
};
export default productItem;
