const form = document.querySelector("#formCadastro");
const buscarCep = document.querySelector("#buscarCep");
const cep = document.querySelector("#cep");

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

buscarCep.addEventListener("click", async function () {
    const valor = cep.value.replace(/\D/g, "");
    console.log(valor);

    if (valor.length !== 8) {
        alert("Digite um CEP válido.");
        return;
    } try {
        const resposta = await fetch(`https://viacep.com.br/ws/${valor}/json/`);
        const dados = await resposta.json();
        if (!resposta.ok || dados.erro) 
            throw new Error("CEP não encontrado.");
        document.querySelector("#logradouro").value = dados.logradouro;
        document.querySelector("#bairro").value = dados.bairro;
             document.querySelector("#estado").value = dados.estado;
        document.querySelector("#cidade").value = dados.localidade;

    } catch (erro) {
        console.erro("Erro ao buscar CEP:", + erro);
        alert("Erro ao buscar CEP. Tente novamente.");
    }
});