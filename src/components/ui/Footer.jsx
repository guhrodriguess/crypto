export default function Footer() {
  return (
    <footer className="relative px-5">
      <p className="flex flex-wrap items-center justify-center gap-1.5 py-4 font-medium text-center text-gray-400">
        Feito por{" "}
        <a
          href="https://github.com/guhrodriguess"
          target="_blank"
          rel="noreferrer"
          className="flex gap-2 text-gray-300 duration-300 hover:-translate-y-1"
        >
          <img
            src="https://github.com/guhrodriguess.png"
            width={25}
            className="rounded-full"
          />
          Gustavo Rodrigues
        </a>
      </p>
    </footer>
  );
}
