const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

function search() {
  const query = searchInput.value;
  searchResults.textContent = `Searching for "${query}"...`;
}
searchButton.addEventListener('click', search);
searchInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    search();
  }
});
