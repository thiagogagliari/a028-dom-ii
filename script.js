function adicionaItem(event) {
    event.preventdefault()
    const main = document.getElementById("container")
    const newArticle = document.createElement("article")
    newArticle.innerHTML = "Olá, Barbosa C"
    main.appendChild(newArticle)
    newArticle.insertAdjacentElement("beforeend")
}

function adicionaItem(event) {
    event.preventDefault()
    const main = document.getElementById("container")
    const newArticle = document.createElement("article")
    newArticle.onclick = function removeItem(event) {
        event.target.remove()
    }
    newArticle.classList.add("item")
    newArticle.innerHTML = "Olá, Barbosa C"
    main.appendChild(novoArticle)
    newArticle.insertAdjacentElement("beforeend")
}

function removeItem(event) {
    event.target.remove()
}