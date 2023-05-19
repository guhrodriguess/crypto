// React Router
import { Link } from "react-router-dom";

// Icon
import { WarningCircle } from "phosphor-react";

// Image
import errorImage from "../../public/assets/images/error-image.png";

// Error page
const Error = () => {
  document.title = "Crypto — Erro";

  return (
    <section className="grid h-screen text-white place-items-center">
      <div className="flex flex-col items-center gap-0 xl:gap-24 xl:flex-row">
        <div className="flex flex-col items-center justify-center max-w-[240px] gap-5 text-center xl:max-w-sm">
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-5xl font-bold">Erro</h1>
            <WarningCircle weight="bold" className="text-red-500" size={42} />
          </div>
          <p className="font-medium text-gray-300 break-words text-1xl xl:text-2xl">
            A página que você está tentando acessar não existe.
          </p>
          <Link to="/">
            <button className="flex items-center gap-2 px-4 py-3 text-xs xl:text-base font-semibold border-[3px] border-primary rounded-xl bg-transparent text-primary hover:bg-primary hover:text-white transition-all duration-300">
              voltar ao início
            </button>
          </Link>
        </div>
        <div>
          <img src={errorImage} className="w-[600px] xl:w-[800px]" />
        </div>
      </div>
    </section>
  );
};

export default Error;
