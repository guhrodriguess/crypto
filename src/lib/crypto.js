import CryptoJS from "crypto-js";

export const encryptData = (word, secretKey) => {
    const cipherText = CryptoJS.AES.encrypt(word, secretKey).toString();
    return cipherText;
};

export const decryptData = (cipherText, secretKey) => {
    const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
    const originalData = bytes.toString(CryptoJS.enc.Utf8);
    return originalData;
};
