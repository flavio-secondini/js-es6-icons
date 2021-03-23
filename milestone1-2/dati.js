var icone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

icone.forEach((icona, i) => {
	$("#icone1").append(`<i style="padding: 5px; font-size: 40px" class="${icona.family} ${icona.prefix}${icona.name}"></i>`)
});

// Milestone 2
// Coloriamo le icone per tipo.

var iconeColorate = {}



iconeColorate.forEach((icona, i) => {
	$("#icone2").append(`<i style="padding: 5px; font-size: 40px" class="${icona.family} ${icona.prefix}${icona.name} ${icona.colore}"></i>`)
});

// iconeColorate.forEach((elemento, i) => {
//
// 	if (elemento.type == "user") {
// 		elemento.colore = "blu"
// 	} else if (elemento.type == "vegetable") {
// 		elemento.colore = "verde"
// 	}
//
// });




// var iconeColorate = icone.map((elemento, index, array) => {
// 	let
// })
//
// console.log(iconeColorate);
//
// if (elemento.type == user) {
// 	elemento.colore = blu
// } else if (elemento.type == vegetable) {
// 	elemento.colore = verde
// }