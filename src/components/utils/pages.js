export const getPageCount = (totalCount, count = 10) => {
    return Math.ceil(totalCount / count);
}

export const getPageArray = (totalPages) => {
    return [...Array(totalPages)].map((p, i) => i + 1);
}
