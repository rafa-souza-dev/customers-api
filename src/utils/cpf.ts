function validateCPFFormat(cpf: string): boolean {
    const cpfHasInvalidLength = cpf.length !== 14 && cpf.length !== 11

    if (cpfHasInvalidLength) return false;

    if (cpf.length === 14) {
        const cpfChars = cpf[3] + cpf[7] + cpf[11]
        const isInvalidCPFChars = cpfChars !== '..-'

        if (isInvalidCPFChars) return false

        const cpfNumbers = cpf.slice(0, 3) + cpf.slice(4, 7) + 
            cpf.slice(8, 11) + cpf.slice(12)

        const cpfNumbersArray = cpfNumbers.split('')
        const cpfHasCharInWrongPlace = cpfNumbersArray.some(number => {
            return !Number(number) && number !== '0'
        })

        if (cpfHasCharInWrongPlace) return false
    }

    if (cpf.length === 11) {
        const cpfNumbersArray = cpf.split('')

        const cpfHasCharInWrongPlace = cpfNumbersArray.some(number => {
            return !Number(number) && number !== '0'
        })

        if (cpfHasCharInWrongPlace) return false
    }

    return true
}

function convertCPFToArray(cpf: string): number[] {
    if (cpf.length === 14) {
        const cpfNumbers = cpf.slice(0, 3) + cpf.slice(4, 7) + 
            cpf.slice(8, 11) + cpf.slice(12)

        const cpfNumbersArray = cpfNumbers.split('')
        
        return cpfNumbersArray.map(number => Number(number))
    }

    const cpfNumbers = cpf.split('')

    return cpfNumbers.map(number => Number(number))
}

function verifyAlgorithmCpf(cpfNumbers: number[]): boolean {
    let multiplier = 10
    const firstVerifyingDigit = cpfNumbers[9]
    const secondVerifyingDigit = cpfNumbers[10]
    const firstNineNumbers = cpfNumbers.slice(0, 9)
    let cpfNumberAux: number[] = []

    firstNineNumbers.forEach(number => {
        cpfNumberAux.push(number * multiplier)
        multiplier--
    })

    const firstSome = cpfNumberAux.reduce((acc, value) => {
        return acc + value
    }, 0)

    const firstSomeRest = firstSome % 11
    const firstDigit = firstSomeRest < 2 ? 0 : 11 - firstSomeRest

    multiplier = 11
    cpfNumberAux = []
    const firstTenNumbers = [...firstNineNumbers, firstDigit]

    firstTenNumbers.forEach(number => {
        cpfNumberAux.push(number * multiplier)
        multiplier--
    })

    const secondSome = cpfNumberAux.reduce((acc, value) => {
        return acc + value
    }, 0)

    const secondSomeRest = secondSome % 11
    const secondDigit = secondSomeRest < 2 ? 0 : 11 - secondSomeRest

    const isValidCPF = firstDigit === firstVerifyingDigit &&
        secondDigit === secondVerifyingDigit

    return isValidCPF
}

export function validateCPF(cpf: string): boolean {
    let cpfArray: number[] = []
    const isValidCPFFormat = validateCPFFormat(cpf)

    if (isValidCPFFormat) {
        cpfArray = convertCPFToArray(cpf)
    }

    const isValidCPF = verifyAlgorithmCpf(cpfArray)

    return isValidCPF
}
