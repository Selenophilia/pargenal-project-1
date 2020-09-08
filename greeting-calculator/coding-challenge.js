/*Let's remember the first coding challenge where Victor and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass and height.
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.*/

function calculateBMI(){
    var johnObj = {
        firstName: "john",
        mass: 49,
        height: 170,
        calculateBMI: function(){
          johnObj.BMI = this.mass * this.height
           return johnObj.BMI
         }
    }    
    var victorObj = {
        firstName: "victor",
        mass: 49,
        height: 165,
        calculateBMI: function(){
          victorObj.BMI = this.mass * this.height
           return victorObj.BMI
         }
    }
    if(johnObj.calculateBMI() > victorObj.calculateBMI()){
        return `John has the highest BMI than victor BMI ${johnObj.BMI}`
    } else {
        return `Victor has the highest BMI than john BMI ${victorObj.BMI}`

    }
}

/*
Remember the tip calculator challenge? Let's create a more advanced version using
everything we learned!
This time, John and his family went to 5 different restaurants. The bills were Php 1240,
Php 480, Php 2680, Php 1800 and Php 420.
John likes to tip 20% of the bill when the bill is less than Php 500, 15% when the bill is 
between Php 500 and Php 2000, and 10% if the bill is more than Php 2000.
Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid 
amounts (bill + tip).
5. HINT: Start with two empty arrays [] as properties and then fill them up in the loop.

**Extra after finishing:** 
Victor's family also went on a holiday, going to 4 different restaurants.
 The bills were Php 770, Php 3750, Php 1100 and Php 450.
- Victor likes to tip 20% of the bill when the bill is less than Php 1000, 10%
 when the bill is between Php 1000 and Php 3000, and 25% if the bill is more than Php 3000 
 (different than John).
    1. Implement the same functionality as before, this time using Victor's tipping rules.
    2. Create a function (not a method) to calculate the average of a given array of tips. 
    HINT: Loop over the array, and in each iteration store the current sum in a variable
     (starting from 0). After you have the sum of the array, divide it by the number of 
     elements in it (that's how you calculate the average)
    3. Calculate the average tip for each family
    4. Log to the console which family paid the highest tips on average.
*/
let getSummation = () => {
    let sum1 = 0,
        sum2 = 0;

        let johnObj = {
            billValues: [ 480, 2680, 1800, 420],
            tipValues: [],
            calclTip: function(){
                this.billValues.forEach( data => {
                    if(data < 500){
                        this.tipValues.push(data * 0.20)
                    } else if((data >= 500) || (data <= 2000)){
                        this.tipValues.push(data * 0.15)
                    } else {
                        this.tipValues.push(data * 0.10)
                    }        
                });
            }
        }

        let victorObj = {
            billValues: [ 770, 3750, 1100, 450],
            tipValues: [],
            calclTip: function(){
                this.billValues.forEach( data => {
                    if(data < 1000){
                        this.tipValues.push(data * 0.20)
                    } else if((data >= 1000) || (data <= 3000)){
                        this.tipValues.push(data * 0.10)
                    } else {
                        this.tipValues.push(data * 0.25)
                    }        
                });
            }
        }

        johnObj.calclTip()
        victorObj.calclTip()

        johnObj.tipValues.forEach(data => { sum1 = (sum1+data) /johnObj.tipValues.length })

        victorObj.tipValues.forEach(data => { sum2 = (sum2+data) /victorObj.tipValues.length })

        if(sum1 > sum2){
            return `john has more average tip pay than victor ave: ${sum1}`
        } else {
            return `victor has more average tip pay than john ave: ${sum2}`
        }
}


