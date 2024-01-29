interface Car {
    id: number;
    name: string;
    brand: {
        popularity: number;
        logo: string;
        history: number;
    }
}

type CarId = number;

interface CarBrand {
    popularity: number;
    logo: string;
    history: number;
}
function updateCarBrand(id: CarId, newBrand: CarBrand) {

}