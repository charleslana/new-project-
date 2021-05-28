import { notFound } from '../pages/not-found.js';
import { home } from '../pages/home.js';
import { login } from '../pages/login.js';
import { register } from '../pages/register.js';

export default class Page {

    page;

    constructor(page) {
        this.page = page;
    }

    start() {
        switch (this.page) {
            case 'home':
                return home();
            case 'login':
                return login();
            case 'register':
                return register();
            default:
                return notFound();
        }
    }
}