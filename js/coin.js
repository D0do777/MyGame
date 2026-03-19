const coins = [

{x:500,y:200,width:16,height:16,collected:false},
{x:700,y:200,width:16,height:16,collected:false}

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
