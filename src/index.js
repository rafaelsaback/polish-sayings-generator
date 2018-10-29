import sayings from 'sayings.json';
import 'style.scss';

const polishSaying = document.querySelector('#polish-saying');
const equivalentSaying = document.querySelector('#equivalent-saying');
const translatedSaying = document.querySelector('#translated-saying');
const btn = document.querySelector('#new-saying-button');

const generateNewSaying = function() {
    let range = sayingsList.length;
    let randomNum = Math.floor(Math.random() * range);
    let saying = sayingsList[randomNum];
    polishSaying.innerHTML = `"${saying['saying']}"`;
    equivalentSaying.innerHTML = `"${saying['equivalent-en']}"`;
    translatedSaying.innerHTML = `"${saying['translation-en']}"`;
    sayingsList.splice(randomNum, 1);
    if(sayingsList.length === 0){
        sayingsList = sayings.slice();
    }
};

var sayingsList = sayings.slice();
generateNewSaying();
btn.addEventListener('click', generateNewSaying);
