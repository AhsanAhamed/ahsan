// Debounced Search Function
let debounceTimer;

function debouncedSearch() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(searchContent, 300);  // Wait 300ms after the last keystroke
}

// Clear search results and show all links
function clearSearch() {
  document.getElementById("searchInput").value = ""; // Clear the search box
  searchContent();  // Show all links again
}

function searchContent() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let allContents = document.getElementsByClassName("content");

  // Loop through each content section
  Array.from(allContents).forEach(content => {
    let allLinks = content.getElementsByTagName("a");

    // Loop through each link in the current content section
    Array.from(allLinks).forEach(link => {
      let text = link.textContent.toLowerCase();

      // Clear previous highlights
      link.innerHTML = link.innerHTML.replace(/<span class="highlight">/g, "").replace(/<\/span>/g, "");

      // If input is empty, show all links, else filter links based on search input
      if (input === "") {
        link.style.display = "block";
      } else {
        if (text.includes(input)) {
          link.style.display = "block"; // Show matching link
          // Highlight matching text
          link.innerHTML = link.innerHTML.replace(new RegExp(input, 'gi'), function(match) {
            return `<span class="highlight">${match}</span>`;
          });
        } else {
          link.style.display = "none"; // Hide non-matching link
        }
      }
    });
  });
}
