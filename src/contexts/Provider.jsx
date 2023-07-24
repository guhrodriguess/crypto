// React Hooks
import { useState, useEffect } from "react";

// Context
import AppContext from "./AppContext";

// Provider
export default function Provider({ children }) {
    const [word, setWord] = useState("");
    const [key, setKey] = useState("");
    const [secretKey, setSecretKey] = useState(() => {
        localStorage.getItem("secretKey");
    });
    const [decryptWord, setDecryptWord] = useState("");
    const [modal, setModal] = useState(false);

    useEffect(() => {
        localStorage.setItem("secretKey", JSON.stringify(secretKey));
    }, [secretKey]);

    const value = {
        word,
        setWord,
        key,
        setKey,
        secretKey,
        setSecretKey,
        modal,
        setModal,
        decryptWord,
        setDecryptWord,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
