declare enum Padding {
    NULL = 0,
    PKCS7 = 1,
    SPACES = 2,
    NONE = 3
}
export declare const encodeHex: (s: string) => string;
export declare function decodeHex(h: string): string;
export declare const encrypt: (key: string, message: string, iv?: string, padding?: Padding) => string;
export declare const decrypt: (key: string, message: string, iv?: string, padding?: Padding) => string;
export {};
