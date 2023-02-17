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
})
