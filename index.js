class Product {
    constructor(title, calories){
        this.title = title;
        this.calories = calories;
    }
}

class Dish {
    constructor(title){
        this.title = title;
        this.products = [];
    }
    addProduct( product, weight){
        this.products.push([product.title, weight, product.calories]);
    }
}

class CaloriesCalculator{
    constructor(){
        this.total = 0;
        this.dishes = [];
        this.information = [];
    }
    addDish(dish){
        this.dishes.push([dish.title, dish.products]);
    }
    getTotalCalories(){
        for (let dish of this.dishes){
            for (let product of dish[1]){
                const prodWeight = product[1];
                const prodCalories = product[2];
                this.total += (prodWeight * (prodCalories / 100));
            }
        }
        return ('Общая калорийность блюда ' + this.total);
        
    }
    getAllDishesInfo(){
        for (let dish of this.dishes){
            const dishName = dish[0];
            var dishCalories = 0;
            
            for (let product of dish[1]){
                const prodWeight = product[1];
                const prodCalories = product[2];
                dishCalories +=(prodWeight * (prodCalories / 100));
            }
            let dishInform = dishName + '-' + '1 порция, ' + dishCalories + ' ккал.';

            for (const product of dish[1]){
                const prodName = product[0];
                const prodWeight = product[1];
                const prodCalories = product[2];
                
                dishInform += '\n' + prodName + ', ' + prodWeight + ' гр., ' + prodCalories + ' ккал.';
            }
            this.information.push(dishInform);
        }
        for (const information of this.information){

            return information;
        }
    }
}
const meat = new Product('Филе говядина', 158);
const rice = new Product('Рис', 130);
const onion = new Product('Лук', 40);
const carrot = new Product('Морковь', 41);

const plov = new Dish('Плов');
plov.addProduct(meat, 100);
plov.addProduct(rice, 150);
plov.addProduct(onion, 25);
plov.addProduct(carrot, 25);


const calculator = new CaloriesCalculator();
calculator.addDish(plov);

const calories = calculator.getTotalCalories();
console.log(calories); 

const totals = calculator.getAllDishesInfo();
console.log(totals);