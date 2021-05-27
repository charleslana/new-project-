import { navBar } from '../shared/nav-bar.js';
import { breadcrumb } from '../shared/breadcrumb.js';
import { footer } from '../shared/footer.js';

export const home = () => {
    return `
        ${navBar()}
        ${breadcrumb(['home'], 'home')}
        <div class="container mt-2 mb-5">
            <div class="row justify-content-md-center">
                <div class="col-md-3">
                    <img src="assets/images/helpers/1.png" class="img-fluid" alt="Helper">
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