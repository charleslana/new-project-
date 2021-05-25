import { navBar } from '../shared/nav-bar.js';

export const notFound = () => {
    return `
        ${navBar()}
        <div class="container mt-5 pt-5">
            <h1>Not Found</h1>
        </div>
    `;
}