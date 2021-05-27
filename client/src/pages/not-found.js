import { navBar } from '../shared/nav-bar.js';

export const notFound = () => {
    return `
        ${navBar()}
        <div class="container mt-5 pt-5 text-center">
            <div class="row">
                <div class="col-12">
                    <h1>Oops!</h1>
                    <h2>404 Not Found</h2>
                    <p>
                        Sorry, an error has occured, Requested page not found!
                    </p>
                    <div class="error-actions">
                        <a href="/home" class="btn btn-primary click-action">
                            <span class="glyphicon glyphicon-home"></span>
                            Take Me Home
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}