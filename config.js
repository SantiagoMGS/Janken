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
console.log(computer)

if (player==computer){
    alert('Drawwwww maricaaaaaa')
}
else if(player=='rock' && computer=='scissors'){
    alert('Ganasteeee, roca le gana a tijera')
}
else if(player=='paper' && computer=='rock'){
    alert('Ganasteeee, papel le gana a roca')
}
else if (player=='scissors' && computer=='paper'){
    alert('Ganasteeee, tijera le gana a papel')
}
else{
    alert('Nooo marica perdiste, sos una mierda')
}