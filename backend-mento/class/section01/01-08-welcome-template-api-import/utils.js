export function getToday() {
    const nweDate = new Date();
    const year = nweDate.getFullYear();
    const month = nweDate.getMonth() + 1;
    const date = nweDate.getDate();
    const createdAt = `${year}-${String(month).padStart(2, 0)}-${String(date).padStart(
        2,
        0
    )}`;
    return createdAt;
}
