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


let countplayer = 0
let countcomputer = 0

while (countplayer<5 && countcomputer<5){ //Contador para jugar hasta que alguno gane 5 veces 
    computer = computerPlay()
    let player = prompt('Escoge una boludoooooo') 
    player = player.toLocaleLowerCase() 

    while (player != 'rock' && player != 'paper' && player != 'scissors'){ //Validar si el jugador hizo una eleccion valoida
        player = prompt('Pero escoge entre piedra papel o tijera ome imbecil')
        console.log(player)
    }
    console.log(player)
    console.log(computer)
    if (player==computer){ //Definir quien gana segun las elecciones previas
        alert('Drawwwww maricaaaaaa')
    }
    else if(player=='rock' && computer=='scissors'){
        alert('Ganasteeee, roca le gana a tijera')
        countplayer++
    }
    else if(player=='paper' && computer=='rock'){
        alert('Ganasteeee, papel le gana a roca')
        countplayer++
    }
    else if (player=='scissors' && computer=='paper'){
        alert('Ganasteeee, tijera le gana a papel')
        countplayer++
    }
    else{
        alert('Nooo marica perdiste, sos una mierda')
        countcomputer++
    }
    alert('Player: '+countplayer+' vs computer: '+countcomputer)
}
if (countplayer==5){
    alert('GANASTEEEEE HIJUEPUTAA')
}
else{
    alert('PERDISTEEEE HIJUEPUTAA')
}