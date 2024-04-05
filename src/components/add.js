import { useRef } from "react";
import "../sass/add&edit.scss";
import { Link } from "react-router-dom";
import { setProduct } from "./firebase";
export function Add(props) {
  const component = useRef();
  const id = useRef();
  const name = useRef();
  const desc = useRef();
  const price = useRef();
  function handleForm(e) {
    e.preventDefault();
    setProduct(
      id.current.value,
      name.current.value,
      desc.current.value,
      price.current.value
    ).then((r) => (window.location.pathname = "/"));
  }
  return (
    <div ref={component} className="add position-fixed p-5">
      <form
        method="post"
        className="d-flex flex-column align-items-center justify-content-between"
        onSubmit={(e) => handleForm(e)}
      >
        <input
          type="text"
          ref={id}
          placeholder="id"
          required
          className="px-3 m-3"
        />
        <input
          type="text"
          ref={name}
          placeholder="name"
          required
          className="px-3 m-3"
        />
        <input
          type="text"
          ref={desc}
          placeholder="description"
          required
          className="px-3 m-3"
        />
        <input
          type="number"
          ref={price}
          placeholder="price"
          required
          className="px-3 m-3"
        />
        <div className="d-flex justify-content-between align-items-center m-3">
          <Link className="btn btn-danger d-flex align-items-center" to="/">
            Cancel
          </Link>
          <input
            type="submit"
            value="Save"
            className="btn btn-primary text-light m-0"
          />
        </div>
      </form>
    </div>
  );
}
