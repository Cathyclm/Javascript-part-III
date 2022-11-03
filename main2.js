console.log("hello world");

// document.getElementById('app') 网页上的每个元素都是一个document 拿到DOM节点当做变量来使用
const app = document.getElementById('app')
document.getElementsByClassName('')
const div = document.createElement('div')
div.textContent = 'app2'

function addUser() {

}

// 下面 相当于在html上加了<div> app </div>
// app.innerHTML = `
//   <div>app1</div>
// ` 
// innerHTML在添加节点，这个地方可以随意增加内容，比较危险涉及安全
// textContent只能添加text不能添加方法

app.appendChild(div)

const app2 = document.querySelector('#app')
const div2 = document.createElement('div')

div2.textContent = 'app3'

app2.appendChild(div2)

const input = document.querySelector('input')

input.value = '10'

const input2 = document.querySelector('#app>input')

input2.value = '20'

function add(a, b) {
  return a + b
}

input.value = add(1, 2)



//=========================================

const input3 = document.createElement('input')
const input4 = document.createElement('input')
const button = document.createElement('button')
const br = document.createElement('br')
const span = document.createElement('span')
button.textContent = 'Add'
span.textContent = '0'

app.appendChild(input3)
app.appendChild(input4)
app.appendChild(button)
app.appendChild(br)
app.appendChild(span)

function newAdd() {
  console.log('newAdd');
  let a = +input3.value //+转化成数字
  let b = +input4.value
  if (isNumber(a) && isNumber(b)) {  //&&并且
    const sub = a + b
    span.textContent = sub
  } else {
    span.textContent = ''
    if (!isNumber(a)) {   //!不是
      span.textContent += 'a '
    }

    // span.textContent = 'input error'
    if (!isNumber(b)) {
      span.textContent += 'b '
    }

  }
  span.textContent += 'input error'

}

// 判断是否number
function isNumber(num) {
  // if(+num === num){
  //   return true
  // }
  // else {
  //   return false
  // }

  return +num === num
}
//此处需要用箭头函数
button.addEventListener('click', () => newAdd())
// ============================================


// num++ = num +1 先试用后相加 num+=2 num+2
// ++num 先相加后使用
// for 循环必须要有三个条件

// for(let num = 0;num <= 10; num++ ){
//   const input = document.createElement('input')
//   app.appendChild(input)
// }

for(let num = 0;num <= 10; ){
  const input = document.createElement('input')
  app.appendChild(input)
  num++
}

//===========================================
// 通过for循环可以把内容和序号，打印出来

const list = ['name','age','email','address','profile']

// console.time() console.timeEnd() 计算循环的时间，运算比较快
console.time('0');
for(let i = 0; i < 5; i++) {
  console.log(i, list[i]);
  if (list[i] === 'email'){
    break
  }
}
console.timeEnd('0');

// 迭代器循环， list.forEach是不可以停止的方法
console.time('1');

list.forEach((element) =>{
  console.log(element);
}
)

console.timeEnd('1');

//此处加了index就可以输出与for循环同样的内容
console.time('2');
list.forEach((element,index) => {
  console.log(index, element);
}
)
console.timeEnd('2');
// list.some
// list.every

// class 类 变成概念，通过new实体化，结构就会一样。还可以放方法。都有login的函数推荐写箭头函数
// class User {
//  name = ''
//  age = 0
// }

// new User()

class User {
  name = ''
  age = 0
  money = 0
// 推荐写箭头函数
  login = () =>{
    console.log(this.name, 'login');
  }

  saveMoney = (num) => {
    this.money += num
    console.log(`${this.name} money is: ${this.money}`);
  }

  checkMoney = () => {
    console.log(`${this.name} money is: ${this.money}`);
  }
// construction只能是普通函数，不能是箭头函数。实体都称为this

 constructor(name){
  this.name = name
 }
}

const xiaoming = new User("xiaoming")
console.log(xiaoming);

const zhangsan = new User("zhangsan")
console.log(zhangsan);

console.log(xiaoming);

xiaoming.login()

zhangsan.saveMoney(200)
zhangsan.saveMoney(250)

xiaoming.checkMoney()
zhangsan.checkMoney()

//=====================================


