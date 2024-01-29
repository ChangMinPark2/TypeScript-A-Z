class Singleton {
    static instance =Singleton;
    private constructor() {
    }

    // static getInstance(){
    //     if (this.instance) return this.instance;
    //
    //     this.instance = new Singleton();
    //     return this.instance;
    // }
}
// let singletone = Singleton.getInstance();

// const singleton1 = new Singleton();
// const singleton2 = new Singleton();
