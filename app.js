let paises = [];

paises.push('Brasil', 'Argentina', 'Colombia','Peru','Equador','Bosnia','Venezuela','Bolívia','Uruguai','Guiana','Suriname','Paraguai','Guiana Francesa');

console.table(paises);

console.log("Imprimindo as posições");
//forma tradicional de iterar sobre array

/*for(let i = 0; i < paises.length; i++){
    console.log(paises[i]);
}
// itera sobre o array

paises.forEach((pais)=>{
    return console.log(pais)
})*/

// iterar sobre array
for( let pais of paises){
    console.log(pais)
}