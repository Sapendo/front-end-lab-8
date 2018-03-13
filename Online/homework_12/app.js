let root = document.getElementById('root');
onhashchange = tankDetail;
tanksPreview();

function createTag() {
    let tags = {
        div: document.createElement('div'),
        h1: document.createElement('h1'),
        h2: document.createElement('h2'),
        imgTank: document.createElement('img'),
        imgFlag: document.createElement('img'),
        p: document.createElement('p'),
        spanlevel: document.createElement('span'),
        spanText: document.createElement('span'),
        a: document.createElement('a')
    }
    return tags;
}

function tanksPreview() {
    let tags = createTag(),
        container = tags.div,
        h1 = tags.h1,
        allCard = document.createElement('div');
    container.className = 'thumbnails';
    h1.innerHTML = 'Most popular tanks';
    container.appendChild(h1);
    tanks.forEach(tank => {
        let tags = createTag(),
            collectionOfTag = [];
        tags.imgTank.src = tank.preview;
        tags.imgFlag.src = tank.country_image;
        tags.imgFlag.className = 'thumbnails-card-info-flag';
        tags.imgFlag.title = tank.country;
        tags.spanlevel.innerHTML = tank.level;
        tags.spanlevel.className = 'thumbnails-card-info-level';
        tags.spanText.innerHTML = tank.model.toUpperCase();
        tags.spanText.className = 'thumbnails-card-info-model';
        tags.spanText.title = tank.model;
        collectionOfTag = [tags.imgFlag, tags.spanlevel, tags.spanText];
        collectionOfTag.forEach(tag => {
            tags.p.appendChild(tag);
            tags.p.className = 'thumbnails-card-info'
        });
        tags.div.appendChild(tags.imgTank);
        tags.div.appendChild(tags.p);
        tags.div.className = 'thumbnails-card'
        tags.div.addEventListener('click', () => {
            location.hash = tank.model;
        });
        allCard.appendChild(tags.div);
    });
    allCard.className = 'thumbnails-all-card';
    container.appendChild(allCard);
    root.appendChild(container);
}

function tankDetail() {
    let model = location.hash.slice(1);
    tanks.forEach(tank => {
        if (tank.model === model) {
            renderTank(tank);
        }
    })
}

function renderTank(tank) {
    root.innerHTML = '';
    let tags = createTag(),
        container = document.createElement('div'),
        aboutTank = document.createElement('div'),
        previewTank = document.createElement('div'),
        characteristicTank = document.createElement('div');
    container.className = 'tank-details';
    tags.imgTank.src = tank.preview;
    tags.imgFlag.src = tank.country_image;
    tags.spanlevel.innerHTML = '(level ' + tank.level + ')';
    tags.spanText.innerHTML = tank.model.toUpperCase();
    collectionOfTag = [tags.imgFlag, tags.spanText, tags.spanlevel];
    collectionOfTag.forEach(tag => {
        tags.h1.appendChild(tag);
    });

    tags.p.innerHTML = 'Back to list view';
    tags.p.addEventListener('click', () => {
        location.hash = '';
        location.reload();
    });
    container.appendChild(tags.h1);

    let h2Preview = document.createElement('h2');
    h2Preview.innerHTML = 'Preview';
    previewTank.appendChild(h2Preview);
    previewTank.appendChild(tags.imgTank);
    aboutTank.appendChild(previewTank);
    let h2Caracteristic = document.createElement('h2');
    h2Caracteristic.innerHTML = 'Caracteristic';
    characteristicTank.appendChild(h2Caracteristic);
    characteristicTank.appendChild(createTable(tank.details));
    aboutTank.appendChild(characteristicTank);
    aboutTank.className = 'tank-details-about'
    container.appendChild(aboutTank);
    container.appendChild(tags.p);
    root.appendChild(container);
}

function createTable(details) {
    let table = document.createElement('table');
    for (let key in details) {
        let tr = document.createElement('tr'),
            tdName = document.createElement('td'),
            tdValue = document.createElement('td');
        tdName.innerHTML = key;
        tdValue.innerHTML = details[key];
        tr.appendChild(tdName);
        tr.appendChild(tdValue);
        table.appendChild(tr);

    }
    return table;
}