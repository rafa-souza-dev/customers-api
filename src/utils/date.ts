export function validateBirthDate(date: string): boolean {
    const regexValidDate = /^\d{4}-\d{2}-\d{2}$/

    const isInvalidDate = !regexValidDate.test(date)

    if (isInvalidDate) return false

    return true
}
