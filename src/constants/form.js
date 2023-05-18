// CryptoJS
import CryptoJS from "crypto-js";

// Encrypt Data
export const encryptData = (word, secretKey) => {
  const cipherText = CryptoJS.AES.encrypt(word, secretKey).toString();
  return cipherText;
};

// Decrypt Data
export const decryptData = (cipherTextReplace, secretKey) => {
  const bytes = CryptoJS.AES.decrypt(cipherTextReplace, secretKey);
  const originalData = bytes.toString(CryptoJS.enc.Utf8);
  return originalData;
};
