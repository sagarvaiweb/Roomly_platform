import Swal from 'sweetalert2';

export const confirmAction = async ({
  title = "Are you sure?",
  text = "This action cannot be undone!",
  icon = "warning",
  confirmButtonText = "Yes, delete it!",
  confirmButtonColor = "#d33"
}) => {
  const result = await Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonColor,
    cancelButtonColor: "#64748b",
    confirmButtonText,
    background: "#f8fafc",
    borderRadius: "20px",
  });

  return result.isConfirmed;
};