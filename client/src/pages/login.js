import { navBar } from '../shared/nav-bar.js';

export const login = () => {
    return `
        ${navBar()}
        <div class="container mt-5 pt-5">
            <h1>Login</h1>
        </div>
    `;
}