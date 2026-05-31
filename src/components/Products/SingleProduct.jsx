import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h2>SingleProduct : Product ID - {id}</h2>
    </div>
  );
};

export default SingleProduct;
