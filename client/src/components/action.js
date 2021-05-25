import Routes from "./routes.js";

export default class Action {

    constructor() { }

    addEventClick() {
        let self = this;

        let clickActions = [].slice.call(document.querySelectorAll('.click-action'));

        clickActions.map(clickAction => {
            clickAction.addEventListener('click', function (event) {
                event.preventDefault();

                let page = this.href.replace(/^.*\//g, '');
                let main = document.querySelector('main');
                let getAttributePage = main.getAttribute('page');

                if (page !== getAttributePage) {
                    self.updateClick(main, page);
                }
            });
        });
    }

    updateClick(main, page) {
        main.setAttribute('page', page);

        let routes = new Routes(page);
        routes.render();

        let element = document.getElementById(page);

        if (element) {
            this.removeClickActive();
            element.classList.add('active');
        }

        this.addEventClick();
    }

    removeClickActive() {
        let clickActions = [].slice.call(document.querySelectorAll('.click-action'));

        clickActions.map(clickAction => {
            clickAction.classList.remove('active');
        });
    }
}