document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-input');
    let tableBody = document.getElementById('listItems');
    searchInput.addEventListener("input", e => {
        const value = e.target.value.toLowerCase();
    for(const row of tableBody.children) {
      let isVisible = false;
      row.style.display = (value === 'true') ? 'none' : '';
      for (const cell of row.children) {
        if (cell.innerText.toLowerCase().includes(value)) {
          isVisible = true;
          console.log(tableBody)
          break;
        }
      }
       row.style.display = isVisible ? '' : 'none';
    }
  })
    });

