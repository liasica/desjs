
// @param key: The des function accepts an 8 character string as the key (this is 64 bits, but the algorithm only uses 56) for normal DES or a 24 character string for triple DES
// @param message: The message to be encrypted or decrypted
// @param encrypt: 0 to decrypt, 1 to encrypt
// @param mode: 0 for ECB, 1 for CBC
// @param iv: The 8 character string to use as the initialization vector if you're using CBC mode
// @param padding: And the type of padding (0 for null or zero bytes, 1 for PKCS7, 2 for spaces and 3 for no padding at all). It returns the cipher text as a string
declare function des(key: string, message: string, encrypt: 0 | 1, mode?: 0 | 1, iv?: string, padding?: 0 | 1 | 2 | 3): string;

export default des;