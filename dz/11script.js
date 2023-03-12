// const template = document.querySelector('[type="template"]').innerHTML;
// document.querySelector('body').insertAdjacentHTML('afterend', template);


class Templator {
    constructor(template) {
      this._template = template;
    }
    
    compile(ctx) {
        const templateVariableRe = /\{\{(.*?)\}\}/g;
        let match = null;
        let result = this._template;
        
        while (match = templateVariableRe.exec(this._template)) {
            const variableName = match[1].trim(); // Почистили строку от пробелов
            if (!variableName) {  // Вдруг там просто пустые скобки
                continue;
            }
    
            const data = ctx[variableName];
            
            if (typeof data === 'function') {
                window[variableName] = data; // Сохранили функцию в window
                result = result.replace(new RegExp(match[0], 'gi'), `window.${variableName}()`); // Использовали
                continue // Потому что мы уже обработали функцию — идём дальше
            }
            
            result = result.replace(new RegExp(match[0], 'gi'), data);
        }
    
    return result;
    }
};

const template = `
    <div class="product product__{{ productId }}">
        <img class="product__img" src="{{ productImg }}" alt="продукт">
        <div class="product__content">
            <a href="product.html" class="product__heading">{{ productName }}</a>
            <p class="product__text">{{ productDescription }}</p>
            <p class="product__price">{{ productPrice }}</p>
        </div>
    </div>
`;

productData.forEach(elem => {
    document.querySelector('.product-box__content').innerHTML += (new Templator(template)).compile({
        productId: elem.id,
        productImg: elem.img,
        productName: elem.productName,
        productDescription: elem.description,
        productPrice: elem.price,
    });
}) 

// for(let i = 0; i < 3; i++){
// }
// chatListItems: CHAT_NAMES.map(item => (
//     `<li class="chat__item">${item}</li>`
//     )),


