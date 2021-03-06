import { navBar } from '../shared/nav-bar.js';
import { breadcrumb } from '../shared/breadcrumb.js';
import { footer } from '../shared/footer.js';

export const register = () => {
    return `
        ${navBar()}
        ${breadcrumb(['home', 'register'], 'register')}
        <div class="container mt-5 pt-5 mb-5 pb-5">
            <div class="row justify-content-md-center">
                <div class="col-md-9">
                    <h1 class="mb-3">Register</h1>
                    <form>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInputEmail" placeholder="Email" required>
                            <label for="floatingInputEmail">Email</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInputPassword" placeholder="Password" required>
                            <label for="floatingInputPassword">Senha</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInputConfirmPassword" placeholder="Password" required>
                            <label for="floatingInputConfirmPassword">Confirmar senha</label>
                        </div>
                        <div class="form-check form-switch mb-3">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                            <label class="form-check-label" for="flexSwitchCheckDefault">Aceito os termos</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        ${footer()}
    `;
}