import '../styles/styles.css';
export function updateHamburgerColor(isDarkMode, isMenuOpen) {
    const hamb = document.querySelector('#hamb');
    const iconText = isMenuOpen ? "close" : "menu";
    const iconColor = isMenuOpen ? 'black' : (isDarkMode ? 'white' : 'black');
    hamb.innerHTML = iconText;
    hamb.style.color = iconColor;
}

export function calculateVwWidth(text) {
    const fontSize = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
    const textLength = text.length;
    const vwWidth = (textLength * fontSize) / window.innerWidth * 140;
    return vwWidth;
}

document.addEventListener('DOMContentLoaded', function() {
    const iconContainers = document.querySelectorAll('.iconContainer');
    const menu = document.querySelector('.menu');
    const body = document.body;

    const hamb = document.getElementById("hamb");

    if (hamb) {
        hamb.addEventListener('click', function() {
            try {
                if (!menu || !body) return;

                const isMenuOpen = menu.classList.toggle('open');
                const darkMode = body.classList.contains("dark-mode");
                updateHamburgerColor(darkMode, isMenuOpen);
                if (isMenuOpen) {
                    menu.style.zIndex = "1";
                    menu.style.height = "100%";
                } else {
                    menu.style.zIndex = "-1";
                }
            } catch (error) {
                console.error("Error occurred:", error);
            }
        });
    } else {
        console.error("Element with ID 'hamb' not found.");
    }

    iconContainers.forEach(container => {
        const iconText = container.querySelector('.iconText');
        container.addEventListener('mouseenter', () => {
            const vwWidth = calculateVwWidth(iconText.textContent);
            iconText.style.width = `${vwWidth}vw`;
            iconText.style.opacity = '1';
        });
        container.addEventListener('mouseleave', () => {
            iconText.style.width = '0';
            iconText.style.opacity = '0';
        });
    });
});