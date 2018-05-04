let Enemy = function(x,y,speed) {
    this.x = x;
    this.y = y;
    this.speed = Math.floor((Math.random()*300)+200);
    this.sprite = 'images/enemy-bug.png';

};
Enemy.prototype.update = function(dt) {
 if(this.x < 505) { this.x = this.x + this.speed * dt; } 

 else { this.x = -2; }

  
    if(this.x < player.x + 30 && this.x + 60 > player.x && this.y < player.y + 60 && this.y + 40 > player.y) {
        player.x = 200;
        player.y = 380;
    }
};
Enemy.prototype.render = function() { ctx.drawImage(Resources.get(this.sprite), this.x, this.y); };


 
let Player = function(x,y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';}
 
Player.prototype.update = function() {
    if (this.y > 380) { this.y = 380; }

    if (this.x > 400) { this.x = 400; }

    if (this.x < 0) { this.x = 0; }

    if (this.y < 0) {
        this.x = 200;
        this.y = 380;
    }
}//End of update

Player.prototype.render = function(){ ctx.drawImage(Resources.get(this.sprite), this.x, this.y);}

Player.prototype.handleInput = function(keypressed){
    switch(keypressed){
        case 'up' : this.y -= 50
        break;
        case 'down': this.y += 50
        break;
        case 'right': this.x += 50
        break;
        case 'left' : this.x -= 50
        break;
    }
}

  

let allEnemies=[new Enemy(0,50) , new Enemy(0, 140), new Enemy(0, 230) , new Enemy(100, 230),new Enemy(200, 230)]; 
    

let player = new Player(200, 400);
 
document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
 
