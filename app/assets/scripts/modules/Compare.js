
export default class Compare {
    constructor(){
        this.hint = [0, 0];
    }

    compareAnswer(inputArray, answerArray) {
        //[A, B] A表示位置數字皆正確；B表示數字正確，位置擺錯
        console.log('inputs: ' + inputArray + ',and answer: '+ answerArray)
        inputArray.forEach((element, index) => {
            //如果輸入內含有答案的情況，則比對陣列的每一項元素
            let indexOfEleInAnsArray = answerArray.indexOf(element);
            if(!(indexOfEleInAnsArray < 0)){
                this.hint[1] ++;
                if(indexOfEleInAnsArray == index){
                    this.hint[1] --;
                    this.hint[0] ++;
                }
            }
            
        });

        return this.hint;
    }
}