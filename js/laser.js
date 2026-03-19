const lasers = [];

document.addEventListener("mousedown", e => {

lasers.push({

x:player.x + player.width/2,
y:player.y + player.height/2,
vx:10

});

});

function updateLasers()
{

for(let l of lasers)
{

l.x += l.vx;

for(let e of enemies)
{

if(collision(l,e))
{

enemies.splice(enemies.indexOf(e),1);

}

}

}

}
