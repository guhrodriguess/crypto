const Credits = () => {
  return (
    <div className="absolute flex items-center justify-center w-full text-gray-300 bottom-4">
      <p className="font-medium">
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
    </div>
  );
};

export default Credits;
