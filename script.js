const POLISHSAYING = document.querySelector('#polish-saying');
const EQUIVALENTSAYING = document.querySelector('#equivalent-saying');
const TRANSLATEDSAYING = document.querySelector('#translated-saying');
const BUTTON = document.querySelector('#new-saying-button');

var sayings = [
  {
    "saying": "Jak cię widzą, tak cię piszą",
    "equivalent-pt": "",
    "translation-pt": "Como te vêem, te descrevem",
    "equivalent-en": "Fine feathers make fine birds",
    "translation-en": "As they see you, they describe you"
  },
  {
    "saying": "Gdyby kózka nie skakała, to by nóżki nie złamała",
    "equivalent-pt": "Melhor prevenir do que remediar",
    "translation-pt": "Se a cabra não pulasse, não quebraria as pernas",
    "equivalent-en": "Better safe than sorry",
    "translation-en": "If the goat didn't jump, it wouldn't break the legs"
  },
  {
    "saying": "Z kim się zadajesz, takim się stajesz",
    "equivalent-pt": "Quem com porcos anda, farelos come",
    "translation-pt": "",
    "equivalent-en": "You become whom you befriend",
    "translation-en": ""
  },
  {
    "saying": "Kto się czubi, ten się lubi",
    "equivalent-pt": "Quem ama briga",
    "translation-pt": "",
    "equivalent-en": "",
    "translation-en": "Those who argue, like each other"
  },
  {
    "saying": "Lepszy wróbel w garści niż gołąb na dachu",
    "equivalent-pt": "Melhor um pássaro na mão do que dois voando",
    "translation-pt": "Melhor um pardal na mão do que uma pomba no telhado",
    "equivalent-en": "A bird in the hand is worth more than two in the bush",
    "translation-en": "It’s better to have a sparrow in your hand, than a pigeon on the roof"
  },
  {
    "saying": "Co nagle, to po diable",
    "equivalent-pt": "A pressa é inimiga da perfeição",
    "translation-pt": "",
    "equivalent-en": "Haste makes waste",
    "translation-en": ""
  },
  {
    "saying": "Mądry Polak po szkodzie",
    "equivalent-pt": "É fácil prever o que já aconteceu",
    "translation-pt": "Polonês inteligente depois que o dano foi feito",
    "equivalent-en": "It's easy to be wise after the event",
    "translation-en": "Smart pole after the damage is done"
  },
  {
    "saying": "Co kraj to obyczaj",
    "equivalent-pt": "",
    "translation-pt": "Cada país tem seus costumes",
    "equivalent-en": "",
    "translation-en": "Every country has its owns customs"
  },
  {
    "saying": "Musi to na Rusi, a w Polsce jak kto chce",
    "equivalent-pt": "",
    "translation-pt": "Obrigatório na Rússia, e na Polônia como cada um quiser",
    "equivalent-en": "",
    "translation-en": "In Russia it's as you must, in Poland as you wish"
  },
  {
    "saying": "Kto pije i pali ten nie ma robali",
    "equivalent-pt": "",
    "translation-pt": "Quem bebe e fuma não tem vermes",
    "equivalent-en": "",
    "translation-en": "The one who smokes and drinks doesn’t get roundworms"
  },
  {
    "saying": "Ładnemu we wszystkim ładnie",
    "equivalent-pt": "",
    "translation-pt": "Uma pessoa bonita fica bonita em qualquer coisa",
    "equivalent-en": "",
    "translation-en": "A pretty person looks pretty in everything"
  },
  {
    "saying": "Nie chwal dnia przed zachodem słońca",
    "equivalent-pt": "",
    "translation-pt": "Não elogie o dia antes do sol se pôr",
    "equivalent-en": "",
    "translation-en": "Don’t praise the day before sunset"
  },
  {
    "saying": "Wszędzie dobrze, ale w domu najlepiej",
    "equivalent-pt": "Não há lugar como nossa casa",
    "translation-pt": "",
    "equivalent-en": "There's no place like home",
    "translation-en": ""
  },
  {
    "saying": "Potrzeba jest matką wynalazków",
    "equivalent-pt": "A necessidade é a mãe das invenções",
    "translation-pt": "",
    "equivalent-en": "Necessity is the mother of invention",
    "translation-en": ""
  },
  {
    "saying": "Kiedy wszedłeś między wrony, musisz krakać jak i one",
    "equivalent-pt": "Quando em Roma, faça como os Romanos",
    "translation-pt": "Quando você estiver entre os corvos, você deve grasnar como um",
    "equivalent-en": "When in Rome, do as the Romans do",
    "translation-en": "When you came in between the crows, you must croak like them"
  },
  {
    "saying": "Tonący brzytwy się chwyta",
    "equivalent-pt": "Para grandes males, grandes remédios",
    "translation-pt": "Um homem se afogando pega uma navalha",
    "equivalent-en": "Desperate times call for desperate measures",
    "translation-en": "A drowning man grabs a razor"
  },
  {
    "saying": "Nie mój cyrk, nie moje małpy",
    "equivalent-pt": "Cada um com seus problemas",
    "translation-pt": "Não é meu circo, não são meus macacos",
    "equivalent-en": "Not my business",
    "translation-en": "Not my circus, not my monkeys"
  },
  {
    "saying": "Mieć muchy w nosie",
    "equivalent-pt": "Estar irritado",
    "translation-pt": "Estar com moscas no nariz",
    "equivalent-en": "To be angry",
    "translation-en": "To have flies in the nose"
  },
  {
    "saying": "Wiercić komuś dziurę w brzuchu",
    "equivalent-pt": "Irritar alguém",
    "translation-pt": "Fazer um buraco na barriga de alguém",
    "equivalent-en": "To pester someone",
    "translation-en": "To drill a hole into someone's belly"
  },
  {
    "saying": "Nie wywołuj wilka z lasu",
    "equivalent-pt": "Não cutuque a onça com vara curta",
    "translation-pt": "Não chame o lobo da floresta",
    "equivalent-en": "Don’t tempt fate",
    "translation-en": "Don't call the wolf from the woods"
  },
  {
    "saying": "Nabić kogoś w butelkę",
    "equivalent-pt": "Passar a perna em alguém",
    "translation-pt": "Colocar alguém na garrafa",
    "equivalent-en": "To pull one's leg",
    "translation-en": "To put someone into a bottle"
  },
  {
    "saying": "Wypchać się sianem",
    "equivalent-pt": "Suma daqui!",
    "translation-pt": "Encher-se de feno",
    "equivalent-en": "Get lost!",
    "translation-en": "To fill yourself with hay"
  },
  {
    "saying": "Bułka z masłem",
    "equivalent-pt": "Mamão com açucar",
    "translation-pt": "Pão com manteiga",
    "equivalent-en": "Easy-peasy",
    "translation-en": "Bun with butter"
  },
  {
    "saying": "Zrobili mnie w konia",
    "equivalent-pt": "Eles me enganaram",
    "translation-pt": "Me fizeram de cavalo",
    "equivalent-en": "I was fooled",
    "translation-en": "They've made into a horse"
  },
  {
    "saying": "Mieć węża w kieszeni",
    "equivalent-pt": "Pão-duro",
    "translation-pt": "Ter uma cobra no bolso",
    "equivalent-en": "Tight-fisted",
    "translation-en": "To have a snake in the pocket"
  },
  {
    "saying": "Apetyt rośnie w miarę jedzenia",
    "equivalent-pt": "Quanto mais se tem, mais se quer",
    "translation-pt": "O apetite cresce na medida da comida",
    "equivalent-en": "The more you have the more you want",
    "translation-en": "The apetite grows with the food"
  },
  {
    "saying": "Być kulą u nogi",
    "equivalent-pt": "Pé no saco",
    "translation-pt": "Ser uma bola nas pernas",
    "equivalent-en": "To be a pain in the a**",
    "translation-en": "To be a ball by the legs"
  },
  {
    "saying": "Cel uświęca środki",
    "equivalent-pt": "Os fins justificam os meios",
    "translation-pt": "",
    "equivalent-en": "The goal justifies the means",
    "translation-en": ""
  },
  {
    "saying": "Co dwie głowy to nie jedna",
    "equivalent-pt": "Duas cabeças pensam melhor que uma",
    "translation-pt": "",
    "equivalent-en": "Two heads are better than one",
    "translation-en": ""
  },
  {
    "saying": "Co ma piernik do wiatraka?",
    "equivalent-pt": "O que tem a ver o c* com as calças?",
    "translation-pt": "O que o bolo tem a ver com o moinho de vento",
    "equivalent-en": "What does that have to do with the price of tea in China?",
    "translation-en": "What does the gingerbread has to do with the windmill?"
  },
  {
    "saying": "Czuć się jak ryba w wodzie",
    "equivalent-pt": "Sentir-se bem confortável em alguma situação",
    "translation-pt": "Sentir-se como um peixe dentro d'água",
    "equivalent-en": "To take to something like a duck to water",
    "translation-en": "To feel like a fish in the water"
  },
  {
    "saying": "Kląć jak szewc",
    "equivalent-pt": "",
    "translation-pt": "Xingar como um sapateiro",
    "equivalent-en": "To swear like a sailor",
    "translation-en": "To swear like a shoemaker"
  },
  {
    "saying": "Kłamstwo ma krótkie nogi",
    "equivalent-pt": "Mentira tem pernas curtas",
    "translation-pt": "",
    "equivalent-en": "A lie has no legs",
    "translation-en": "A lie has short legs"
  },
  {
    "saying": "Pieniądze szczęścia nie dają",
    "equivalent-pt": "Dinheiro não traz felicidade",
    "translation-pt": "",
    "equivalent-en": "Money doesn't buy happiness",
    "translation-en": "Money doesn't give happiness"
  }
];

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
