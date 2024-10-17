let level = 1;

document.getElementById('playButton').addEventListener('click', () => {
    document.getElementById('gameArea').style.display = 'block';
    document.getElementById('playButton').style.display = 'none';
});

document.getElementById('tapButton').addEventListener('click', () => {
    level++;
    document.getElementById('hamsterStats').innerText = 'Level: ' + level;
});
