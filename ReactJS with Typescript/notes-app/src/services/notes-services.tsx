export async function getNotes() {
    const response = await fetch('/notes');
    return await response.json();
}