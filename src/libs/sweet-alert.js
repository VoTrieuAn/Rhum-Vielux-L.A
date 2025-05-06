import Swal from "sweetalert2";

export const draggableModal = (title, icon = "success", draggable = true) => {
  Swal.fire({
    title,
    icon,
    draggable,
  });
};

export const dialogWithButton = (title, callback) => {
  Swal.fire({
    title,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Lưu lại",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      callback();
    }
  });
};
