window.addEventListener("DOMContentLoaded", () => {
    // burger

    const header = document.querySelector('.header')
    const burgerBtn = document.querySelector(".header-wrapper__btn");
    const navContent = document.querySelector(".mobile-menu");
    const mobileMenu = document.querySelector('.mobile-menu__nav-list');
    const menuItem = mobileMenu.querySelectorAll('.mobile-menu__nav-item');
    const body = document.body;

    burgerBtn.addEventListener("click", () => {
        header.classList.toggle('active')
        burgerBtn.classList.toggle('active')
        navContent.classList.toggle('active');
        body.classList.toggle('lock');
    });

    menuItem.forEach((item) => {
        item.addEventListener('click', () => {
            header.classList.toggle('active')
            burgerBtn.classList.toggle('active')
            navContent.classList.toggle('active');
            body.classList.toggle('lock');
        });
    })

    // disabled button before policy submit
    const policyCheckbox = document.getElementById("policyCheckbox");
    const submitBtn = document.getElementById("submitBtn");

    policyCheckbox.addEventListener("change", function () {
        submitBtn.disabled = !policyCheckbox.checked;
    });

    document
        .getElementById("feedbackForm")
        .addEventListener("submit", function (event) {
            if (!policyCheckbox.checked) {
                event.preventDefault();
                alert(
                    "Пожалуйста, примите политику конфиденциальности, чтобы продолжить."
                );
            }
        });

    // header background
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});