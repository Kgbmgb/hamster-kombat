let level = 1;

document.getElementById('playButton').addEventListener('click', () => {
    console.log('Play button clicked'); // Проверка нажатия
    document.getElementById('gameArea').style.display = 'block'; // Показываем игровую зону
    document.getElementById('playButton').style.display = 'none'; // Скрываем кнопку Play
});

document.getElementById('tapButton').addEventListener('click', () => {
    level++;
    document.getElementById('hamsterStats').innerText = 'Level: ' + level; // Обновляем уровень
});
