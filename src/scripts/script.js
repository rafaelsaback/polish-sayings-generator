import sayings from 'scripts/sayings.json';
const POLISHSAYING = document.querySelector('#polish-saying');
const EQUIVALENTSAYING = document.querySelector('#equivalent-saying');
const TRANSLATEDSAYING = document.querySelector('#translated-saying');
const BUTTON = document.querySelector('#new-saying-button');

var generateNewSaying = function() {
  let range = mutableSayings.length;
  let i = Math.floor(Math.random() * range);
  let saying = mutableSayings[i];
  POLISHSAYING.innerHTML = '"' + saying["saying"] + '"';
  EQUIVALENTSAYING.innerHTML = '"' + saying["equivalent-en"] + '"';
  TRANSLATEDSAYING.innerHTML = '"' + saying["translation-en"] + '"';
  mutableSayings.splice(i,1);
  if(mutableSayings.length === 0){
    mutableSayings = sayings.slice();
  }
};

var mutableSayings = sayings.slice();
generateNewSaying();
BUTTON.addEventListener('click', generateNewSaying);
