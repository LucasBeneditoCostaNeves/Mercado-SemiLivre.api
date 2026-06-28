import { createCipheriv, createDecipheriv } from 'crypto'

const ALGORITHM = 'aes-256-cbc'

function getKeyAndIv(): { key: Buffer; iv: Buffer } {
    const rawKey = process.env.CPF_ENCRYPTION_KEY
    if (!rawKey) throw new Error('CPF_ENCRYPTION_KEY env var is not set')
    const key = Buffer.from(rawKey, 'hex')
    // Fixed IV derived from key — deterministic encryption for uniqueness checks
    const iv = key.subarray(0, 16)
    return { key, iv }
}

export function encryptCpf(cpf: string): string {
    const { key, iv } = getKeyAndIv()
    const cipher = createCipheriv(ALGORITHM, key, iv)
    return cipher.update(cpf, 'utf8', 'hex') + cipher.final('hex')
}

export function decryptCpf(ciphertext: string): string {
    const { key, iv } = getKeyAndIv()
    const decipher = createDecipheriv(ALGORITHM, key, iv)
    return decipher.update(ciphertext, 'hex', 'utf8') + decipher.final('utf8')
}
