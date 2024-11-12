function ProductItem(props) {
  console.log(props.myitem);
  return (
    <div>
      <img className="img1" src={props.myitem.img} alt="item"></img>
      <h3>{props.myitem.name}</h3>
      <p>{props.myitem.price}</p>
    </div>
  );
}

export default ProductItem;
