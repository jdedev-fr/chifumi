export const PIERRE = 0
export const PAPIER = 1
export const CISEAUX = 2
export const JWIN = 1
export const CWIN = -1
export const EGAL = 0
export function launchBot() {
    return (Math.floor(Math.random() * 3) % 3)
}

export function monChoix(n:Number){
    let botC = launchBot()
    if(botC===PIERRE && n===PAPIER){
        return JWIN
    }else if (botC===PIERRE && n===CISEAUX){
        return CWIN
    }
    else if (botC===PIERRE && n===PIERRE){
        return EGAL

    }else if (botC===PAPIER && n===PAPIER){
        return EGAL

    }else if (botC===PAPIER && n===CISEAUX){
        return JWIN
    }
    else if (botC===PAPIER && n===PIERRE){
        return CWIN
    }
    else if (botC===CISEAUX && n===PAPIER){
        return CWIN

    }else if (botC===CISEAUX && n===CISEAUX){
        return EGAL
    }
    else if (botC===CISEAUX && n===PIERRE){
        return JWIN
    }
    else {
        return EGAL
    }
}