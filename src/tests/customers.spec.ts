import request from 'supertest'
import { describe, it, beforeAll, afterAll, beforeEach } from 'vitest'
import { execSync } from 'node:child_process'
import { app } from '../app'

beforeAll(async () => {
    app.ready()
})

afterAll(async () => {
    app.close()
})

beforeEach(() => {
    execSync('npm run knex migrate:rollback --all')
    execSync('npm run knex migrate:latest')
})

describe('Creation of customers', () => {
    it('should be possible to create a client with masked cpf', async () => {
        await request(app.server)
            .post('/customers')
            .send({
                'name': 'Rafael Souza',
                'cpf': '111.444.777-35',
                'birth_date': '2002-06-22'
            })
            .expect(201)
    })

    it('should be possible to create a client with numeric cpf', async () => {
        await request(app.server)
            .post('/customers')
            .send({
                'name': 'Rafael Souza',
                'cpf': '11144477735',
                'birth_date': '2002-06-22'
            })
            .expect(201)
    })

    it('should not be possible to create a customer with the same cpf as another existing one', async () => {
        await request(app.server)
            .post('/customers')
            .send({
                'name': 'Rafael Souza',
                'cpf': '11144477735',
                'birth_date': '2002-06-22'
            })
            .expect(201)

        await request(app.server)
            .post('/customers')
            .send({
                'name': 'Fulano de Tal',
                'cpf': '11144477735',
                'birth_date': '1999-03-20'
            })
            .expect(400)

        await request(app.server)
            .post('/customers')
            .send({
                'name': 'Ciclano de Tal',
                'cpf': '111.444.777-35',
                'birth_date': '2001-01-18'
            })
            .expect(400)
    })

    it('should not be possible to create a customer with invalid cpf', async () => {
        await request(app.server)
            .post('/customers')
            .send({
                'name': 'Rafael Souza',
                'cpf': '111.444.777-32',
                'birth_date': '2002-06-22'
            })
            .expect(422)  

        await request(app.server)
            .post('/customers')
            .send({
                'name': 'Rafael Souza',
                'cpf': '111444b7735',
                'birth_date': '2002-06-22'
            })
            .expect(422)
    })

    it('should not be possible to create a customer without informing the mandatory fields', async () => {
        await request(app.server)
            .post('/customers')
            .send({
                'cpf': '111.444.777-35',
            })
            .expect(422)
    })

    it('should not be possible to create a customer using invalid date format', async () => {
        await request(app.server)
            .post('/customers')
            .send({
                'name': 'Rafael Souza',
                'cpf': '111.444.777-35',
                'birth_date': '22-06-2002'
            })
            .expect(422)
    })
})

describe('customer search by cpf', () => {
    it('should be possible to search for a customer by informing his cpf', async () => {
        const maskedCPF = '111.444.777-35'
        const numericCPF = '11144477735'

        await request(app.server)
            .post('/customers')
            .send({
                'name': 'Rafael Souza',
                'cpf': maskedCPF,
                'birth_date': '2002-06-22'
            })

        await request(app.server)
            .get(`/customers/${maskedCPF}`)
            .expect(200)

        await request(app.server)
            .get(`/customers/${numericCPF}`)
            .expect(200)
    })

    it('should not be possible to search for a user with a non-existent cpf', async () => {
        const maskedCPF = '111.444.777-35'

        await request(app.server)
            .post('/customers')
            .send({
                'name': 'Rafael Souza',
                'cpf': maskedCPF,
                'birth_date': '2002-06-22'
            })

        await request(app.server)
            .get('/customers/658.328.270-40')
            .expect(404)
    })
})
