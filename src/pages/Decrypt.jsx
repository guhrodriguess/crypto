// React
import { useEffect } from "react";

// Components
import Toast from "../components/ui/Toast";

// Components
import DecryptForm from "../components/forms/DecryptForm";

// Decrypt Component
export default function Decrypt({ title }) {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <>
            <Toast />
            <DecryptForm />
        </>
    );
}
