let fruits  = ["Apel","Jeruk","Anggur","Jambu","Pepaya","Pisang","Apel Batu"];
let buahA    = [];

for(let i=0; i< fruits.length; i++){
    let hurufAwal = fruits[i].substring(0,1);
    if(hurufAwal=="A"){
        buahA.push(fruits[i]);
    }
}

console.log(buahA);
