import { it, expect, describe } from 'vitest'
import { validateCPF } from '../utils/cpf'

describe('validate cpf format', () => {
    it('should not be possible to create a masked cpf with a size other than 14', () => {
        const bigSizeCPF = '111.444.777-055' // size 15
        const isValidBigSizeCPF = validateCPF(bigSizeCPF)

        const smallSizeCPF = '111.444.777-0' // size 13
        const isValidSmallSizeCPF = validateCPF(smallSizeCPF)

        expect(isValidBigSizeCPF).toEqual(false)
        expect(isValidSmallSizeCPF).toEqual(false)
    })

    it('should not be possible to create a numeric cpf with a size other than 11', () => {
        const bigSizeCPF = '111444777055' // size 12
        const isValidBigSizeCPF = validateCPF(bigSizeCPF)

        const smallSizeCPF = '1114447770' // size 10
        const isValidSmallSizeCPF = validateCPF(smallSizeCPF)

        expect(isValidBigSizeCPF).toEqual(false)
        expect(isValidSmallSizeCPF).toEqual(false)
    })

    it('should not be possible to create a masked cpf with incomplete mask', () => {
        const cpf = '111.444777-05'
        const isValidCPF = validateCPF(cpf)

        expect(isValidCPF).toEqual(false)
    })

    it('should not be possible to create a masked cpf with misplaced characters', () => {
        const cpf = '11.1444.7770-5'
        const isValidCPF = validateCPF(cpf)

        expect(isValidCPF).toEqual(false)
    })

    it('should not be possible to create a masked cpf with invalid characters', () => {
        const cpf = '1b1.444.7a7-05'
        const isValidCPF = validateCPF(cpf)

        expect(isValidCPF).toEqual(false)
    })

    it('should not be possible to create a numeric cpf with invalid characters', () => {
        const cpf = '1114c477705'
        const isValidCPF = validateCPF(cpf)

        expect(isValidCPF).toEqual(false)
    })
})

describe('validate cpf algorithm', () => {
    it('should not be possible to create a masked cpf that fails the algorithm', () => {
        const cpf = '111.444.777-05'
        const isValidCPF = validateCPF(cpf)

        expect(isValidCPF).toEqual(false)
    })

    it('should be possible to create a masked cpf if it succeeds in the algorithm', () => {
        const cpf = '111.444.777-35'
        const isValidCPF = validateCPF(cpf)

        expect(isValidCPF).toEqual(true)
    })

    it('should not be possible to create a numeric cpf that fails the algorithm', () => {
        const cpf = '11144477705'
        const isValidCPF = validateCPF(cpf)

        expect(isValidCPF).toEqual(false)
    })

    it('should be possible to create a numeric cpf if it succeeds in the algorithm', () => {
        const cpf = '11144477735'
        const isValidCPF = validateCPF(cpf)

        expect(isValidCPF).toEqual(true)
    })

    it('should be possible to create a masked cpf if it succeeds in the algorithm with number 0', () => {
        const cpf = '091.041.130-12'
        const isValidCPF = validateCPF(cpf)

        expect(isValidCPF).toEqual(true)
    })

    it('should be possible to create a numeric cpf if it succeeds in the algorithm with number 0', () => {
        const cpf = '355.049.880-20'
        const isValidCPF = validateCPF(cpf)

        expect(isValidCPF).toEqual(true)
    })
})
