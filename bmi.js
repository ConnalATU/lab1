class BMI {
    // this is where data is inititalised in the class
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
    // this is a method to calculate BMI
    calculateBMI() {
        let bmi = this.weight / (this.height ** 2);
        return bmi;
    }

}
// passing through arguments to be calulated 
let myBMI = new BMI(2, 100);
// assigning your result to a var
let result = myBMI.calculateBMI();
// output result in the console
console.log(result);

