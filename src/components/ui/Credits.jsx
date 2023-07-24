// Credits Component
export default function Credits() {
    return (
        <footer className="absolute flex items-center justify-center w-full bottom-4">
            <p className="font-medium text-center text-gray-300">
                Feito com 💚 por{" "}
                <a
                    href="https://github.com/guhrodriguess"
                    target="_blank"
                    rel="noreferrer"
                    className="underline transition-colors hover:text-white"
                >
                    Gustavo Rodrigues
                </a>
            </p>
        </footer>
    );
}
