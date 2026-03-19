const camera =
{
x:0,
y:0
};

function updateCamera()
{

camera.x = player.x - canvas.width/2;
camera.y = player.y - canvas.height/2;

}
