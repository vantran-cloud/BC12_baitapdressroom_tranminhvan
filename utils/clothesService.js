export default class ClothesService {
    fetchNavPills() {
        return axios({
            url: 'http://localhost:3000/navPills',
            method: 'GET',
        });
    }

    fetchTabClothes() {
        return axios({
            url: 'http://localhost:3000/tabPanes',
            method: 'GET',
        });
    }

    macThuDo = function (id) {
        return axios({
            url: `http://localhost:3000/tabPanes/${id}`,
            method: 'GET',
        })
    }
};


