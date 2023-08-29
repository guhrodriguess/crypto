import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CheckCircle2 } from "lucide-react";

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

export const copyBioAlert = () => {
    toast.success("Palavra copiada :D", {
        icon: <CheckCircle2 className="text-secondary" size={24} />,
    });
};

export default Toast;
