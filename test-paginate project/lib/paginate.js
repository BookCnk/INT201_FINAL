export const getItemsOfCurrentPage = (allItems, currentPage, rowsPerPage) => {
    if (allItems === null || allItems === undefined) return undefined 
    if (allItems.length === 0) return []
    if (rowsPerPage <= 0) return allItems
    if (currentPage <= 0) return allItems
    let ItemsOfCurrentPage = allItems.slice(
        rowsPerPage* (currentPage - 1),
        rowsPerPage * (currentPage - 1) + rowsPerPage
    ) 

    return ItemsOfCurrentPage.length > 0 ? ItemsOfCurrentPage : []  
}

export const getTotalPages = (allItems, rowsPerPage) => {
    if (allItems === null || allItems === undefined) return undefined
    if (rowsPerPage === 0 || rowsPerPage === undefined || rowsPerPage === null)
      return 1
    return Math.ceil(allItems.length / rowsPerPage)
}

// module.exports = { getItemsOfCurrentPage, getTotalPages }   