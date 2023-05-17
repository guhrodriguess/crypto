// React
import { useState } from "react";

// React Router
import { Link, useParams } from "react-router-dom";

// Constants
import { decryptData } from "../constants/form";

// Radix UI
import * as Form from "@radix-ui/react-form";

// Phosphor Icons
import { ArrowLeft, Check } from "phosphor-react";

// Decrypt Component
const Decrypt = () => {
  const { cipherText } = useParams();
  const [word, setWord] = useState("");
  const [element, setElement] = useState(false);
  const [secretKey, setSecretKey] = useState("");

  const handleInputChange = (e) => {
    setWord(e.target.value);
  };

  const handleKeyChange = (e) => {
    setSecretKey(e.target.value);
  };

  const handleDecryptClick = (e) => {
    const originalData = decryptData(cipherText, secretKey);
    setWord(originalData);
    setElement(true);
    e.preventDefault();
  };

  return (
    <>
      <Form.Root className="grid h-screen place-items-center">
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
                value={word}
                onChange={handleInputChange}
                required
                autoComplete="off"
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
              onClick={handleDecryptClick}
              className="table mx-auto py-4 px-5 font-bold text-sm border-[3px] border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
            >
              descriptografar
            </button>
          </Form.Submit>
        </div>
        {element && (
          <div className="fixed w-full h-screen bg-black/70 backdrop-blur-sm">
            <div className="grid h-screen place-items-center">
              <div className="w-full max-w-xl py-24 bg-tertiary h-96 rounded-2xl">
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="flex items-center justify-center gap-3">
                    <button className="flex items-center justify-center p-2 rounded-full cursor-default bg-primary">
                      <Check weight="bold" size={40} />
                    </button>
                    <h1 className="text-2xl font-bold text-white">Sucesso!</h1>
                  </div>
                  <p className="flex flex-col gap-2 py-3 text-sm font-medium text-center">
                    <span className="text-white">
                      Sua palavra decriptografada é
                    </span>
                    <span className="text-gray-400">{word}</span>
                  </p>
                  <Link to="/">
                    <button className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-white border-[3px] border-transparent rounded-xl bg-primary hover:bg-transparent hover:border-primary hover:text-primary transition-all duration-300">
                      <ArrowLeft weight="bold" size={20} />
                      criptografar novamente
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </Form.Root>
    </>
  );
};

export default Decrypt;
