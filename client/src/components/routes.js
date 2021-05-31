import Page from "../pages/index.js";

export default class Routes {

    route;

    constructor(route) {
        this.route = route;
        this.render();
        this.setHash(route);
    }

    render() {
        let page = new Page(this.route);
        document.querySelector('main').innerHTML = page.start();
    }

    setHash(route) {
        window.location.hash = `#/${route}`;
    }
}