import { products } from "./data";

function Products() {
    return (
      <div className="Products">
        <h1>Products</h1>
        <p>
          This is the products page.
        </p>
        {
            products.map(function(item,index){
                return <p>{item.name}</p>;
            })
        }
      </div>
    );
}
  
export default Products;