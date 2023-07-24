// React Hooks
import { useEffect } from "react";

// Crypt Form
import CryptForm from "./../components/forms/CryptForm";

// Crypt Component
export default function Crypt({ title }) {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return <CryptForm />;
}
