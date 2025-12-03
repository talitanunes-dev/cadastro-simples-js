function adicionarItem() {
    const input = document.getElementById("itemInput");
    const valor = input.value;

    if (valor === "") return;

    let lista = JSON.parse(localStorage.getItem("itens")) || [];
    lista.push(valor);
    localStorage.setItem("itens", JSON.stringify(lista));

    mostrarLista();
    input.value = "";
}

function mostrarLista() {
    let lista = JSON.parse(localStorage.getItem("itens")) || [];
    let ul = document.getElementById("lista");

    ul.innerHTML = "";

    lista.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
}

mostrarLista();
