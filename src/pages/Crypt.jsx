// React
import { useState, useEffect } from "react";

// Constants
import { encryptData } from "../constants/form";

// Radix UI
import * as Form from "@radix-ui/react-form";

// Phosphor Icons
import { ArrowRight, Check } from "phosphor-react";

// React Router
import { Link } from "react-router-dom";

// Crypt Component
const Crypt = ({ title }) => {
  const [word, setWord] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [cipherText, setCipherText] = useState("");
  const [content, setContent] = useState(false);

  useEffect(() => {
    document.title = title;
  }, [title]);

  const handleInputChange = (e) => {
    setWord(e.target.value);
  };

  const handleKeyChange = (e) => {
    setSecretKey(e.target.value);
  };

  const handleEncryptClick = (e) => {
    const cipherText = encryptData(word, secretKey);
    localStorage.setItem("cipherText", cipherText);
    setCipherText(cipherText);

    if (word === "" || secretKey === "") {
      setContent(false);
    } else {
      e.preventDefault();
      setContent(true);
    }
  };

  return (
    <Form.Root className="grid h-screen place-items-center">
      <div className="flex flex-col w-full max-w-xl gap-10 p-5">
        <Form.Field name="text">
          <div className="flex items-center justify-between">
            <Form.Label className="text-[15px] font-semibold py-2 text-white">
              Palavra
            </Form.Label>
            <Form.Message
              className="text-[13px] font-medium text-red-500 opacity-80"
              match="valueMissing"
            >
              Insira uma palavra
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="w-full h-16 p-3 text-white border-2 border-transparent rounded-md outline-none appearance-none w-7xl bg-tertiary focus:border-primary"
              type="text"
              value={word}
              onChange={handleInputChange}
              autoComplete="off"
              required
            />
          </Form.Control>
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
              value={secretKey}
              onChange={handleKeyChange}
              autoComplete="off"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button
            onClick={handleEncryptClick}
            className="table mx-auto py-4 px-5 font-bold text-sm border-[3px] border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
          >
            criptografar
          </button>
        </Form.Submit>
      </div>
      {content && (
        <div
          className={`fixed w-full h-screen px-4 bg-black/70 backdrop-blur-sm z-50 ${
            content ? "animate-fade-in" : ""
          }`}
        >
          <div className="grid h-screen place-items-center">
            <div className="w-full max-w-xl py-24 bg-tertiary h-96 rounded-2xl">
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="flex items-center justify-center gap-3">
                  <button className="flex items-center justify-center p-2 rounded-full cursor-default bg-primary">
                    <Check weight="bold" size={40} />
                  </button>
                  <h1 className="text-2xl font-bold text-white">Sucesso!</h1>
                </div>
                <div className="max-w-sm py-3">
                  <p className="flex flex-col gap-2 px-5 text-base font-medium text-center break-words">
                    <span className="text-gray-400">
                      Sua palavra criptografada é
                    </span>
                    <span className="text-white">{cipherText}</span>
                  </p>
                </div>
                <Link to="/decrypt">
                  <button className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-white border-[3px] border-transparent rounded-xl bg-primary hover:bg-transparent hover:border-primary hover:text-primary transition-all duration-300">
                    descriptografar
                    <ArrowRight weight="bold" size={20} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </Form.Root>
  );
};

export default Crypt;
