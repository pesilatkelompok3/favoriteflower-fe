import Swal, { SweetAlertIcon } from "sweetalert2";

type AlertProps = {
  title: string;
  text: string;
  icon: SweetAlertIcon;
};
const Alert = ({ title, text, icon }: AlertProps) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
  });
};

export default Alert;
