function ProductItem() {
  return (
    <div className="flex1">
      <img
        className="img1"
        src={
          "https://images.squarespace-cdn.com/content/v1/577bdf05893fc03a12a439e3/1574114476947-6MQK2RXISXPA4HESNKEF/B897056A-2213-4FEA-AF4F-93C596F4E334.jpg?format=2500w"
        }
        alt="item"
      ></img>
      <h3>My Item</h3>
      <p>200 KD</p>
    </div>
  );
}

export default ProductItem;
