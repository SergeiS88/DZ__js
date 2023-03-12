const video = document.querySelector('.video');

// включает/выключает плеер и меняет иконку
const PlayPause = () => {
    if(video.paused){
        video.play();
        document.querySelectorAll('.play').forEach(e => e.setAttribute('style', 'display: none;'));
        document.querySelectorAll('.pause').forEach(e => e.setAttribute('style', 'display: block;'));
    }
    else{
        video.pause();
        document.querySelectorAll('.play').forEach(e => e.setAttribute('style', 'display: block;'));
        document.querySelectorAll('.pause').forEach(e => e.setAttribute('style', 'display: none;'));
    }
};

// длительность
video.addEventListener('loadedmetadata', () => {
    document.querySelector('.duration').textContent = video.duration;
});
// таймер  
video.addEventListener('timeupdate', (e) => {
    document.querySelector('.timer').innerText = video.currentTime;
    document.querySelector('.timing').value = video.currentTime / video.duration * 100;
})

// слушаем событие на блоке плеера 
document.querySelector('.video__wrapper').addEventListener('click', (e) => {
    // чтоб панель не срабатывала на воспроизведение
    if(e.target.className === 'controls' || e.target.tagName === 'INPUT') return;
    PlayPause();
});

// во весь экран 
document.querySelector('.fullScreen').addEventListener('click', () => {
    document.querySelector('.video').requestFullscreen();
});

// бегунок времени
document.querySelector('.timing').addEventListener('input', () => {
    video.currentTime = document.querySelector('.timing').value / 100 * video.duration;
});

// бегунок громкости
document.querySelector('.volume').addEventListener('input', () => {
    video.volume = document.querySelector('.volume').value;
});

// включить отображение
const Visible = () => {
    document.querySelector('.buttons').setAttribute('style', 'visibility: visible;');
}
// отключить отображение
const Hidden = () => {
    document.querySelector('.buttons').setAttribute('style', 'visibility: hidden;');
}
// слушаем мышь над видео
document.querySelector('.video__wrapper').addEventListener('mouseover', Visible);
document.querySelector('.video__wrapper').addEventListener('mouseout', () => {
    if(!video.paused) Hidden();// усли не играет - не убираем
});