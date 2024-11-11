import "./App.css";
import pic from "./Chip.jpg";
import ProductItem from "./ProductItem";
import products from "./products";

function App() {
  const productslist = products.map((products, index) => {
    return (
      <div className="flex1" key={index}>
        <img className="img1" src={products.img} alt={products.name}></img>
        <h3>{products.name}</h3>
        <p>{products.price}</p>
      </div>
    );
  });

  return (
    <div className="first">
      <h1> Chocolate Chip Cookies Shop </h1>
      <p>“Make the world a better place one cookie at a time.”</p>
      <img className="image" src={pic} alt="cookies shop"></img>
      <div>
        {productslist}
        <ProductItem />
      </div>
    </div>
  );
}
export default App;
