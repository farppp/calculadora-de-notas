const nome = document.getElementById('nome')
const notainpt1 = document.querySelector('#nota1')
const notainpt2 = document.getElementById('nota2')
const botao = document.querySelector('#botao')
const resul = document.querySelector('#resultado')

function clicar(){
    const nota1 = Number(notainpt1.value)
    const nota2 = Number(notainpt2.value)
    const media = (nota1 + nota2)/2
    const situ = media >= 6 ? "Aprovado" : "Reprovado";
    
    resul.innerHTML += `<table>
        <tr>
            <th>Nome</th>
            <th>Primeira Nota</th>
            <th>Segunda Nota</th>
            <th>Média</th>
            <th>Situação</th>
        </tr>
        <tr>
            <th id="NomeRes">${nome.value}</th>
            <th id="PrimeriaN">${nota1.toFixed(1)}</th>
            <th id="SegundaN">${nota2.toFixed(1)}</th>
            <th id="Media">${media.toFixed(1)}</th>
            <th id="final">${situ}</th>
        </tr>
    </table>`

    //Não terminado//
    // const final = document.querySelector('#final');
    // if (situ === "Aprovado"){
    //     final.style.color = 'green';
    // } else {
    //     final.style.color = 'red';
    // }

}

botao.addEventListener('click', clicar);