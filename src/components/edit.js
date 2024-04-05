import { useLocation } from "react-router-dom";
import "../sass/add&edit.scss";
import { useRef } from "react";
import { setProduct } from "./firebase";
import { Link } from "react-router-dom";
export default function Edit(props) {
  const location = useLocation();
  const { data } = location.state;
  const ubdatedName = useRef();
  const ubdatedDesc = useRef();
  const ubdatedPrice = useRef();
  return (
    <div className="edit position-fixed p-5">
      <form
        method="post"
        className="d-flex flex-column align-items-center justify-content-between"
        onSubmit={(e) => {
          e.preventDefault();
          setProduct(
            data.id,
            ubdatedName.current.value,
            ubdatedDesc.current.value,
            ubdatedPrice.current.value
          ).then((r) => (window.location.pathname = "/"));
        }}
      >
        <input
          type="text"
          required
          placeholder="name"
          defaultValue={data.name}
          ref={ubdatedName}
          className="px-3 m-4"
        />
        <input
          type="text"
          required
          placeholder="description"
          defaultValue={data.description}
          ref={ubdatedDesc}
          className="px-3 m-4"
        />
        <input
          type="number"
          required
          placeholder="price"
          defaultValue={data.price}
          ref={ubdatedPrice}
          className="px-3 m-4"
        />
        <div className="d-flex justify-content-between align-items-center w-50 m-4">
          <Link className="btn btn-danger d-flex align-items-center" to="/">
            Cancel
          </Link>
          <input
            type="submit"
            placeholder="save"
            name="save"
            value="Save"
            className="btn btn-primary text-light m-0"
          />
        </div>
      </form>
    </div>
  );
}
