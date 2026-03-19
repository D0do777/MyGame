const enemies = [
    { x: 600, y: 460, width: 32, height: 32, dir: 1 }
];

function updateEnemies() {
    for (let e of enemies) {
        e.x += e.dir * 2;

        if (e.x < 500 || e.x > 900) e.dir *= -1;

        if (collision(player, e)) {
            alert("Game Over");
            location.reload();
        }
    }
}
