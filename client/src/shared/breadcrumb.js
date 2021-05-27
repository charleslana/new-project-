export const breadcrumb = (objects, active) => {
    let values = '';
    [].slice.call(objects).map(object => {
        values += `
            <li class="breadcrumb-item ${object === active ? 'active' : ''}">
                ${object === active ?
                object
                :
                '<a href="/' + object.split(' ').join('-').normalize('NFD').replace(/[\u0300-\u036f]/g, '') + '" class="click-action">' + object + '</a>'}
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