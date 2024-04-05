import { Link } from "react-router-dom";
import "../sass/nav.scss";
import Swal from "sweetalert2";
export default function AddAndLogOut() {
  function logOut() {
    Swal.fire({
      icon: "question",
      title: "Logging Out",
      text: "Are you sure you want to log out?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          timer: 1000,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            localStorage.setItem("user", false);
            window.location.reload();
          },
        });
      }
    });
  }
  return (
    <div className="d-flex addDelete justify-content-center mb-2">
      <Link className="btn bg-primary text-light text-center me-2" to="/add">
        Add
      </Link>
      <button
        className="btn btn-danger text-end text-center"
        onClick={() => logOut()}
      >
        logOut
      </button>
    </div>
  );
}
