// React Toastify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Icon
import { CheckCircle } from "phosphor-react";

// Toast Container
const Toast = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      newestOnTop={false}
      hideProgressBar={true}
      toastStyle={{
        backgroundColor: "#222",
        color: "#fff",
        borderRadius: "4px",
        fontSize: "14px",
        border: "1px solid #333",
      }}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  );
};

// Download Alert
export const copyBioAlert = () => {
  toast.success("Palavra copiada :D", {
    icon: <CheckCircle className="text-secondary" weight="bold" size={24} />,
  });
};

export default Toast;
