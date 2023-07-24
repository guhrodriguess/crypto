// React Router
import { Link } from "react-router-dom";

// Icons
import { Check, MoveLeft } from "lucide-react";

// DecryptModal Component
export default function DecryptModal({
    decryptWord,
    setSecretKey,
    setKey,
    setWord,
    setModal,
}) {
    const clearContent = () => {
        setSecretKey("");
        setKey("");
        setWord("");
        setModal(false);
    };

    return (
        <div className="fixed z-50 w-full h-screen px-4 bg-black/70 animate-fade-in">
            <div className="grid h-screen place-items-center">
                <div className="w-full max-w-xl py-24 bg-tertiary h-96 rounded-2xl">
                    <div className="flex flex-col items-center justify-center gap-3">
                        <div className="flex items-center justify-center gap-3">
                            <button className="flex items-center justify-center p-2 rounded-full cursor-default bg-primary">
                                <Check size={40} />
                            </button>
                            <h1 className="text-2xl font-bold text-white">
                                Sucesso!
                            </h1>
                        </div>
                        <div className="max-w-sm py-3">
                            <p className="flex flex-col gap-2 py-3 text-base font-medium leading-none text-center break-words">
                                <span className="text-gray-400">
                                    Sua palavra descriptografada é
                                </span>
                                <span className="text-lg text-white">
                                    {decryptWord}
                                </span>
                            </p>
                        </div>
                        <Link to="/">
                            <button
                                onClick={clearContent}
                                className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-white border-[3px] border-transparent rounded-xl bg-primary hover:bg-transparent hover:border-primary hover:text-primary transition-all duration-300"
                            >
                                <MoveLeft size={20} />
                                criptografar novamente
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
