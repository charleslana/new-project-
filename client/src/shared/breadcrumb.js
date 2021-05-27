export const breadcrumb = (pages, pageActive) => {
    let values = '';
    [].slice.call(pages).map(page => {
        values += `
            <li class="breadcrumb-item ${page === pageActive ? 'active' : ''}">
                ${page === pageActive ?
                page
                :
                '<a href="/' + page.split(' ').join('-').normalize('NFD').replace(/[\u0300-\u036f]/g, '') + '" class="click-action">' + page + '</a>'}
            </li>
        `;
    });
    return `
        <div class="top-breadcrumb d-flex justify-content-center">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb align-items-center">
                    ${values}
                </ol>
            </nav>
        </div>
    `;
}