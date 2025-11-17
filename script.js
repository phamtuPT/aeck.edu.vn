// AECK Landing Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Hiển thị main menu
    showMainMenu();
});

// Hiển thị main menu
function showMainMenu() {
    const mainMenu = document.getElementById('mainMenu');
    const traCuuSubmenu = document.getElementById('traCuuSubmenu');
    
    if (mainMenu) {
        mainMenu.style.display = 'block';
    }
    if (traCuuSubmenu) {
        traCuuSubmenu.style.display = 'none';
    }
}

// Hiển thị submenu Tra Cứu
function showTraCuuMenu() {
    const mainMenu = document.getElementById('mainMenu');
    const traCuuSubmenu = document.getElementById('traCuuSubmenu');
    
    if (mainMenu) {
        mainMenu.style.display = 'none';
    }
    if (traCuuSubmenu) {
        traCuuSubmenu.style.display = 'block';
    }
}