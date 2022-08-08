export function truncate (str, n) {
    return String(str).length > n ? str.substring(0, n-1) + '...' : str
}