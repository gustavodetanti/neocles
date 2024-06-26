
    let words={"adjetivoFemeninoPlural": [
        "numéricas",
        "artísticas",
        "posibles",
        "imposibles",
        "existentes",
        "inexistentes",
        "vacías",
        "verdaderas",
        "oscuras",
        "infinitas",
        "vivas ",
        "vacías",
        "completas",
        "accesibles",
        "presentes",
        "inaccesibles",
        "imaginadas",
        "pensadas",
        "oscuras",
        "simples",
        "extrañas",
        "determinadas",
        "invisibles",
        "constantes",
        "simpoiéticas","simbiontes"
    ],
    "adjetivoFemeninoSingular": [ "simpoiética","simbiontes",
        "antigua",
        "viviente",
        "posible",
        "imposible",
        "paradójica",
        "explícita",
        "implícita",
        "futura",
        "buscada",
        "encontrada",
        "establecida",
        "aparente",
        "representada",
        "viva",
        "ausente",
        "presente",
        "propia",
        "conocida",
        "humana",
        "original",
        "espiritual",
        "inmanente",
        "imaginaria",
        "desconocida",
        "señalada",
        "invisible",
        "abrupta",
        "constante",
        "artística",
        "artificial","holoente",
        "real"
    ],
    "adjetivoMasculinoPlural": ["holoentes","simbiontes",
        "antiguos",
        "bruscos",
        "suaves",
        "permanentes",
        "ásperos",
        "áureos",
        "futuros",
        "coherentes",
        "oscuros",
        "imaginarios",
        "esenciales",
        "señalados",
        "sustanciales",
        "necesarios",
        "dignos",
        "ausentes",
        "permanentes",
        "ciegos",
        "fundamentales",
        "propios",
        "olvidados",
        "perdidos",
        "infinitos",
        "contingentes",
        "espirituales",
        "representados",
        "imaginarios",
        "perecederos",
        "imperecederos",
        "invisibles",
        "imposibles",
        "caídos",
        "vivientes"
    ],
    "adjetivoMasculinoSingular": ["holoente","simbionte",
        "áspero",
        "antiguo",
        "moderno",
        "lúgubre",
        "singular",
        "prudente",
        "psíquico",
        "puro",
        "perdido",
        "señorial",
        "artificial",
        "paradójico",
        "estable",
        "inestable",
        "manifiesto",
        "creado",
        "ambiguo",
        "implícito",
        "explícito",
        "imperativo",
        "infinito",
        "profundo",
        "interior",
        "decisivo",
        "objetivo",
        "verdadero",
        "esencial",
        "negativo",
        "categórico",
        "sustancial",
        "particular",
        "fundamental",
        "real",
        "imaginario",
        "determinado",
        "indeterminado",
        "natural",
        "conciente",
        "señalado",
        "posible",
        "imposible",
        "necesario",
        "contingente",
        "absoluto",
        "caído",
        "coherente",
        "constante",
        "viviente"
    ],
    "adverbio": [
        "infinitamente",
        "en parte",
        "silenciosamente",
        "con seguridad",
        "quizás",
        "a veces",
        "oscuramente",
        "claramente",
        "completamente",
        "hoy",
        "aún",
        "seguramente",
        "plenamente",
        "siempre",
        "cada vez",
        "suficientemente",
        "precipitadamente",
        "extraordinariamente","alarmantemente","generativamente","contingentemente","dinámicamente"
    ],
    "articuloFemeninoPlural": [
        "las ",
        "las",
        "las",
        "todas las",
        "algunas",
        "ciertas",
        "aquellas",
        "estas"
    ],
    "articuloFemeninoSingular": [
        "la ",
        "la",
        "esta",
        "aquella",
        "una",
        "la",
        "la",
        "toda la"
    ]
}
let allpals=[];
for( var i in words){

allpals=[...allpals,...words[i]];
}
window.onload=function(){

document.querySelector('.app').innerHTML='neocles';
let str='';
    for( var i=0;i<12000;i++){
str+=` <span> ${allpals[parseInt(Math.random()*allpals.length)]} </span> `;
    }
    document.querySelector('.app').innerHTML=str;
return;
    navigator.serviceWorker.register('swcacheall.js').then((resp)=>{

        console.log("register",resp);
    }).catch((err)=>{
        console.log(err);
    
    });
    

}
