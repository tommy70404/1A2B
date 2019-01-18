// import {elements} from './base.js';


export const createInputArea = () => {
    const markup = `
    <li>
        <span class="icon icon--inputArea-1950"></span>
        <input class="input input-active" type="text" maxlength="4" value="">
        <div class="inputHint inputHint-active"></div>
    </li>
    `
    document.querySelector('.inputArea > ul').insertAdjacentHTML('beforeend',markup);
}

export const showHint = (hint) => {
    document.querySelector('.inputHint-active').textContent = `${hint[0]}A${hint[1]}B`;
};

export const delActive = () => {

    document.querySelector('.input-active').setAttribute("disabled","");
    document.querySelector('.input-active').classList.remove('input-active');
    
    document.querySelector('.inputHint-active').classList.remove('inputHint-active')

}

export const report = (event, elements = undefined) => {
    if(event == 'NaN') {
        document.querySelector('.answerAreaHint').innerHTML = `<p class="hints-red"
        >Only numbers allow!</div>`;
    }else if(event == '4Num') {
        document.querySelector('.answerAreaHint').innerHTML = `<p class="hints-red">Only accept 4 numbers!</p>`
    }else if(event == 'repeated') {
        document.querySelector('.answerAreaHint').innerHTML = `<p class="hints-red">your numbers are repeated</p>`
    }else if(event == 'correct') {
        document.querySelector('.answerAreaHint').innerHTML = `<p class="hints-red">you found the secret treasure in <span style="color: #751B1B;">${elements}</span> rounds</p> `
    }else if(event == 1) {
        document.querySelector('.answerAreaHint').innerHTML = `<p class="hints-black">Try harder</p>`
    }else if(event == 2) {
        document.querySelector('.answerAreaHint').innerHTML = `<p class="hints-black">click the number above may help you</p>`
    }else if(event == 3) {
            document.querySelector('.answerAreaHint').innerHTML = `<p class="hints-black">you have tried <span style="color: #751B1B;">${elements}</span> rounds </p>`
    }else if(event == 0) {
        document.querySelector('.answerAreaHint').innerHTML = `<p class="hints-black">well, well, well <br> it's a good guess</p>`
}
}

export const yesOrNo = (e, clickTimes) => {
    if(e.target.localName == "ul"){
    }else {
        while(e.target.parentNode.classList.length > 0) {
            e.target.parentNode.classList.remove(e.target.parentNode.classList[0]);
        }
        let number = parseInt(e.target.classList[1].split('-')[3]);
        clickTimes[number] = (clickTimes[number] + 1) % 3;
        if(clickTimes[number] == 1){
            e.target.parentNode.classList.add('icon','icon--X');
        }else if(clickTimes[number] == 2) {
            e.target.parentNode.classList.add('icon','icon--O');
        }
    }
}

export const btnMethod = (e, method) => {
    if(method == 'add'){
        e.innerHTML = `<span class="icon icon--fingerprint"></span>`;
    }else if(method == 'remove'){
        e.removeChild(e.childNodes[0]);
    }
}
