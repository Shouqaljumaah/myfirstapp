import "./App.css";
import pic from "./Chip.jpg";
import ProductItem from "./ProductItem";
import products from "./products";

function App() {
  const productslist = products.map((product, index) => (
    <ProductItem myitem={product} />
  ));

  return (
    <div className="first">
      <h1> Chocolate Chip Cookies Shop </h1>
      <p>“Make the world a better place one cookie at a time.”</p>
      <img className="image" src={pic} alt="cookies shop"></img>
      <div className="flex1">{productslist}</div>
    </div>
  );
}
export default App;
