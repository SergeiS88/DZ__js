

setTimeout(// ставлю интервал - работает. без него выполняется без загруженных урлов
function(){
    const frontData = dataInfo;
    // console.log(frontData);

    const wrapperEl = document.createElement('section');
    wrapperEl.classList.add('wrapper');
    document.body.prepend(wrapperEl);

    let count = 1;
    frontData.forEach(element => {
        const wrapperItemEl = document.createElement('article');
        wrapperItemEl.classList.add('wrapper__item');
        
        const imgEl = document.createElement('img');
        imgEl.setAttribute('src', element.url);
        imgEl.setAttribute('alt', element.id);
        imgEl.width = '150';
        imgEl.height = '150';

        const aEl = document.createElement('a');
        aEl.href = element.url;
        aEl.textContent = element.id;
        
        const pEl = document.createElement('p');
        pEl.textContent = `кот номер ${count}`;

        wrapperItemEl.appendChild(imgEl);
        wrapperItemEl.appendChild(pEl);
        wrapperItemEl.appendChild(aEl);
        wrapperEl.appendChild(wrapperItemEl);
        count++;
    });
}, 8000);