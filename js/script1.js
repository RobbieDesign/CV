document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab_button");
    const tabs = document.querySelectorAll(".contenido_tab");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const target = button.getAttribute("data-tab");

            tabs.forEach(tab => {
                tab.style.display = tab.id === target ? "block" : "none";
            });
        });
    });
});
