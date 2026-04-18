export class NoFieldsToUpdateError extends Error {
    constructor() {
        super("Nenhum campo fornecido para atualização")
        this.name = "NoFieldsToUpdateError"
    }
}