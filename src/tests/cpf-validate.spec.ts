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

    it('it should not be possible to create a masked cpf with misplaced characters', () => {
        const cpf = '11.1444.7770-5'
        const isValidCPF = validateCPF(cpf)

        expect(isValidCPF).toEqual(false)
    })
})
