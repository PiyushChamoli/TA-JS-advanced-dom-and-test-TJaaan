let root = document.querySelector('ul');

let allNotice = {Sport: 'Play Football', Todo: 'Complete AdvJS',};

function addNotice() {
    for (const key in allNotice) {
        let li = document.createElement('li');
        let p = document.createElement('p');
        let h2 = document.createElement('h2');
        p.innerText = key;
        h2.innerText = allNotice[key];
        li.append(p,h2);
        root.append(li);
    }
}

addNotice();