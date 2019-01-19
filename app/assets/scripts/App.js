// import {elements} from './modules/base';

import RandomNum from "./modules/RandomNum";
import GetInput from "./modules/GetInput";
import Compare from "./modules/Compare";
import Modal from "./modules/Modal";
import * as Views from "./modules/Views";




let GameController = (() => {
    let clickTimes = [0,0,0,0,0,0,0,0,0,0];
    let rounds = 0;

    let answer = new RandomNum();
    answer.getRandom();
    //建構Modal實例
    let modal = new Modal();

    //focus在第一個輸入區
    document.querySelector(".input-active").focus();

    return {
        getRandom: function() {
            return answer.randomNum;
        },

        getClickTimes: function() {
            return clickTimes;
        },

        getRounds: function() {
            return rounds;
        },

        changeRounds: function(number) {
            rounds += number;
        },
        getModel: function() {
            return modal;
        }
    }
    //挑選隨機數字

})();

let AnswerController = (() => {

    return {
        answer: function() {
            //取得inputArea數字
            let input = new GetInput();
            let InputNum = input.getInputNum();
            if(!Array.isArray(InputNum)){
                document.querySelector(".input-active").focus();
                return Views.report(InputNum);
            }

            //比對答案並得出提示
            let compareAnswer = new Compare();
            compareAnswer.compareAnswer(InputNum, GameController.getRandom());


            //顯示提示
            console.log(compareAnswer.hint);
            Views.showHint(compareAnswer.hint);

            //新增inputArea 並移除input-active class
            Views.delActive();
            GameController.changeRounds(1);
            if(compareAnswer.hint[0] == 4){
                Views.report('correct' ,GameController.getRounds())
            }else {
                Views.createInputArea();
                Views.report(Math.floor(Math.random() * 4), GameController.getRounds())
                document.querySelector(".input-active").focus();
            }
        }
    }

})();


//提交按鈕事件
window.addEventListener('keypress', e => {
    if(e.keyCode == 13){
        AnswerController.answer();
    }
})

document.querySelector('.icon--btn-1950').addEventListener('click', e => {
    AnswerController.answer();
});

//數字列協助事件，玩家點選數字列可出現 X 或 O
document.querySelector('.numbers > ul').addEventListener('click', e => {
    
    Views.yesOrNo(e, GameController.getClickTimes());
})

document.querySelector('.answerArea > span').addEventListener('mouseenter',e =>{
    Views.btnMethod(e.target , 'add');
})
document.querySelector('.answerArea > span').addEventListener('mouseleave',e =>{
    Views.btnMethod(e.target , 'remove');
})

//Modal控制視窗按鈕，next, previous, skip
document.querySelector('.modal__btn__next').addEventListener('click', e=> {
    let modal = GameController.getModel();
    modal.nextPage();
    Views.modalBtnMethod(modal.page);

})
document.querySelector('.modal__btn__previous').addEventListener('click', e=> {
    let modal = GameController.getModel();
    modal.previousPage();
    Views.modalBtnMethod(modal.page);
})
document.querySelector('.modal__btn__skip').addEventListener('click', e=> {
    let modal = GameController.getModel();
    Views.modalBtnMethod(4);
})