// 函数的返回值类型中 通过类型谓词 is 来保护返回值的类型

// demo1
function isNumber(arg: number | string): arg is number {
    return typeof arg === 'number';
}

function getTypeByVal(val: number | string) {
    if (isNumber(val)) {
        // 此时由于isNumber函数返回值根据类型谓词的保护
        // 所以可以断定如果 isNumber 返回true 那么传入的参数 val 一定是 number 类型
        val.toFixed();
    }
    // 等价于下面代码
    if (typeof val === 'number') {
        val.toFixed();
    }
}

// demo2
// 定义一个动物的接口
interface Animal {
    eat: () => void;
}
class Dog implements Animal {
    eat() {
        console.log('dog eat');
    }
    jump() {
        console.log('jump');
    }
}
class Cat implements Animal {
    eat() {
        console.log('dog eat');
    }
    jump() {
        console.log('jump');
    }
}
class UseAnimal {
    constructor(public animal: Animal) {}
}

const dog = new Dog();
const dogAnimal = new UseAnimal(dog);
const { animal: animal1 } = dogAnimal;
if (animal1 instanceof Dog) {
    animal1.jump();
}
const cat = new Cat();
const catAnimal = new UseAnimal(cat);
const { animal: animal2 } = catAnimal;
if (animal2 instanceof Cat) {
    animal2.jump();
}

// 实现一个可扩展的判断函数
function check<T>(animal: unknown, key: keyof T): animal is T {
    return (animal as T)[key] !== undefined;
}
if (check(animal1, 'jump')) {
    animal1.jump();
}
if (check(animal2, 'jump')) {
    animal2.jump();
}

// TODO 如果要限制 animal 为 Animal，该怎么写
const test = 'test';
if (check(test, 'jump')) {
    test.jump();
}
// 初始版本
function canJump<T extends Animal>(
    animal: T
): animal is T & { jump: Function } {
    return 'jump' in animal;
}
if (canJump(animal1)) {
    animal1.jump();
}
// 通用版本
function check1<T extends Animal, K extends keyof any>(
    animal: T,
    key: K
): animal is T & { [P in K]: Function } {
    return typeof (animal as any)[key] === 'function';
}
if (check1(animal1, 'jump')) {
    animal1.jump();
}
if (check1(animal1, 'run')) {
    animal1.run();
}
