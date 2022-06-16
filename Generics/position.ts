// 接口泛型位置
// 定义callback遍历方法 两种方式 应该采用哪一种？
type Callback1 = <T>(item: T) => void;
// 第二种声明方式
type Callback2<T> = (item: T) => void;

const forEach1 = <T>(arr: T[], callback: Callback1) => {
    for (let i = 0; i < arr.length - 1; i++) {
        callback(arr[i]);
        callback(1); // 第一种方式 T 由参数类型决定，参数可以传任意类型
    }
};

const forEach2 = <T>(arr: T[], callback: Callback2<T>) => {
    for (let i = 0; i < arr.length - 1; i++) {
        callback(arr[i]);
        callback(1); // 第一种方式 T 在声明时决定，在这里跟 arr 元素类型一致
    }
};
