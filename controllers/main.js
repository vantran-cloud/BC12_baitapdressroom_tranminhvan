import ClothesService from "../utils/clothesService.js";
import renderMenu from "../utils/renderMenu.js";
import clothes from "../models/clothes.js";
const clothesService = new ClothesService();
const menu = new renderMenu();
const getEle = (id) => {
    return document.getElementById(id);
}
clothesService.fetchNavPills().then(res => {
    getEle('nav-pills').innerHTML = menu.renderMenu(res.data);
    getEle('tab-panes').innerHTML = menu.renderTabClothes(res.data);
})

function renderClothes(clothes) {
    let content = '';

    content = `
            <div class="card nav__gridItem" style="width: 80%; height: 50%;">
                <img class="card-img-top" src="${clothes.imgSrc_jpg}" alt="Card image cap">
                <div class="card-body text-center">
                    <p class="card-text">${clothes._name}</p>
                    <button class="btn btn-primary" onclick="thuDo('${clothes.id}')">Thử đồ</button>
                </div>
            </div>

            `;

        return content;
};

clothesService.fetchTabClothes().then(res => {
    res.data.forEach((item, index) => {
        const { id, type, name, desc, imgSrc_jpg, imgSrc_png } = item;

        switch (type) {
            case "topclothes":
                const panes = new clothes(id, type, name, desc, imgSrc_jpg, imgSrc_png);
                getEle(`pills-${type}`).innerHTML += renderClothes(panes);
                break;
            
            case "botclothes":
                const bot = new clothes(id, type, name, desc, imgSrc_jpg, imgSrc_png);
                getEle(`pills-${type}`).innerHTML += renderClothes(bot);
                break;

            case "shoes":
                const shoe = new clothes(id, type, name, desc, imgSrc_jpg, imgSrc_png);
                getEle(`pills-${type}`).innerHTML += renderClothes(shoe);
                break;

            case "handbags":
                const bags = new clothes(id, type, name, desc, imgSrc_jpg, imgSrc_png);
                getEle(`pills-${type}`).innerHTML += renderClothes(bags);
                break;

            case "necklaces":
                const dayChuyen = new clothes(id, type, name, desc, imgSrc_jpg, imgSrc_png);
                getEle(`pills-${type}`).innerHTML += renderClothes(dayChuyen);
                break;

            case "hairstyle":
                const kieuToc = new clothes(id, type, name, desc, imgSrc_jpg, imgSrc_png);
                getEle(`pills-${type}`).innerHTML += renderClothes(kieuToc);
                break;

            case "background":
                const nen = new clothes(id, type, name, desc, imgSrc_jpg, imgSrc_png);
                getEle(`pills-${type}`).innerHTML += renderClothes(nen);
                break;
        };
    });
});

const thuDo = function(id) {
    clothesService.macThuDo(id).then(res => {
        const { type, imgSrc_png } = res.data;

        switch(type) {
            case "hairstyle":
                getEle('hairstyle').innerHTML = `<img src="${imgSrc_png}"/>`;
                break;

            case "topclothes":
                getEle('bikinitop').innerHTML = `<img src="${imgSrc_png}"/>`;
                break;

            case "botclothes":
                getEle('bikinibottom').innerHTML = `<img src="${imgSrc_png}"/>`;
                break;

            case "shoes":
                getEle('feet').innerHTML = `<img src="${imgSrc_png}"/>`;
                break;


            case "handbags":
                getEle('handbag').innerHTML = `<img src="${imgSrc_png}"/>`;
                break;

            case "necklaces":
                getEle('necklace').innerHTML = `<img src="${imgSrc_png}"/>`;
                break;
            
            case "background":
                getEle('background').innerHTML = `<img src="${imgSrc_png}"/>`;
                break;
        };
    });
}



window.thuDo = thuDo;

