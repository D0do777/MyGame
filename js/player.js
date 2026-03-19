const player =
{
x:100,
y:100,
width:32,
height:32,

vx:0,
vy:0,

speed:4,
jump:12,

gravity:0.6,
gravityDir:1,

coins:0
};

function updatePlayer()
{

if(keys["d"] || keys["arrowright"])
player.vx = player.speed;
else if(keys["q"] || keys["arrowleft"])
player.vx = -player.speed;
else
player.vx = 0;

player.vy += player.gravity * player.gravityDir;

player.x += player.vx;
player.y += player.vy;

}
