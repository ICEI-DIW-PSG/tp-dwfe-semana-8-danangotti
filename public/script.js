const catalogo = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        tipo: "filme",
        generos: ["Fantasia"],
        ano: 2001,
        nota: 5,
        assistido: false,
        imagem: "imagens/senhordosaneis.jpg"

    },
    {
        id: 2,
        titulo: "Click",
        tipo: "filme",
        generos: ["Drama", "Comédia"],
        ano: 2006,
        nota: 10,
        assistido: true,
        imagem: "imagens/click.jpg"
    },
    {
        id: 3,
        titulo: "Batman Begins",
        tipo: "filme",
        generos: ["Ação", "Crime"],
        ano: 2005,
        nota: 9.8,
        assistido: true,
        imagem: "imagens/batman.jpg"
    },
    {
        id: 4,
        titulo: "Gente Grande",
        tipo: "filme",
        generos: ["Comédia", "Drama"],
        ano: 2010,
        nota: 8,
        assistido: true,
        imagem: "imagens/gente.jpg"
    },
    {
        id: 5,
        titulo: "Esposa de Mentirinha",
        tipo: "filme",
        generos: ["Comédia", "Romance"],
        ano: 2011,
        nota: 8.8,
        assistido: true,
        imagem: "imagens/esposa.jpg"
    },
    {
        id: 6,
        titulo: "Diário de uma Paixão",
        tipo: "filme",
        generos: ["Romance", "Drama"],
        ano: 2004,
        nota: 10,
        assistido: true,
        imagem: "imagens/diario.jpg"
    }
];

// Mostrar catálogo inteiro
console.log(catalogo);

// Título do primeiro item
console.log(catalogo[0].titulo);

// Ano do último item
console.log(catalogo[catalogo.length - 1].ano);

// Segundo gênero do terceiro item
console.log(catalogo[2].generos[1]);

// Total de itens
const totalItens = catalogo.length;

// Total de filmes
const totalFilmes = catalogo.filter(item => item.tipo === "filme").length;

// Total de séries
const totalSeries = catalogo.filter(item => item.tipo === "serie").length;

// Não assistidos
const naoAssistidos = catalogo.filter(item => item.assistido === false).length;

// Média das notas
const somaNotas = catalogo.reduce((soma, item) => soma + item.nota, 0);
const mediaNotas = somaNotas / catalogo.length;

// Top 3
const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);

// Mostrar no console

console.log("Total de itens:", totalItens);

console.log("Total de filmes:", totalFilmes);

console.log("Total de séries:", totalSeries);

console.log("Não assistidos:", naoAssistidos);

console.log("Média das notas:", mediaNotas.toFixed(1));

// Ranking no console
console.log("Top 3:");
console.log(ranking[0].titulo, "-", ranking[0].nota);
console.log(ranking[1].titulo, "-", ranking[1].nota);
console.log(ranking[2].titulo, "-", ranking[2].nota);

// MOSTRAR NO HTML
document.getElementById("totalItens").textContent = totalItens;

document.getElementById("totalFilmes").textContent = totalFilmes;

document.getElementById("totalSeries").textContent = totalSeries;

document.getElementById("naoAssistidos").textContent = naoAssistidos;

document.getElementById("mediaNotas").textContent = mediaNotas.toFixed(1);


//ranking no HTML
document.getElementById("ranking").innerHTML = `
    <li>${ranking[0].titulo} - ${ranking[0].nota}</li>

    <li>${ranking[1].titulo} - ${ranking[1].nota}</li>

    <li>${ranking[2].titulo} - ${ranking[2].nota}</li>
`;

//catalogo de filmes opcional

const catalogoFilmes = document.getElementById("catalogoFilmes");

for(let i = 0; i < catalogo.length; i++)
{
    catalogoFilmes.innerHTML += `

    <div class="card">

        <img src="${catalogo[i].imagem}">

        <h3>${catalogo[i].titulo}</h3>

        <p>Ano: ${catalogo[i].ano}</p>

        <p>Nota: ${catalogo[i].nota}</p>

        <p>Gêneros: ${catalogo[i].generos.join(", ")}</p>

    </div>

    `;
}