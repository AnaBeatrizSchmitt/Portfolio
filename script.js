const textoSobreMim = "Olá, meu nome é Ana Beatriz Schmitt, tenho 29 anos e possuo formação superior em Engenharia Ambiental e Técnico em Informática. " +
    " Sou programadora júnior focada no desenvolvimento de sites e novas funcionalidades interativas, tendo forte experiência em HTML e com as linguagens Java e SQL." +
    " Valorizo a organização no ambiente de trabalho e nos códigos que desenvolvo, bem como o a interação em equipe e uma boa comunicação entre os mesmos.";
const textoContato = "Se ficou interessado em meu trabalho, por favor entre em contato comigo pelo WhatsApp " +
    "ou enviando um email com suas dúvidas ou solicitações, será um prazer atende-lás.";

document.getElementById("sobreMim").innerHTML = textoSobreMim;
document.getElementById("textoContato").innerHTML = textoContato;

let habilidades = [];

habilidades.push({ titulo: "Linguagens de Programação:", descricao: "Javascript, Typescript, JAVA e SQL." });
habilidades.push({ titulo: "Linguagens de Marcação/Estilo:", descricao: "HTML, CSS" });
habilidades.push({ titulo: "Frameworks e Bibliotecas:", descricao: "Angular, Spring Boot, Express, GWT" });
habilidades.push({ titulo: "Comportamental:", descricao: "Proativa, Socialização e interação em grupo, Interesse em aprender" });

let projetos = [];

projetos.push({
    titulo: "Jogo da Velha", descricao: "O jogo da velha tem como objetivo de desenvolver a concentração dos jogadores para a formação de três símbolos alinhados em linha reta ou diagonal. Acesse o link abaixo e se divirta com um amigo.",
    imagem: "Assets/jogo-da-velha.jpg", link: "https://anabeatrizschmitt.github.io/Jogo-da-Velha/", tecUtilizadas: "HTML, CSS, Javascript"
});
projetos.push({
    titulo: "Formulário de Contato", descricao: "Formulários de contato é uma funcionalidade altamente utilizada em sites e portfólios. Por este motivo, foi desenvolvido um formulário e suas devidas validações para diversas utilizações.",
    imagem: "Assets/formulario.png", link: "https://anabeatrizschmitt.github.io/Formulario/", tecUtilizadas: "HTML, CSS, Javascript"
});
projetos.push({
    titulo: "Calculadora", descricao: "Para facilitar os cálculos diários, foi desenvolvido uma calculadora padrão com intuito de realizar cálculos rápidos para ajudar o cotidiano.",
    imagem: "Assets/calculadora.jpg", link: "https://anabeatrizschmitt.github.io/Calculadora/", tecUtilizadas: "HTML, Javascript"
});

addHabilidades(habilidades);
addProjetos(projetos);

function addHabilidades(habilidades) {
    habilidades.forEach(habilidade => {
        const div = document.createElement('div');
        const titulo = document.createElement('p');
        const descricao = document.createElement('p');

        titulo.textContent = habilidade.titulo;
        descricao.textContent = habilidade.descricao;

        titulo.classList.add('tituloHabilidade');
        descricao.classList.add('itemHabilidade');
        div.classList.add('divHabilidades');

        div.appendChild(titulo);
        div.appendChild(descricao);

        document.getElementById('habilidades').appendChild(div);
    });
}

function addProjetos(projetos) {
    projetos.forEach(projeto => {
        const div = document.createElement('div');
        const titulo = document.createElement('p');
        const descricao = document.createElement('p');
        const tecUtilizadas = document.createElement('p');
        const button = document.createElement('button');
        const img = document.createElement('img');
        const link = document.createElement('a');

        titulo.textContent = projeto.titulo;
        descricao.textContent = projeto.descricao;
        tecUtilizadas.textContent = "Tecnologias Utilizadas: " + projeto.tecUtilizadas;
        button.textContent = "Ver Mais";
        img.src = projeto.imagem;
        link.href = projeto.link;
        link.textContent = 'Clique aqui para visualizar';
        link.target = '_blank';
        link.style.display = 'none';

        titulo.classList.add('tituloProjeto');
        descricao.classList.add('itemProjeto');
        tecUtilizadas.classList.add('itemProjeto');
        div.classList.add('divProjetos');
        button.classList.add('buttonProjetos');
        img.classList.add('imgProjetos');
        link.classList.add('linkProjetos');

        button.addEventListener('click', function () {
            if (descricao.style.display === 'none' || descricao.style.display === '') {
                descricao.style.display = 'block';
                link.style.display = 'block';
                tecUtilizadas.style.display = 'block';
                button.textContent = "Ver Menos";
            } else {
                descricao.style.display = 'none';
                link.style.display = 'none';
                tecUtilizadas.style.display = 'none';
                button.textContent = "Ver Mais";
            }
        });

        div.appendChild(img);
        div.appendChild(titulo);
        div.appendChild(descricao);
        div.appendChild(tecUtilizadas);
        div.appendChild(link);
        div.appendChild(button);

        document.getElementById('projetos').appendChild(div);
    });
}

document.getElementById('contactFormulario').addEventListener('submit', function (event) {
    event.preventDefault();
    if (formularioValidado()) {
        alert("Formulário enviado!");
    }

});

document.getElementById('buttonWhatsApp').addEventListener('click', function (event) {
    alert("Whatsapp enviado!");
});

function formularioValidado() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log(name, name.lenght);
    if (name === '' || email === '' || message === '') {
        alert("Todos os campos são obrigatórios");
        return false;
    }

    const emailPatern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPatern.test(email)) {
        alert("Informe um email válido");
        return false;
    }

    return true;
}
