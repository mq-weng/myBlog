const pending = "Pendding";
const fulfiled = "Fulfiled";
const rejected = "Rejected"

class myPromise{
    constructor(excutor){
        this.state = pending;//初始状态
        this.value ; //用来保存状态
        try {
            excutor(this.resolve(), this.reject());
        } catch (error) {
            
        }
    }


    resolve = () => { //pending -> fulfiled
        if (this.state === pending) {
            this.state = fulfiled;
        }
    }; 
    reject = () => { //pendding -> rejected
        if (this.state === pending) {
            this.state = rejected;
        }
    };
}

let p = new Promise(() => {

});