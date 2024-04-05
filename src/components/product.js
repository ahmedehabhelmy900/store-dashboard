import { deleteProduct } from "./firebase";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Product(props) {
  const prod = props.prod;
  let description = prod.description;
  let name = prod.name;
  let boolName = false;
  let boolDesc = false;
  if (description.length > 30) {
    boolDesc = true;
    description = description.slice(0, 30);
    description += "...";
  }
  if (name.length > 24) {
    boolName = true;
    name = name.slice(0, 24);
    name += "...";
  }
  function handleDelete() {
    // Swal.fire({
    //   icon: "warning",
    //   title: "Are you sure?",
    //   text: "You won't be able to revert this!",
    //   showCancelButton: true,
    //   confirmButtonText: "Yes, delete it!",
    //   cancelButtonText: "No, cancel!",
    // })
    //   .then((res) => (res.value ? deleteProduct(prod.id) : ""))
    //   .then((res) => (res.value ? window.location.reload() : ""));
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${prod.name} have been deleted.`,
          showConfirmButton: false,
          timer: 1000,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            deleteProduct(prod.id);
            window.location.reload();
          },
        });
      }
    });
  }
  return (
    <div className="my-1 p-2 d-grid">
      <h5 className={boolName ? "over px-2" : "px-2"} full={prod.name}>
        {name}
      </h5>
      <p className={boolDesc ? "over px-2" : "px-2"} full={prod.description}>
        {description}
      </p>
      <span className="px-2">{prod.price}$</span>
      <div className="actions px-2">
        <Link
          to="/edit"
          state={{ data: prod }}
          className="btn btn-primary text-light ms-2"
        >
          Edit
        </Link>
        <button
          onClick={() => handleDelete()}
          className="btn btn-danger text-light ms-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default Product;
