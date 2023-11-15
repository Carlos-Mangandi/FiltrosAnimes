export const paginate = (
  current_page: number,
  last_page: number,
  onSides = 3
) => {

  let pages = [];

  for (let i = 1; i <= last_page; i++) {

    let offset = i == 1 || last_page ? onSides + 1 : onSides;
    
    if (
      i == 1 ||
      (current_page - offset <= i && current_page + offset >= i) ||
      i == current_page ||
      i == last_page
    ) {
      pages.push(i);
    } else if (
      i == current_page - (offset + 1) ||
      i == current_page + (offset + 1)
    ) {
      pages.push("...");
    }
  }
  return pages;
};