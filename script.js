// AECK Landing Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Hiển thị main menu
    showMainMenu();
});

// Đơn giản chỉ hiển thị main menu - website làm landing page
function showMainMenu() {
    const mainMenu = document.getElementById('mainMenu');
    if (mainMenu) {
        mainMenu.style.display = 'block';
    }
}