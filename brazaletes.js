const brazaletes = [

    {id: 100, brazalete: "5PCS FLOWER PEARL BRACELET", precio: 24900 },
    {id: 200, brazalete: "FLOWER & BEE BRACELET", precio: 15900 },
    {id: 300, brazalete: "1PCS SHELL PEARL BRACELET", precio: 12900 },
    {id: 400, brazalete: "6PCS TASSEL BRACELET", precio: 23900 },
    {id: 500, brazalete: "MARBLE PATTERN BRACELET", precio: 21900 },
    {id: 600, brazalete: "5PCS GEOMETRIC BRACELET", precio: 15900 },
    {id: 700, brazalete: "STONE DECOR BRACELET", precio: 13900 },
    {id: 800, brazalete: "FLOWER DETAIL BRACELET", precio: 17900 },
    
]

const encontrado = brazaletes.find(brazalete => brazalete.id == 300);
const masBarato = brazaletes.filter(brazalete => brazalete.precio < 13900);

brazaletes.sort((a,b) =>{
    if(a.precio < b.precio) {
        return -1;
    }
    if(a.precio > b.precio) {
        return 1;
    }

    return 0;
});

console.log(brazaletes);
console.log(encontrado);
console.log(masBarato);
