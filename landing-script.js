document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Forms functionality
    const requestForm = document.getElementById('request-form');
    const reportForm = document.getElementById('report-form');
    
    requestForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you! Your movie request has been submitted.');
        requestForm.reset();
    });
    
    reportForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for reporting the broken link. We will fix it as soon as possible.');
        reportForm.reset();
    });
});