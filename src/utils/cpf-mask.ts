export function maskCpf(plaintext: string): string {
    const digits = plaintext.replace(/\D/g, '')
    return `***.${digits.slice(3, 6)}.${digits.slice(6, 9)}-**`
}
