let toggle = document.getElementById("theme-toggle");

toggle.onclick = function () {

    let targetTheme;

    toggle.checked ? targetTheme = "dark" : targetTheme = "light";

    document.documentElement.setAttribute('data-theme', targetTheme)
};