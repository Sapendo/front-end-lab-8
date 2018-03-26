function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function monsterBattleScenario() {
    let typesOfAction = [{
        'fight': beast.fight
    }, {
        'enrage': beast.enrage
    }, {
        'fury': beast.fury
    }];
    return typesOfAction[getRandomInt(3)];
}

function championBattleScenario() {
    let typesOfAction = [{
        'fight': hunter.fight
    }, {
        'heal': hunter.heal
    }, {
        'defence': hunter.defence
    }];
    return typesOfAction[getRandomInt(3)];
}

function makeQueue() {
    let battleScenario = [championBattleScenario, monsterBattleScenario],
        fighters = [hunter, beast],
        firstPlayer = fighters[getRandomInt(2)];
    return {
        firstPlayer: firstPlayer,
        secondPlayer: (firstPlayer === hunter) ? beast : hunter,
        firstPlayerScenario: (firstPlayer === hunter) ? battleScenario[0] : battleScenario[1],
        secondPlayerScenario: (firstPlayer === hunter) ? battleScenario[1] : battleScenario[0]
    }
}

function startBattle(hunter, beast) {
    let queue = makeQueue();
    do {
        let moveFirstPlayer = queue.firstPlayerScenario(),
            moveSecondPlayer = queue.secondPlayerScenario(),
            nameOfMoveFirstPlayer = Object.keys(moveFirstPlayer),
            nameOfMoveSecondPlayer = Object.keys(moveSecondPlayer);
            moveFirstPlayer[nameOfMoveFirstPlayer].call(queue.firstPlayer, queue.secondPlayer)
        if (hunter.isAlive() && beast.isAlive()) {
            console.log(`${queue.firstPlayer.getName()} makes a move ${nameOfMoveFirstPlayer}`);
            console.log(`${queue.firstPlayer.getName()}'s life is ${queue.firstPlayer.getHitpoints()}`);
            console.log(`${queue.firstPlayer.getName()}'s attack is ${queue.firstPlayer.getAttack()}`);
        }
            moveSecondPlayer[nameOfMoveSecondPlayer].call(queue.secondPlayer, queue.firstPlayer)
        if (hunter.isAlive() && beast.isAlive()) {
            console.log(`${queue.secondPlayer.getName()} makes a move ${nameOfMoveSecondPlayer}`);
            console.log(`${queue.secondPlayer.getName()}'s life is ${queue.secondPlayer.getHitpoints()}`);
            console.log(`${queue.secondPlayer.getName()}'s attack is ${queue.secondPlayer.getAttack()}`);
            console.log('-------------------Next Move------------------------');
        }

    } while (hunter.isAlive() && beast.isAlive());
}
var hunter = new Champion({
    name: 'Rexxar',
    attack: 10,
    hitpoints: 60
});
var beast = new Monster({
    name: 'King Krush',
    attack: 8,
    hitpoints: 80
});
startBattle(hunter, beast);