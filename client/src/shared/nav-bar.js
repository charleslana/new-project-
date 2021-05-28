export const navBar = () => {
    return `
        <nav class="navbar fixed-top navbar-expand-sm navbar-light bg-light">
            <div class="container-fluid">
                <button class="navbar-toggler mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="dropdown">
                    <div class="language-pt" id="iconLanguage" data-bs-toggle="dropdown" aria-expanded="false">
                    </div>
                    <ul class="dropdown-menu" aria-labelledby="iconLanguage">
                        <li class="dropdown-item change-language" data-language="pt">
                            <div class="language-pt"></div>
                        </li>
                        <li class="dropdown-item change-language" data-language="en">
                            <div class="language-en"></div>
                        </li>
                        <li class="dropdown-item change-language" data-language="es">
                            <div class="language-es"></div>
                        </li>
                    </ul>
                </div>
                <span class="navbar-brand mb-0 h1 ms-2">New Project</span>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="nav nav-pills ms-auto">
                    <li class="nav-item"><a href="/home" class="nav-link active click-action" id="home">Home</a></li>
                    <li class="nav-item"><a href="/login" class="nav-link click-action" id="login">Login</a></li>
                    <li class="nav-item"><a href="/register" class="nav-link click-action" id="register">Register</a></li>
                </ul>
                </div>
            </div>
        </nav>
    `;
}