import des from './des.js'

enum Padding {
  NULL = 0,
  PKCS7 = 1,
  SPACES = 2,
  NONE = 3
}

enum Mode {
  ECB = 0,
  CBC = 1
}

export const encodeHex = (s: string) => {
  let r = '0x';
  const hexes = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f');
  for (let i = 0; i < s.length; i++) {r += hexes [s.charCodeAt(i) >> 4] + hexes [s.charCodeAt(i) & 0xf];}
  return r;
}

export function decodeHex(h: string) {
  let r = '';
  for (let i = (h.substring(0, 2) === '0x') ? 2 : 0; i < h.length; i += 2) {
    r += String.fromCharCode(parseInt(h.substring(i, i + 2), 16));
  }
  return r;
}

export const encrypt = (key: string, message: string, iv?: string, padding: Padding = Padding.NONE): string => {
  const mode = iv ? Mode.CBC : Mode.ECB
  return encodeHex(des(key, message, 1, mode, iv, padding))
}

export const decrypt = (key: string, message: string, iv?: string, padding: Padding = Padding.NONE) => {
  const mode = iv ? Mode.CBC : Mode.ECB
  return des(key, decodeHex(message), 0, mode, iv, padding).replace(/\0/g, '')
}