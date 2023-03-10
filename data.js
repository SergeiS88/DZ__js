// https://randomuser.me/api/
// https://aws.random.cat/meow


const dataInfo = 
[
    {
        "id": "кот раз",
        // "url": "https://avatars.mds.yandex.net/i?id=88f4c82b7b541b5acc2e2ade3e2a2c8ede0b9b77-7017431-images-thumbs&n=13",
        "width": 500,
        "height": 500,
    },
    {
        "id": "кот два",
        // "url": "https://avatars.mds.yandex.net/i?id=169b88d4a37ba5badf3e8dc3034a112e21b758d2-8425275-images-thumbs&n=13",
        "width": 500,
        "height": 500,
    },
    {
        "id": "кот три",
        // "url": "https://avatars.mds.yandex.net/i?id=49fcb01dc1f185ce2e59dde3407bc0e463cde71e-7755770-images-thumbs&n=13",
        "width": 500,
        "height": 500,
    },
];

// // синхронный запрос
// dataInfo.forEach(e => {
//     const apiData = new XMLHttpRequest();
//     apiData.open('GET', 'https://aws.random.cat/meow', false);
//     apiData.send();
//     apiData.onreadystatechange = () => {
//         if(apiData.status == 200 && apiData.readyState == 4){     
//             let url = JSON.parse(apiData.responseText);
//             e["url"] = url.file;
//         }
//     };
// });

dataInfo.forEach(e => {
    (async function APICat()
    {
        let response = await fetch('https://aws.random.cat/meow');
        e.url = (await response.json()).file;
    }
    )();
    CatSection();
});

console.log(dataInfo);
console.log(dataInfo[0].url);

// уходит в бесконечность
// while(true){
//     if(dataInfo[2].url != undefined)
//     console.log(JSON.stringify(dataInfo));
//     if(ind >20000){ console.log('vvvvv'); break;}
//     ind++;
// }


