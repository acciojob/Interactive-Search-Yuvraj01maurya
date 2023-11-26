//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  // Get elements
  const searchComponent = document.getElementById('searchComponent');
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');

  // Function to toggle active state and focus input
  function activateSearch() {
    searchComponent.classList.add('active');
    searchInput.focus();
  }

  // Event listener for the button click
  searchButton.addEventListener('click', activateSearch);
});
