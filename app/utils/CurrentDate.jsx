export const CurrentDate = () => {
    const date = new Date().toLocaleDateString
    ("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return date;
}