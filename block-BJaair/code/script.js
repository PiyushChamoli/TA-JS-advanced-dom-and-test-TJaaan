let ul = document.querySelector('ul');
let form = document.querySelector('form');

let cardData = JSON.parse(localStorage.getItem('cards')) || [];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let title = event.target.elements.title.value;
    let category = event.target.elements.category.value;
    cardData.push({title, category});
    localStorage.setItem('cards',JSON.stringify(cardData));
    createUI(cardData,ul);
})

function handleEdit (event, info, id, label) {
    let elm = event.target;
    let input = document.createElement('input');
    input.value = info;
    input.addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {
            let updatedValue = event.target.value;
            cardData[id][label] = updatedValue;
            createUI();
            localStorage.setItem('cards',JSON.stringify(cardData));
        }
    });
    input.addEventListener('blur', (event) => {
            let updatedValue = event.target.value;
            cardData[id][label] = updatedValue;
            createUI();
            localStorage.setItem('cards',JSON.stringify(cardData));
        }
    )
    let parent = event.target.parentElement;
    parent.replaceChild(input,elm);
}

function createUI (data=cardData, root=ul) {
    root.innerHTML = '';
    let fragment = new DocumentFragment();
    data.forEach((obj,index) => {
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.addEventListener('dblclick', (event) => handleEdit(event, obj.category, index, 'category'));
        let h2 = document.createElement('h2');
        h2.addEventListener('dblclick', (event) => handleEdit(event, obj.title, index, 'title'));
        p.innerText = obj.category;
        h2.innerText = obj.title;

        li.append(p,h2);
        fragment.append(li);
    });
    root.append(fragment);
}

createUI(cardData,ul);