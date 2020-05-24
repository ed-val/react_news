class Helpers {
  dateToday() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    return yyyy + '-' + mm + '-' + dd;
  }

  getNumberOfPages(results) {
    let pages = 0;
    pages = Math.floor(results / 20);
    if (results % 20 !== 0) {
      pages = pages + 1;
    }
    // create an array of all pages starting from 1
    return Array.from(Array(pages)).map((_,i) => ++i);
  }

  getPaginationValues(activePage, pages) {
    let pagesShown = [];
  if (activePage > 3) {
    pagesShown = pages.slice(activePage - 3, activePage + 1);
  } else if (activePage <= 3) {
    pagesShown = pages.slice(0, 4)
  }
  return pagesShown
  }
}

export default new Helpers();