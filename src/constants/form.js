// CryptoJS
import CryptoJS from "crypto-js";

// Encrypt Data
export const encryptData = (data, secretKey) => {
  const cipherText = CryptoJS.AES.encrypt(data, secretKey).toString();
  const cipherTextReplace = cipherText.replace(/\//g, "-");
  return cipherTextReplace;
};

// Decrypt Data
export const decryptData = (cipherText, secretKey) => {
  const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
  const originalData = bytes.toString(CryptoJS.enc.Utf8);
  return originalData;
};