const platforms = [
    { x: 0, y: 500, width: 2000, height: 40 },
    { x: 300, y: 420, width: 200, height: 20 },
    { x: 700, y: 380, width: 200, height: 20 }
];

function update() {
    updatePlayer();
    updateEnemies();
    updateCoins();
    updateLasers();
    updateCamera();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(-camera.x, -camera.y);

    // Dessiner les plateformes
    for (let p of platforms) {
        ctx.fillStyle = "gray";
        ctx.fillRect(p.x, p.y, p.width, p.height);
    }

    // Dessiner les pièces
    for (let c of coins) {
        if (!c.collected) {
            ctx.fillStyle = "yellow";
            ctx.fillRect(c.x, c.y, c.width, c.height);
        }
    }

    // Dessiner les ennemis
    for (let e of enemies) {
        ctx.fillStyle = "red";
        ctx.fillRect(e.x, e.y, e.width, e.height);
    }

    // Dessiner le joueur
    ctx.fillStyle = "cyan";
    ctx.fillRect(player.x, player.y, player.width, player.height);

    // Dessiner les lasers
    for (let l of lasers) {
        ctx.fillStyle = "lime";
        ctx.fillRect(l.x, l.y, 10, 3);
    }

    ctx.restore();

    // Afficher les pièces collectées
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText("Coins : " + player.coins, 20, 40);
}
