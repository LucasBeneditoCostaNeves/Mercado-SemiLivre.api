export class EmailAlreadyInUseError extends Error {
    constructor() {
        super("Esse email já existe no sistema")
        this.name = "EmailAlreadyInUseError"
    }
}