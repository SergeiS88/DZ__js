class Player {
    constructor(video){
        this._video = video;
        this._isPlay = !video.paused;
    };
    
    
    PlayPause = () => {
        if(this._video.paused) this._video.play();
        else this._video.pause();
        this._isPlay = !this._video.paused;
    };
    
    VisibilityHud(el, cl){
        if(video._isPlay)
        this.Visibility(el, cl);
    };
    Visibility (el, cl) {el.classList.toggle(cl)};
    
    NullsBefore(time){
        let stringTime = '';
        for (let i = time.length; i > 0 ; i--) {
            stringTime += time[i-1] = String(time[i-1]).padStart(2, '0');
            if(i > 1) stringTime += ':'
        }; 
        return stringTime;
    };
}
const video = new Player(document.querySelector('.video'));
const vWrapperEl = document.querySelector('.video__wrapper');
// console.log(video);

// вкл/выкл
vWrapperEl.addEventListener('click', (e) => {
    if(e.target.className === 'video' || e.target.className === 'buttons' || e.target.tagName === 'IMG'){
        video.PlayPause();
        document.querySelectorAll('.play').forEach(el => video.Visibility(el, 'disp__none'));
        document.querySelectorAll('.pause').forEach(el => video.Visibility(el, 'disp__none'));
    }
});

// слушаем мышь над видео
vWrapperEl.addEventListener('mouseenter', () => {
    video.VisibilityHud(document.querySelector('.controls'),'hide__hud');
    video.VisibilityHud(document.querySelector('.buttons'),'hide__btns');
});
vWrapperEl.addEventListener('mouseleave', () => {
    video.VisibilityHud(document.querySelector('.controls'),'hide__hud');
    video.VisibilityHud(document.querySelector('.buttons'),'hide__btns');
});


// длительность
video._video.addEventListener('loadedmetadata', () => {
    const durationTime = [
        Math.floor(video._video.duration%59),
        Math.floor(video._video.duration/60),
        Math.floor(Math.floor(video._video.duration/60)/60),
    ];
    document.querySelector('.duration').textContent = video.NullsBefore(durationTime);
});
// // таймер  
video._video.addEventListener('timeupdate', () => {
    const currentTime =[
        Math.floor(video._video.currentTime%59),
        Math.floor((video._video.currentTime+1)/60),
        Math.floor(Math.floor((video._video.currentTime)/60)/60),
    ];
    document.querySelector('.timer').textContent = video.NullsBefore(currentTime);
    document.querySelector('.time__input').value = video._video.currentTime / video._video.duration * 100;
});

// во весь экран 
document.querySelector('.full__screen').addEventListener('click', () => {
    video._video.requestFullscreen();
});

// бегунок времени
document.querySelector('.time__input').addEventListener('input', () => {
    video._video.currentTime = document.querySelector('.time__input').value / 100 * video._video.duration;
});

// бегунок громкости
document.querySelector('.volume__input').addEventListener('input', () => {
    video._video.volume = document.querySelector('.volume__input').value;
});