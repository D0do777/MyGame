const coins = [

{x:500,y:420,width:16,height:16,collected:false},
{x:750,y:420,width:16,height:16,collected:false}

];

function updateCoins()
{

for(let c of coins)
{

if(!c.collected && collision(player,c))
{

c.collected = true;
player.coins++;

}

}

}
