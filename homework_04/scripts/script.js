function assign(mainObj, defaultObj, modifyingObj) {
    let mainObject = mainObj;
    for (let key in defaultObj) {
        if (defaultObj.hasOwnProperty(key)) {
            mainObject[key] = defaultObj[key];
        }
    }
    for (let key in modifyingObj) {
        if (modifyingObj.hasOwnProperty(key)) {
            mainObject[key] = modifyingObj[key];
        }
    }
    return mainObject;
}
var defaults = {
    width: 100,
    height: 100
};
var options = {
    width: 150,
    height: 100
};
var configs = assign({}, defaults, options);


function Fighter(props) {
    this._name = props.name;
    this._attack = props.attack;
    this._totalHitpoints = props.hitpoints;
    this._currentHitpoints = props.hitpoints;
    this._zeroingOut = {
        attack: props.attack,
        totalHitpoints: props.hitpoints,
        currentHitpoints: props.hitpoints
    }
}
Fighter.prototype.getName = function() {
    return this._name;
}
Fighter.prototype.getHitpoints = function() {
    return this._currentHitpoints;
}
Fighter.prototype.setHitpoints = function(hitpoints) {
    this._currentHitpoints = hitpoints;
}
Fighter.prototype.getTotalHitpoints = function() {
    return this._totalHitpoints;
}
Fighter.prototype.setTotalHitpoints = function(hitpoints) {
    this._totalHitpoints = hitpoints;
}
Fighter.prototype.getAttack = function() {
    return this._attack;
}
Fighter.prototype.setAttack = function(attack) {
    this._attack = attack;
}
Fighter.prototype.fight = function(enemy) {
    if (enemy === this) {
        throw ('You cannot fight against himself.')
    }
    enemy._currentHitpoints -= this._attack;
    if (!enemy.isAlive()) {
        console.log(`The ${enemy._name} is dead.`);
        this.getBonus(this, enemy);
        enemy._currentHitpoints = 0;
    }
}
Fighter.prototype.isAlive = function() {
    return (this._currentHitpoints > 0) ? true : false;
}
Fighter.prototype.getBonus = function(winer, loser) {
    console.log(`Congratulation!!! The ${winer.getName()} won!! `);
    console.log(`Unfortunately!!! The ${loser.getName()} lost!! `);
    winer._attack = winer._zeroingOut.attack;
    winer._currentHitpoints = winer._zeroingOut.currentHitpoints;
    winer._totalHitpoints = winer._zeroingOut.totalHitpoints;
    loser._attack = loser._zeroingOut.attack;
    loser._currentHitpoints = loser._zeroingOut.currentHitpoints;
    loser._totalHitpoints = loser._zeroingOut.totalHitpoints;
}

function Champion(props) {
    Fighter.apply(this, arguments);
}
Champion.prototype = Object.create(Fighter.prototype);
Champion.prototype.constructor = Champion;
Champion.prototype.heal = function() {
    let health = this._currentHitpoints + 5;
    this._currentHitpoints = (health <= this._totalHitpoints) ? health : this._totalHitpoints;
}
Champion.prototype.defence = function() {
    this._block = true;
    this._totalHitpoints++;
}
Champion.prototype.getBonus = function(winer, loser) {
    Fighter.prototype.getBonus.apply(this, arguments);
    this._attack++;
}

function Monster(props) {
    Fighter.apply(this, arguments);
    this._enrage = 0;
    this._wasEnrage = false;
    this._baseAttack = props.attack;
}
Monster.prototype = Object.create(Fighter.prototype);
Monster.prototype.constructor = Monster;
Monster.prototype.fight = function(enemy) {
    if (this._wasEnrage) {
        this._attack = this._baseAttack;
        this._wasEnrage = false;
    } else if (enemy._block) {
        if (this._enrage) {
            this._enrage--;
            if (!this._enrage) {
                this._wasEnrage = true;
            }
        }
        enemy._block = false;
        return;
    } else if (this._enrage) {
        this._enrage--;
        if (!this._enrage) {
            this._wasEnrage = true;
        }
    }
    Fighter.prototype.fight.apply(this, arguments);
}
Monster.prototype.enrage = function() {
    this._enrage = 2;
    this._attack = this._attack * 2;
}
Monster.prototype.fury = function() {
    if (this._currentHitpoints > 5) {
        this._currentHitpoints -= 5;
        this._totalHitpoints -= 5;
        this._attack = this._attack + 2;
        this._baseAttack = this._baseAttack + 2;
    }
}
Monster.prototype.getBonus = function(winer, loser) {
    Fighter.prototype.getBonus.apply(this, arguments);
    this._totalHitpoints += Math.floor(this._totalHitpoints / 10);
    this._totalHitpoints += Math.floor((loser._totalHitpoints / 100) * 25);
}