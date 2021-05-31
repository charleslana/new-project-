import Action from "./components/action.js";
import Routes from "./components/routes.js";

document.addEventListener('DOMContentLoaded', () => {
    let pageDefault = 'home';
    let hash = window.location.hash.substring(2);

    if (!!hash) {
        pageDefault = hash;
    }

    let route = new Routes(pageDefault);
    route.render();

    let action = new Action();
    action.addEventClick();
    action.updateClick(document.querySelector('main'), pageDefault);
});