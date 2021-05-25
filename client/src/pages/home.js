import { navBar } from '../shared/nav-bar.js';
import { banner } from '../shared/banner.js';
import { footer } from '../shared/footer.js';

export const home = () => {
    return `
        ${navBar()}
        ${banner()}
        <div class="container mt-2">
            <div class="row justify-content-md-center">
                <div class="col-md-3">
                    <img src="https://via.placeholder.com/200x400" class="img-fluid" alt="Helper">
                </div>
                <div class="col-md-9 text-center mt-2">
                    <h1>Hello</h1>
                    <p>Welcome to the game</p>
                </div>
            </div>
        </div>
        ${footer()}
    `;
}