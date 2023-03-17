const numberjrform = document.querySelector('form')
const resultText = document.getElementById('result');
const nbJour = document.getElementById('numberjr-input');

numberjrform.addEventListener('submit', function(e) {
    e.preventDefault();
let userNbJour = parseInt(nbJour.value);
switch (userNbJour) {
    case 1:
        console.log('lundi')
        resultText.textContent = `le jour que vous avez entrer est :  lundi`;
        break;
    case 2:
        console.log('mardi')
        resultText.textContent = `le jour que vous avez entrer est :  mardi`;
        break;
    case 3:
        console.log('mercredi')
        resultText.textContent = `le jour que vous avez entrer est :  mercredi`;
        break;
    case 4:
        console.log('jeudi')
        resultText.textContent = `le jour que vous avez entrer est :  jeudi`;
        break;
    case 5:
        console.log('vendredi')
        resultText.textContent = `le jour que vous avez entrer est :  vendredi`;
        break;
    case 6:
        console.log('samedi')
        resultText.textContent = `le jour que vous avez entrer est :  samedi`;
        break;
    case 7:
        console.log('dimanche')
        resultText.textContent = `le jour que vous avez entrer est :  dimanche`;
        break;

    default:
        resultText.textContent = `erreur, ce n'est pas un nombre de jour existe`;
        console.log("erreur, ce n'est pas un nombre de jour existe")
        break;
}

}
)

