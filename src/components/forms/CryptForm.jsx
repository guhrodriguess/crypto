import { useContext } from "react";

import { encryptData } from "../../lib/crypto";

import AppContext from "./../../contexts/AppContext";

import * as Form from "@radix-ui/react-form";

import CryptModal from "../modals/CryptModal";

export default function CryptForm() {
  const {
    word,
    setWord,
    key,
    setKey,
    secretKey,
    setSecretKey,
    modal,
    setModal,
  } = useContext(AppContext);

  const handleEncryptSubmit = (e) => {
    const cipherText = encryptData(word, key);
    setSecretKey(cipherText);

    if (word === "" && key === "") {
      setModal(false);
    } else {
      e.preventDefault();
      setModal(true);
    }
  };

  return (
    <Form.Root
      onSubmit={handleEncryptSubmit}
      className="grid w-full h-full place-items-center"
    >
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
              onChange={(e) => setWord(e.target.value)}
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
            criptografar
          </button>
        </Form.Submit>
      </div>
      {modal && <CryptModal secretKey={secretKey} setModal={setModal} />}
    </Form.Root>
  );
}
