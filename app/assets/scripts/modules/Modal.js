
export default class Modals {
    constructor(){
        this.page = 0;

    }
    //控制開頭介紹頁面
    nextPage() {
        this.page = (this.page + 1) % 5;
        console.log(this);
    }
    
    previousPage() {
        if(this.page == 0) {
            return;
        }
        this.page = (this.page - 1) % 5;
        console.log(this);
    }
}