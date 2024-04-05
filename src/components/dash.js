import Product from "./product";
import { useState } from "react";
import "../sass/dash.scss";

import AddAndLogOut from "./addAndLogOut";
import { getProducts } from "./firebase";

export default function Dash() {
  const [products, setProducts] = useState([]);
  getProducts.then((res) => setProducts(res));
  return (
    <>
      <AddAndLogOut />
      <div className="dash pb-5">
        <div className="container">
          <div className="products">
            <div className="fw-bold titles fs-4 d-grid">
              <p className="px-2">Name</p>
              <p className="px-2">Description</p>
              <p className="px-2">Price</p>
              <p className="px-2">Actions</p>
            </div>
            {products.map((e) => {
              return <Product prod={e} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
