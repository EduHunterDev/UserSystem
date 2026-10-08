const form = document.querySelector("#formCadastro");
//escuta o evento do formulario
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const data = Object.fromEntries(
        [...form.elements]
            .filter(element => element.id)
            .map(element => [element.id, element.value])
    );

    console.log(data);
    form.reset();
});

