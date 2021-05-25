import Action from "./components/action.js";
import Routes from "./components/routes.js";

document.addEventListener('DOMContentLoaded', () => {
    let route = new Routes('home');
    route.render();

    let action = new Action();
    action.addEventClick();
});