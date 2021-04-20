class Dep {
    constructor(){
        this.subs = []//所有订阅者信息
    }
    add(watcher){
        this.subs.push(watcher)
    }
    notify(){ //发布通知的方法
        this.subs.forEach(item => {
            item.updat();
        });
    }
}


class watcher {
    constructor(cb){//cb是更新自己的回调函数
        this.cb = cb;
    }
    //触发回调
    updat() {
     this.cb();   
    }
}
const dep = new Dep();
const watch1 = new watcher(() => console.log('我是第一个'));
const watch2 = new watcher(() => console.log('我是第二个'));
dep.add(watch1);//收集订阅者
dep.add(watch2);
dep.notify() //通知订阅者