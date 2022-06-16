// item的类型取决于调用函数时传入的类型参数
type Callback = <T>(item: T) => void;

const forEach = <T>(arr: T[], callback: Callback) => {
  for (let i = 0; i < arr.length - 1; i++) {
    // 这里调用callback时，ts并不会执行我们的代码。
    // 换句话说：它并不清楚arr[i]是什么类型
    callback(arr[i]);
    callback(1);
  }
};

// 所以这里我们并不清楚 callback 定义中的T是什么类型，自然它的类型还是T
forEach(['1', 2, 3, '4'], <T>(item: T) => {});