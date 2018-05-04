let Enemy = function(x,y,speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';

};
Enemy.prototype.update = function(dt) {
    
};
Enemy.prototype.render = function() { ctx.drawImage(Resources.get(this.sprite), this.x, this.y); };

///////////////////////////////////////////////////////////////////////////////////////////////////////

// player class
let Player = function(x,y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';}
 
Player.prototype.update = function() {}
Player.prototype.render = function(){ ctx.drawImage(Resources.get(this.sprite), this.x, this.y);}

Player.prototype.handleInput = function(keypressed){
    switch(keypressed){
        case 'up' : this.y -= 100
        break;
        case 'down': this.y += 100
        break;
        case 'right': this.x += 100
        break;
        case 'left' : this.x -= 100
        break;
    }
}

 
// Place all enemy objects in an array called allEnemies

let allEnemies=[new Enemy(0,50) , new Enemy(0, 140), new Enemy(0, 230)]; 
    

// Place the player object in a variable called player
let player = new Player(200, 400);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
 
