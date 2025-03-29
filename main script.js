// Search Functionality
document.getElementById('searchButton').addEventListener('click', function() {
    searchMovies();
});

document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchMovies();
    }
});

function searchMovies() {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    
    if (searchTerm === '') {
        alert('Please enter a movie name to search');
        return;
    }
    
    // In a real implementation, this would query a database or API
    // For now, we'll simulate searching by redirecting to a search page
    window.location.href = `search-results.html?query=${encodeURIComponent(searchTerm)}`;
}

// Pagination Functionality
document.querySelectorAll('.pagination-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all pagination links
        document.querySelectorAll('.pagination-link').forEach(plink => {
            plink.classList.remove('active');
        });
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // In a real implementation, this would load the next page of movies
        // For now, we'll just scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});