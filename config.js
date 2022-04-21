//console.log(Math.floor(Math.random()*10))

function computerPlay(){

    const randomNumbers = (min, max) => {
        return Math.round(Math.random() * (max - min)) + min;
    }
    aux=randomNumbers(1,3)

    if (aux==1){
        return ('rock')
    }
    else if (aux==2){
        return ('paper')
    }
    else {
        return ('scissors')
    }

}
computer = computerPlay()
let player = prompt('Escoge una boludoooooo') 
player = player.toLocaleLowerCase() 

while (player != 'rock' && player != 'paper' && player != 'scissors'){
    player = prompt('Pero escoge entre piedra papel o tijera ome imbecil')
    console.log(player)
}
console.log(player)


