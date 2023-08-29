import { useEffect } from "react";

import CryptForm from "./../components/forms/CryptForm";

export default function Crypt({ title }) {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <main className="flex justify-center items-center min-h-[calc(100vh_-_60px)]">
            <CryptForm />
        </main>
    )
}
