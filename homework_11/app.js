let rootNode = document.getElementById("root"),
    container = document.createElement('ul');

function toggle() {
    let sibling = this.nextSibling;
    if (this.className === 'folder') {
        if (sibling.style.display === 'block') {
            sibling.style.display = 'none';
            this.firstChild.innerHTML = 'folder';
        } else {
            sibling.style.display = 'block';
            this.firstChild.innerHTML = 'folder_open';
        }
    }
}
let tree = el => {
    let li = document.createElement('li'),
        p = document.createElement('p'),
        span = document.createElement('span'),
        icon = document.createElement('i');
    p.addEventListener('click', toggle);
    icon.className = 'material-icons';
    if (el.folder) {
        icon.innerHTML = 'folder';		
        icon.classList.add('folder');
		p.className = 'folder';
    } else {
        icon.innerHTML = 'insert_drive_file';
    }
    span.innerHTML = el.title;
    p.appendChild(icon);
    p.appendChild(span);
    li.appendChild(p);
    if (!el.children) {
        let ul = document.createElement('ul'),
            liLast = document.createElement('li'),
            p = document.createElement('p');
        p.innerHTML = 'Folder is empty';
		p.className = 'cursive';
        liLast.appendChild(p);
        ul.appendChild(liLast);
        ul.style.display = 'none';
        li.appendChild(ul);
    }
    let nextFolder = document.createElement('ul');
    if (el.children) {
        nextFolder.style.display = 'none';
        li.appendChild(nextFolder);
        el.children.forEach(el => {
            nextFolder.appendChild(tree(el));
        });
    }
    return li;
};
structure.forEach(el => {
    container.appendChild(tree(el));
});
rootNode.appendChild(container);