import Swal from "sweetalert2";

export const draggableModal = (title, icon = "success", draggable = true) => {
  Swal.fire({
    title,
    icon,
    draggable,
  });
};
