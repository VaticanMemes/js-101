var bookShelf = [];

function Book(title, text) {
        this.title = title;
        this.text = text;
}

for (let i = 0; i < 3; i++) {
    var bookP = document.createElement("p");
    var bookInput = document.createElement("input");
    bookInput.setAttribute("type", "text");
    bookInput.setAttribute("size", "1");
    bookInput.setAttribute("id", i);
    bookInput.setAttribute("class", "pinata");
    bookP.appendChild(bookInput);
    bookP.appendChild(document.createTextNode("/100"));
    document.getElementById("test").appendChild(bookP);
    bookShelf.push(new Book(String(i), "lmao"));
}

for (let j = 0; j < document.querySelectorAll(".pinata").length; j++) {
    document.querySelectorAll(".pinata")[j].addEventListener("input", updateValue);
}

function updateValue(evt) {
    bookShelf[evt.target.id].text = evt.target.value;
    console.log(bookShelf);
}

// console.log(bookShelf)