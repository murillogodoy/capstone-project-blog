document.addEventListener('DOMContentLoaded', () => {
    const dropdownButtons = document.querySelectorAll('.dropdown button');

    dropdownButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const content = e.target.closest('.dropdown').querySelector(".content");
            if (content.style.display === 'block') {
                content.style.display = "none";
            } else {
                content.style.display = 'block';
            }
        });
    });
});

