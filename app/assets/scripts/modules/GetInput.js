// import {elements} from './base.js';


export default class GetInput {

    constructor(){
        this.InputArea = document.querySelector('.input--active');
        this.InputNum; 
    }
    
    getInputNum() {
        let numArray = this.InputArea.value.split("").map(numString => {
            if(isNaN(numString)){
                return 'NaN';
            }
            return parseInt(numString);
        });

        if(numArray.length != 4){
            return '4Num';
        }else if(numArray.includes('NaN')){
            return 'NaN';
        }
        let repeatTimes = [];
        numArray.forEach((element) => {
            repeatTimes.push(numArray.filter(item => item == element).length >= 2 ? true : false);
        });
        if(repeatTimes.includes(true)){
            return 'repeated'
        }else {
            return this.InputNum = numArray;
        }
    }
    
}