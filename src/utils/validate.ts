export function validateIntNumberQueryParam(text: string): boolean {
    return (
        !!Number(text) && 
        Number(text) > 0 &&
        Number(text) % 1 === 0
    )
}
