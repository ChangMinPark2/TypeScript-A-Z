class Car {
    mileage = 0;
    price = 100;
    color = 'white';

    driven() {
        return 'drive';
    }

    break() {
        return 'brake';
    }
}

interface Part {
    seats: number;
    tire: number;
}
class Ford implements Car, Part {
    mileage = 1;
    price = 2;
    color = 'white';
    seats = 7;
    tire = 7;

    driven() {
        return 'drive';
    }

    break(): string {
        return 'break';
    }
}

const myCar = new Ford();

