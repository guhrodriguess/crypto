// React Hooks
import { useContext } from "react";

// Context
import AppContext from "./../../contexts/AppContext";

// Radix UI
import * as Form from "@radix-ui/react-form";

// Components
import { copyBioAlert } from "../ui/Toast";

// Lib
import { decryptData } from "../../lib/crypto";

// Modal
import DecryptModal from "../modals/DecryptModal";

// DecryptForm Component
export default function DecryptForm() {
    const {
        key,
        setKey,
        setWord,
        secretKey,
        setSecretKey,
        decryptWord,
        setDecryptWord,
        modal,
        setModal,
    } = useContext(AppContext);

    const copyBio = (e) => {
        navigator.clipboard.writeText(secretKey);
        e.preventDefault();
        copyBioAlert();
    };

    const handleDecryptClick = (e) => {
        const originalData = decryptData(secretKey, key);
        setDecryptWord(originalData);

        if (decryptWord === "" && key === "") {
            setModal(false);
        } else {
            e.preventDefault();
            setModal(true);
        }
    };

    return (
        <Form.Root
            onSubmit={handleDecryptClick}
            className="grid h-screen place-items-center"
        >
            <div className="flex flex-col w-full max-w-xl gap-10 p-5">
                <Form.Field name="text">
                    <div className="flex items-center justify-between">
                        <Form.Label className="text-[15px] font-semibold py-2 text-white">
                            Palavra criptografada
                        </Form.Label>
                        <Form.Message
                            className="text-[13px] font-medium text-red-500 opacity-80"
                            match="valueMissing"
                        >
                            Insira a palavra criptografada
                        </Form.Message>
                    </div>
                    <Form.Control asChild>
                        <input
                            className="w-full h-16 p-3 text-white border-2 border-transparent rounded-md outline-none appearance-none w-7xl bg-tertiary focus:border-primary"
                            type="text"
                            onChange={(e) => setSecretKey(e.target.value)}
                            required
                            autoComplete="off"
                        />
                    </Form.Control>
                    <p className="pt-2 text-sm font-medium text-gray-400">
                        Não se recorda? Copie a palavra{" "}
                        <button
                            className="transition-colors text-secondary hover:text-primary"
                            onClick={copyBio}
                        >
                            aqui
                        </button>
                    </p>
                </Form.Field>
                <Form.Field name="question">
                    <div className="flex items-center justify-between">
                        <Form.Label className="text-[15px] font-semibold py-2 text-white">
                            Chave
                        </Form.Label>
                        <Form.Message
                            className="text-[13px] font-medium text-red-500 opacity-80"
                            match="valueMissing"
                        >
                            Insira uma chave
                        </Form.Message>
                    </div>
                    <Form.Control asChild>
                        <input
                            className="w-full h-16 p-3 text-white border-2 border-transparent rounded-md outline-none appearance-none w-7xl bg-tertiary focus:border-primary"
                            type="text"
                            value={key}
                            onChange={(e) => setKey(e.target.value)}
                            autoComplete="off"
                            required
                        />
                    </Form.Control>
                </Form.Field>
                <Form.Submit asChild>
                    <button
                        type="submit"
                        className="table mx-auto py-4 px-5 font-bold text-sm border-[3px] border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
                    >
                        descriptografar
                    </button>
                </Form.Submit>
            </div>
            {modal && (
                <DecryptModal
                    decryptWord={decryptWord}
                    setSecretKey={setSecretKey}
                    setKey={setKey}
                    setWord={setWord}
                    setModal={setModal}
                />
            )}
        </Form.Root>
    );
}
