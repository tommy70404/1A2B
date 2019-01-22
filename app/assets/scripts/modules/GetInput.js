// import {elements} from './base.js';


export default class GetInput {

    constructor(){
        this.InputArea = document.querySelector('.input--active');
        this.InputNum; 
    }
    //取得每輪的input值，並執行檢查是否符合輸入條件，並回傳不同的ERROR代稱。包含：不足數字、非數字字元和數字重複
    getInputNum() {
        let numArray = this.InputArea.value.split("").map(numString => {
            if(isNaN(numString)){
                return 'NaN';
            }
            return parseInt(numString);
        });

        if(numArray.length != 4){
            return 'need4Num';
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