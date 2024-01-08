const UsePagination = (payload) => {
  function calculatePages(payload) {
    var pages = [];
    let startpage = payload.toPage === 1 || payload.toPage - 2 === 0 ? 1 : payload.toPage === payload.totalPages ? payload.toPage - 2 : payload.toPage - 1;
    let endPage = payload.toPage === 1 ? payload.toPage + 2 : payload.toPage + 1 <= payload.totalPages ? payload.toPage + 1 : payload.toPage;
    for (let i = startpage; i <= endPage; i++) {
      i <= payload.totalPages && pages.push(i);
    }
    return pages;
  }

  return [...calculatePages(payload)];
};

export default UsePagination;
