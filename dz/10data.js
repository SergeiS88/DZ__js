// https://randomuser.me/api/
// https://aws.random.cat/meow

const dataInfo = 
[
    {
        "id": "кот раз",
        "width": 500,
        "height": 500,
    },
    {
        "id": "кот два",
        "width": 500,
        "height": 500,
    },
    {
        "id": "кот три",
        "width": 500,
        "height": 500,
    },
];

// // синхронный запрос работает без всяких, но долго
// dataInfo.forEach(e => {
//     const apiData = new XMLHttpRequest();
//     apiData.open('GET', 'https://aws.random.cat/meow', false);
//     apiData.send();
//     if(apiData.status == 200 ){     
//         let url = JSON.parse(apiData.responseText);
//         e["url"] = url.file;
//         }
// });

dataInfo.forEach(e => {
    (async function ()
    {
        let response = await fetch('https://aws.random.cat/meow');
        e.url = (await response.json()).file;
    }
    )();
});

console.log(dataInfo);//здесь есть урл
console.log(dataInfo[0].url);// здесь нет вставленного урла как так-то.


