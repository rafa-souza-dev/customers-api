import { randomUUID } from "node:crypto"

export class Customer {
    public readonly id: string
    private name: string
    private cpf: string
    private birth_date: Date

    constructor(
        name: string,
        cpf: string,
        birth_date: Date,
        id?: string
    ) {
        this.id = id ? id : randomUUID()
        this.name = name
        this.cpf = cpf
        this.birth_date = birth_date
    }

    public getName(): string {
        return this.name
    }

    public setName(name: string): void {
        this.name = name
    }

    public getCPF(): string {
        return this.cpf
    }

    public setCPF(cpf: string): void {
        this.cpf = cpf
    }

    public getBirthDate(): Date {
        return this.birth_date
    }

    public setBirthDate(birth_date: Date): void {
        this.birth_date = birth_date
    }
}
