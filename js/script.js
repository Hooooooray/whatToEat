let wheel = document.querySelector('.wheel')
let start = document.getElementById('start')
let end = document.getElementById('end')
let count = 0
let ti

start.addEventListener('click', () => {
    clearInterval(ti)
    ti = setInterval(timer, 1)
})

end.addEventListener('click', () => {
    clearInterval(ti)
})

function timer() {
    count -= 6
    wheel.style.transform = `rotate(${count}deg)`
}

let mainDishes = [
    '烤鸡',
    '牛排',
    '意大利面',
    '炸鸡',
    '烤鱼',
    '炸虾',
    '烤蔬菜饭',
    '寿司',
    '烤三文鱼',
    '墨西哥卷饼',
    '红烧肉',
    '烤羊排',
    '烤素食卷',
    '烤鸭',
    '海鲜意大利面',
    '牛肉炖土豆',
    '炸鲈鱼',
    '奶油蘑菇鸡',
    '酱爆鸡丁',
    '烤比萨',
    '牛肉韩式炒饭',
    '鱼香肉丝',
    '香辣炸鸡',
    '虾仁炒面',
    '四川麻辣火锅',
    '芝士焗烤面条',
    '法式蜗牛',
    '酸辣汤',
    '黄焖鸡',
    '咖喱鸡',
    '羊肉串',
    '烤章鱼',
    '沙拉三明治',
    '炸薯条',
    '牛肉拉面',
    '芝士汉堡',
    '泰式炒河粉',
    '寿喜烧',
    '烤鲑鱼',
    '椒盐脆皮鸡',
    '烤肉拌饭',
    '京酱肉丝',
    '韩式石锅拌饭',
    '蒜蓉蒸扇贝',
    '红烧鲍鱼',
    '蚝油牛肉',
    '印度咖喱',
    '蘑菇炖鸡',
    '冰淇淋披萨',
    '芒果鸡尾酒',
    '柠檬蒸鲈鱼',
    '葡萄牛肉卷',
    '海鲜烩饭',
    '意大利炸蛋',
    '奶香鲜虾',
    '墨西哥辣椒炖牛肉',
    '橙汁烤鸭',
    '番茄炖牛腩',
    '红酒烩羊肉',
    '椒麻鸡',
    '蓝莓酱烤鳕鱼',
    '橙香鸡腿',
    '秘制烤鸡翅',
    '牛肉鳄梨卷',
    '柠檬蜜汁鳕鱼',
    '香草烤鲈鱼',
    '三鲜炸云吞',
    '松茸炖鸡',
    '炸鳕鱼球',
    '辣椒炒蛏子',
    '奶酪炸蘑菇',
    '蜜汁叉烧',
    '豉汁蒸排骨',
    '椒盐脆皮鲳鱼',
    '香辣虾仁炒饭',
    '龙虾焗饭',
    '葱爆牛肉',
    '清蒸海鲈鱼',
    '糖醋里脊',
    '铁板牛肉饭',
    '糖醋鲤鱼',
    '红烧带鱼',
    '鸡蛋炒饭',
    '咖喱虾仁',
    '椒盐焗鸡翅',
    '麻辣小龙虾',
    '糖醋排骨',
    '椒麻鸡爪',
    '茄汁炖鸡',
    '椒盐焗鱼',
    '咖喱牛肉面',
    '芥末烤鳕鱼',
    '蜜汁火腿',
    '三鲜炒面',
    '椒盐焗扇贝',
    '葱姜炒龙虾',
];
console.log(mainDishes.length)

function generateUniqueRandomNumbers(count, max, arrayLength) {
    let uniqueNumbers = new Set();
    while (uniqueNumbers.size < count) {
        let randomNumber = Math.floor(Math.random() * max);
        uniqueNumbers.add(randomNumber % arrayLength);
    }
    return Array.from(uniqueNumbers);
}
let listTxt = document.querySelectorAll('.list-txt');

// 生成不重复的随机整数数组
function generateUniqueRandomIndexes(count, max) {
    let uniqueIndexes = new Set();
    while (uniqueIndexes.size < count) {
        let randomNumber = Math.floor(Math.random() * max);
        uniqueIndexes.add(randomNumber);
    }
    return Array.from(uniqueIndexes);
}

// 生成不重复的随机整数索引数组
let uniqueRandomIndexes = generateUniqueRandomIndexes(listTxt.length, mainDishes.length);

// 遍历每个 'list-txt' 元素，并渲染对应的正餐数组值
listTxt.forEach((txt, index) => {
    // 获取对应的正餐数组值
    // 将正餐数组值渲染到 'list-txt' 元素中
    txt.innerText = mainDishes[uniqueRandomIndexes[index]];
});