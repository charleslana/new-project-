import { navBar } from '../shared/nav-bar.js';
import { breadcrumb } from '../shared/breadcrumb.js';
import { footer } from '../shared/footer.js';

export const login = () => {
    return `
        ${navBar()}
        ${breadcrumb(['home', 'login'], 'login')}
        <div class="container mt-5 pt-5 mb-5 pb-5">
            <div class="row">
                <div class="col-md-3 d-none d-sm-block">
                    <img src="assets/images/helpers/2.png" class="img-fluid" alt="Helper">
                </div>
                <div class="col-md-6 col-xs-12">
                    <h1 class="mb-3">Login</h1>
                    <form>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInputEmail" placeholder="Email" required>
                            <label for="floatingInputEmail">Email</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInputPassword" placeholder="Password" required>
                            <label for="floatingInputPassword">Senha</label>
                        </div>
                        <div class="form-check form-switch mb-3">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                            <label class="form-check-label" for="flexSwitchCheckDefault">Guardar dados</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div class="col-md-3 d-none d-sm-block">
                    <img src="assets/images/helpers/3.png" class="img-fluid" alt="Helper">
                </div>
            </div>
        </div>
        ${footer()}
    `;
}