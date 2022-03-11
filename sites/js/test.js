function test() {
    console.log(this);
    this.name = "alibibb";
}

test();
console.log(window.name);