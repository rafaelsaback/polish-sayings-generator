const POLISHSAYING = document.querySelector('#polish-saying');
const TRANSLATEDSAYING = document.querySelector('#translated-saying');
const BUTTON = document.querySelector('#new-saying-button');

var sayings = [
  {
    "saying": "Jak cię widzą, tak cię piszą",
    "translation-pt": "Como te vêem, te descrevem",
    "translation-en": "Fine feathers make fine birds"
  },
  {
    "saying": "Gdyby kózka nie skakała, to by nóżki nie złamała",
    "translation-pt": "Melhor prevenir do que remediar",
    "translation-en": "Better safe than sorry"
  },
  {
    "saying": "Z kim się zadajesz, takim się stajesz",
    "translation-pt": "Diga-me com quem andas que eu te direi quem tu és",
    "translation-en": "You become whom you befriend"
  },
  {
    "saying": "Kto się czubi, ten się lubi",
    "translation-pt": "Quem ama briga",
    "translation-en": "Those who argue, like each other"
  },
  {
    "saying": "Lepszy wróbel w garści niż gołąb na dachu",
    "translation-pt": "Melhor um pássaro na mão do que dois voando",
    "translation-en": "It’s better to have a sparrow in your hand, than a pigeon on the roof"
  },
  {
    "saying": "Co nagle, to po diable",
    "translation-pt": "A pressa é inimiga da perfeição",
    "translation-en": "Haste makes waste"
  },
  {
    "saying": "Mądry Polak po szkodzie",
    "translation-pt": "É fácil prever o que já aconteceu",
    "translation-en": "It's easy to be wise after the event"
  },
  {
    "saying": "Co kraj to obyczaj",
    "translation-pt": "Cada país tem seus costumes",
    "translation-en": "Every country has its owns customs"
  },
  {
    "saying": "Musi to na Rusi, a w Polsce jak kto chce",
    "translation-pt": "Obrigatório na Rússia, e na Polônia como cada um quiser",
    "translation-en": "In Russia it's as you must, in Poland as you wish"
  },
  {
    "saying": "Kto pije i pali ten nie ma robali",
    "translation-pt": "Quem bebe e fuma não tem vermes",
    "translation-en": "The one who both smokes and drinks doesn’t get roundworms"
  },
  {
    "saying": "Ładnemu we wszystkim ładnie",
    "translation-pt": "Uma pessoa bonita fica bonita em qualquer coisa",
    "translation-en": "A pretty person looks pretty in everything"
  },
  {
    "saying": "Nie chwal dnia przed zachodem słońca",
    "translation-pt": "Não elogie o dia antes do sol se pôr",
    "translation-en": "Don’t praise the day before sunset"
  },
  {
    "saying": "Wszędzie dobrze, ale w domu najlepiej",
    "translation-pt": "Não há lugar como nossa casa",
    "translation-en": "There's no place like home"
  },
  {
    "saying": "Potrzeba jest matką wynalazków",
    "translation-pt": "A necessidade aguça o engenho",
    "translation-en": "Necessity is the mother of invention"
  },
  {
    "saying": "Kiedy wszedłeś między wrony, musisz krakać jak i one",
    "translation-pt": "Quando em Roma, faça como os Romanos",
    "translation-en": "When in Rome, do as the Romans do"
  },
  {
    "saying": "Tonący brzytwy się chwyta",
    "translation-pt": "Para grandes males, grandes remédios",
    "translation-en": "Desperate times call for desperate measures"
  },
  {
    "saying": "Nie mój cyrk, nie moje małpy",
    "translation-pt": "Cada um com seus problemas",
    "translation-en": "Not my business"
  },
  {
    "saying": "Mieć muchy w nosie",
    "translation-pt": "Estar com moscas no nariz (estar irritado)",
    "translation-en": "To have flies in the nose (to be angry)"
  },
  {
    "saying": "Wiercić komuś dziurę w brzuchu",
    "translation-pt": "Fazer um buraco na barriga de alguém (irritar alguém)",
    "translation-en": "To drill a hole into someone's belly (to pestering)"
  },
  {
    "saying": "Nie wywołuj wilka z lasu",
    "translation-pt": "Não cutuque a onça com vara curta",
    "translation-en": "Don’t tempt fate"
  },
  {
    "saying": "Nabić kogoś w butelkę",
    "translation-pt": "Passar a perna em alguém",
    "translation-en": "To pull one's leg"
  },
  {
    "saying": "Wypchać się sianem",
    "translation-pt": "Suma daqui!",
    "translation-en": "Get lost!"
  },
  {
    "saying": "Bułka z masłem",
    "translation-pt": "Mamão com açucar",
    "translation-en": "Easy-peasy"
  },
  {
    "saying": "Zrobili mnie w konia",
    "translation-pt": "Eles me enganaram",
    "translation-en": "I was fooled"
  },
  {
    "saying": "Mieć węża w kieszeni",
    "translation-pt": "Ter uma cobra no bolso (pão-duro)",
    "translation-en": "To have a snake in the pocket (to be tight-fisted)"
  },
  {
    "saying": "Apetyt rośnie w miarę jedzenia",
    "translation-pt": "Quanto mais se tem, mais se quer",
    "translation-en": "The more you have the more you want"
  },
  {
    "saying": "Być kulą u nogi",
    "translation-pt": "Pé no saco",
    "translation-en": "To be a pain in the a**"
  },
  {
    "saying": "Cel uśwyięca środki",
    "translation-pt": "Os fins justificam os meios",
    "translation-en": "The goal justifies the means"
  },
  {
    "saying": "Co dwie głowy to nie jedna",
    "translation-pt": "Duas cabeças pensam melhor que uma",
    "translation-en": "Two heads are better than one"
  },
  {
    "saying": "Co ma piernik do wiatraka?",
    "translation-pt": "O que tem a ver o c* com as calças?",
    "translation-en": "What does that have to do with the price of tea in China?"
  },
  {
    "saying": "Czuć się jak ryba w wodzie",
    "translation-pt": "Sentir-se como um peixe dentro d'águe (Sentir-se bem confortável em alguma situação)",
    "translation-en": "To take to something like a duck to water"
  },
  {
    "saying": "Kląć jak szewc",
    "translation-pt": "Xingar como um sapateiro",
    "translation-en": "To swear like a sailor"
  },
  {
    "saying": "Kłamstwo ma krótkie nogi",
    "translation-pt": "Mentira tem pernas curtas",
    "translation-en": "A lie has no legs"
  },
  {
    "saying": "Pieniądze szczęścia nie dają",
    "translation-pt": "Dinheiro não traz felicidade",
    "translation-en": "Money doesn't buy happiness"
  }
];

var generateNewSaying = function() {
  let range = mutableSayings.length;
  let i = Math.floor(Math.random() * range);
  let saying = mutableSayings[i];
  POLISHSAYING.innerHTML = '"' + saying["saying"] + '"';
  TRANSLATEDSAYING.innerHTML = '"' + saying["translation-en"] + '"';
  mutableSayings.splice(i,1);
  if(mutableSayings.length === 0){
    mutableSayings = sayings.slice();
  }
};

var mutableSayings = sayings.slice();
generateNewSaying();
BUTTON.addEventListener('click', generateNewSaying);
