

export default class RandomNum {
    constructor(){
        this.randomNum = [];
    }
    getRandom() {
        for(let i = 0 ; i < 4 ; i++){
            let num = Math.floor(Math.random() * 10);
            while(this.randomNum.includes(num)) {
                num = Math.floor(Math.random() * 10);
            }
            this.randomNum.push(num);
        }
        console.log('answer is:' + this.randomNum.toString())
    }
}