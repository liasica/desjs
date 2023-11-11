import { decrypt, encrypt } from '../index';

const key = '123456781234567812345678'
const decrypted = 'test'
const encrypted = '0xf4377f0c3cbf0554'

test('encrypt', () => {
  expect(encrypt(key, decrypted)).toBe(encrypted)
});

test('decrypt', () => {
  expect(decrypt(key, encrypted)).toBe(decrypted)
});
