/*   

  var  //变量提升
  let  //必须先声明后使用 块作用域
  const  //必须先声明后使用  块作用域
  object.freeze()  变量冻结
  object.freeze(HOST)  //HOST 为某个变量、
  严格模式："use strict"  //高质量代码守卫；作用域，向下延申，当前作用域及其子作用域
  深拷贝与浅拷贝
  null：引用类型
  undefined：基本类型
  查看变量类型： typeof a  //a为变量名
  在JS中 若一个变量没有值，则它的类型为 undofined
  parseInt()将一个字符串转换为整数。  parseInt(a)
  == 两个等号判断是否相等时 会进行数据类型转换
  === 三个等号进行判断是否相等时，不进行数据类型 转换 ;可理解为是否全等（包括数据类型是否一致）
  JS语言中的短路特性：
  <script>
  let a = 6;
  b = 0;
  let f = b || a //则f的值为a的值6
  关于function函数 形参的传递，可设置为默认值 例如：function fun(a = 10);则默认为10，函数调用传递实参时，fun（66）则替代原默认值 使用传递的值
  当子层循环需要推出外层循环时，可以采用打标签的方法进行
  for-in:举个例子
  let hrs = [
    { name:"杭瑞山"， description:"666"}
  ];
  for(let key in hrs){
    document.write(`
    <tr><td>${hrs[key].name}</td><td>${hrs[key].description}</td></tr>`)
  }
  在数组中key的值为数组下标值（索引编号）；在对象中，key为对象的键名；
  for-of：用来处理值；
  举个例子：
  let hrs = [
    { name:"杭瑞山"， description:"666"}
  ];
  for（const value of hrs）
  {
    console.log (value);
  }
  字符串内容分解取出
  for(let v of "hangruishan"){
    console.log (v);
  }
  
  数据类型
  抛出错误： throw new Error("在控制台抛出了 一个错误")
  在JS中数组与对象的数据类型全部为object类型
  例如;let hrs = [];let rsh = {};console.log(typeof hrs); console.log(typeof rsh); 
  那么如何区分一个数组与一个对象的数据类型？   （利用原型链上是否包含该属性？）
  console.log(hrs instanceof Array) 返回 true 数组类型
  console.log(rsh instanceof Object) 返回 true 对象类型
  js中的字面量写法：``;举个例子(支持换行空格等形式)
  let name = "杭瑞山"；let description = "666";
  console.log(`${name}极其非常${description}。);

  模板字面量
  标签模板    ？？？

  字符串的基本函数，举个例子
  let name = "hangruishan";
  name.length //字符串长度  
  name.toUpperCase() //字符串转换为大写  
  name.toLowerCase()  //字符串转为小写  
  name.trim() //去掉字符串空白（空格?）
  name.charAt(0)或者name[0] //取字符串第0个字符
  字符串的截取操作（三个基本使用的函数）
  name.slice(1);name.substring(1);name.substr(1)//输出结果为angruishan (1) 表示字符串从头开始的截取位置 
  name.slice(1,3);//保留2位（1，2）输出结果为：an
  name.substring(1,3)；//保留2位（1，2）输出结果为：an;不支持负数，即不支持从后往前截取
  name.substr(1,3)//保留3位（1，2,3）输出结果为：ang
  name.slice(-3，-1)//从倒数第三个开始截取（不保留倒数第三个字符）截取到倒数第一个（保留倒数第一个）；输出结果为：ha
  name.substr(-3,2)//从倒数第三个开始截取（不保留倒数第三个字符）,保留2位 输出结果为：ha
  检索字符串（查找字符串中是否含有某个字符）
  name.includes("a",0)//从第0个位置查找字符串中是否含有a，返回值为true or false
  name.startsWith(h)//判断某个字符是否在首个位置出现 区分大小写 返回值为布尔值
  name.endsWith(h)//结束位置
  字符串的替换
  name.replace("hang","HANG"); 
  重复输出某某个字符 "h".repeat(3)
  将数值类型变量转换为字符串类型 String（变量名）
  将字符串转为数值
  例子;const string = "99"
  方式一运算：string * 1 + 1 
  方式二函数：Number（string） + 1 
  将数值转化为字符串
  例子;  const number = 99
  方式一运算：number + ""; 
  方式二函数：String（number）

  既有数字又有字母的字符串提取数值
  const string = "99hang";
  parseInt(string);  输出结果为99 //从前往后取，且开头必须为数字
  parseFloat(string);转化为浮点数

  字符串的拆分
  string.split("");//以空白进行拆分，即拆分出单独的每个字符
  数组连接函数：const arr =  ["hang","ruishan"]; arr.join("") -->hangruishan //join("|")--> hang|ruishan;
  数组转换为字符串函数：arr.toString()-->hang,ruishan//默认以都好进行连接

  Boolean类型
  const boolean = new Bonlean(true);
  将某个变量转换为Boolean类型：Boolean({})//将一个对象转换为布尔类型；
  将数值类型显示转换为Boolean类型：let num = 0; 
  num = !!num; (运算形式)
  Boolean（num）;（构造函数形式）

  Number 数值类型
  let num = 99.123;
  Number.isInteger(num);//判断一个数字是否为整数；
  num.toFixed(2);//四舍五入，保留2位小数；
  Number.isNaN（2 / "hangruishan"）; 判断是否为NaN类型，返回boolean类型
  数字+字母复合类型字符串取数值
  let hrs = "99hangruishan";
  parseInt(hrs);//从前往后取整数，数字必须从头开始
  parseFloat（hrs）;//从前往后取浮点数 数字必须从头开始

  Math 数学计算
  Math.max(1,2,3);//取最大值
  Math.min(1,2,3);//取最小值
  Math.ceil(5.5);//向上取整
  Math.floor(5.5);//向下取整   
  Math.round(5.555);//四舍五入取整数
  获取随机数
  Math.random()//默认获取为大于等于0小于1的一个浮点数
  举个例子;获取一个0-5之间的整数
  Math.floor(Math.random() * (5+1));
  取某个区间的随机整数公式: 
  min+Math.floor(Math.random() * (Max - min))//不包含末区间数字
  min+Math.floor(Math.random() * (Max - min+1))//包含末区间数字

  日期
  1 new 对象
  const data = new Date();//data为当前时间，对象类型
  2 方法
  const data = Date();//data为当前时间，字符串类型
  3 直接获取时间戳
  const data = Data.now();
  标志位计算执行时间
  举个例子;
  console.time("for");
  for(let i = 0;i<20000;i++){}
  console.timeEnd("for");

  时间类型的分类：标准类型 时间戳类型
  1.将标准类型转换为时间戳
  const data = new Date("1996-4-6 08:22:22");
  data*1
  Number(data)
  data.valueOf();
  data.getTime();
  2将时间戳转换为标准格式时间
  const timestamp = data.valueOf();
  new Data(timestamp);
  获取标准时间的年月日 时分秒
  const data = new Date("1996-4-6 08:22:22");
  data.getFullYear();//年
  data.getMonth();//月
  data.getDate();//日
  data.getHours（）;//时
  data.getMinutes();//分
  data.getSeconds();//秒

  javaScript 日期处理类库： Moment.js

  结构更清晰的一种控制台输出函数（表格形式）
  console.table();

  const 用来定义一个常量;允许修改某个内存地址中的值，但是不允许修改内存地址；

  数组中的函数
  let array = [1,2,3,4,5];
  获取数组长度；array.length;
  数组类型检测：Array.isArray([])//返回值为布尔类型
  将数组转化为字符串：array.toString();或者：String（array）；或者采用数组连接的方式：Array.join("|");
  将其他类型转换为数组
  字符串转换为数组：
  let str = "Hang";str.split("");-->["H","a","n","g"] ===等价于 Array.from（str）;
  获取字符串的长度：str.length;

  展开语法
  let arr = ["hang", "rui", "shan"];
  let hrs = ["666","666666"];
  将数组hrs添加到数组arr后，利用展开语法： arr = [...arr,...hrs];
  函数中的应用：
  function fun (...args){
    console.log(args);
    //输出结果为：[1,2,3,4,5,6];//点语法可以将非数组类型展开后转换为数组类型
  }
  fun(1，2，3，4，5，6);

  解构赋值（将数组中的值批量赋值给变量）
  举个例子；
  function get(){
    return ["杭瑞山","666"];
  }
  let [name,description] = get();
  console.log(name,year);//输出：杭瑞山，666
  let[name,...args] = ["杭瑞山","123",2020];
  let a = ["hahaha",...args];
  小总结：当展开放在变量位置时 用于吸收作用;放在值的位置时，用于打散作用；

  数组的追加
  let array = ["hang","rui"];
  方式1.array[array.length] = "shan";
  方式2：
  let arr = ["hang", "rui", "shan"];
  let hrs = ["666","666666"];
  arr = [...arr,...hrs];
  方式3（函数形式）：
  array.push("shan","666");
  //加入展开语法
  let arr = ["hang", "rui", "shan"];
  let hrs = ["666","666666"];
  arr.push(...hrs);

  数组的移除；
  array.pop()//从数组末端移除一个数组元素；返回值为移除元素；
  array.shift()//从数组前面移除一个数组元素；返回值为移除元素；
  从数组前面压入一个数组元素；
  array.unshift();//返回值为压入新元素后数组的长度；

  数组的填充
  1.向一个空数组添加添加元素；
  Array（3）.fill（"hangruishan"）;//["hangruishan","hangruishan","hangruishan"]
  2.向一个非空数组填充元素；
  [1,2,3].fill("hang",0,2);-->["hang","hang","3"]//保后不保前；

  2020/4/21
  数组的截断：slice函数
  let arr = [1,2,3,4,5];
  arr.slice(1,2);//从第一个开始截断，截到第二个，保前不保后，对原数组不会产生任何影响，返回值为截取到的数组元素，数组形式
  console.log(arr.slice(1,2));//--》[2];
  arr.slice();//不添加参数，对原数组进行全部截取，返回值为一摸一样的原数组
  arr.slice(1);//从第一个位置开始，截取到数组结束

  splice函数(删除)
  arr.splice(0,2);//从第0个位置开始，截取两个数组元素;返回值为截取到的数组元素组成的数组，注意会对原数组进行改变，既原数组现在只有未被截取的元素了
  console.log(arr.splice(0，2))--》[1,2];
  splice函数的替换功能
  let arr = [1,2,3,4,5];
  let arr2 = arr.splice(0,3,"hang","rui");//从第0位置开始截取，截取三个元素，对于原数组从第0位置开始添加，依次添加了两个元素
  console.log(arr2);-->[1,2,3]
  console.log(arr);-->["hang","rui",4,5]
  arr.splice(1,1,"hangruishan");
  arr-->[1,"hangruishan",3,4,5];
  splice函数的追加功能
  let arr = [1,2,3,4,5];
  arr.splice(1,0,"hangruishan","666");
  arr-->[1,"hangruishan","666",2,3,4,5]

  数组的清空
  let arr = [1,2,3]
  几种不同的方式
  1. arr = [];//该方式又开辟了一个新的且为空内存空间，赋值给了arr，原arr内存地址依然存在，即产生了一个新的空的数组
  2. arr.length = 0;//该方式直接将原数组内存地址的数据清空，没有开辟新的内存空间，没有产生新的数组
  --》第2种方式可以将数组进行彻底的清空
  3. arr.splice(0,arr.length);

  数组的拆分与合并
  数组的拆分
  let str = "hang,rui,shan";
  console.log(str.split(","));-->["hang","rui","shan"]
  数组的合并
  let arr = ["hang","rui","shan"];
  arr.join("-");-->hang-rui-shan
  数组的连接
  1 concat 函数形式
  let arr1 = ["hang"];
  let arr2 = [1,2,3];
  arr1 = arr1.concat(arr2);-->arr1：["hang",1,2,3];在原数组后方进行增加连接；
  2 展开语法形式
  arr1 = [...arr1,...arr2];-->arr1:["hang",1,2,3];
  数组的复制
  let arr1 = [1,2,3,4];
  arr1.copyWithin(2,0,2);//覆盖
  参数解释：
  2:复制到数组的哪个位置，即复制到数组的第2个位置；
  0：要复制数组元素的开始位置，即从第0个位置开始复制；保前
  2：要复制数组元素的末尾位置，即复制到数组的第2个位置；不保后；
  -->arr1:[1,2,1,2];
  再举个例子：
  let arr1 = [1,2,3,4,5,6];
  将2和3复制到4和5的位置：
  arr1.copyWitnin(3,1,3); 
  -->arr1:[1,2,3,2,3,6];

  数组的查找
  1.返回数组某个元素的位置（从左侧开始查找）
  let arr = [1,2,3,4,5];
  arr.indexOf(3);//数组元素3在数组的第2个位置，返回值为2；从左往右依次查找
  若查找一个数组内不存在的元素的位置，则返回-1；
  indexOf可以添加两个参数；
  arr.indexOf()

  2.返回数组某个元素的位置（从右侧开始查找）
  let arr = [1,2,3,4,5,2];
  arr.indexOf(2);//从左侧开始查找，返回值为1；注意查找到一个元素即结束返回
  arr.lastIndexOf(2);//从右侧开始查找，返回值为4；注意查找到一个元素即结束返回

  3.includes()方法,返回值为布尔类型
  let arr = [1,2,3,4,5];
  arr.includes(2);//返回值为true

  indexOf可以添加两个参数；第一个参数为要查找的数组元素，第二个参数为从第几个位置开始查找
  let arr = [1,2,3,4,5,2];
  arr.indexOf(2,0)；--》返回值为1；
  arr.indexOf(2，2)；--》返回值为5；
  依次类推，对于lastIndexOf;
  arr.lastIndexOf(2,-1);//从倒数第1个位置开始查找，返回值为5；
  arr.lastIndexOf(2,-2);//从倒数第2个位置开始查找，返回值为1；

  js 新增的 更加灵活的一种查找方式；
  find（对数组中的元素进行 遍历）返回值为查找的数组元素的值，若没有该值，则返回undefined
  let arr = [1,2,3,4,5];
  arr.find(function(item){
    console.log(item)
  });
  -->1,2,3,4,5
  let res = arr.find(function(item){
    return item == 2;
  });
  console.log(res);//-->2

  find函数可以解决引用类型的查找的问题；、
  let lessons = [{name:"js"},{name:"css"},{name:"mysql"}];
  let status = lessons.find(function(item){
      return item.name == "css";
  });
  console.log(status);-->{name:"css"}

  findIndex();//返回数组中的某个值的索引位置；
   let index = lessons.findIndex(function(item){
      return item.name == "css";
  });
  console.log(index);--> 1 

  数组的排序,sort函数,请注意，数组在原数组上进行排序，不生成副本。
  let arr = [1,7,2,4,3,8,5];
  arr = arr.sort(function(a,b){

    return a-b;
    //1.a-b：从小到大进行排序
    //2.b-a: 从大到小进行排序
  });
  console.log(arr);
  -->[1,2,3,4,5,7,8];
  let cart = [
    {name:"iphone",price:12000},
    {name:"imac",price:18000},
    {name:"ipad",price:3200}
  ];
  cart = cart.sort(function(a,b){
    a.price-b.price;
    //从小到大对price进行排序
  })
  cart：[{name:"ipad",price:3200},
   {name:"iphone",price:12000},
   {name:"imac",price:18000}
]


数组的循环操作
举个例子:
let arr1 = [
  {title:"响应式布局",category:"css"},
  {title:"盒模型",category:"css"},
  {title:"多表查询",category:"mysql"}
]；

for循环
for（let i = 0; i < arr1.length; i++）{
  arr[i].title = `杭瑞山${arr[i].title}`;
}
-->arr1:
[
  {title:"杭瑞山响应式布局",category:"css"},
  {title:"杭瑞山盒模型",category:"css"},
  {title:"杭瑞山多表查询",category:"mysql"}
]

for-of 循环（值操作）
for(const value of arr1){
  value.title = `杭瑞山${value.title}`;
}
-->arr1:
[
  {title:"杭瑞山响应式布局",category:"css"},
  {title:"杭瑞山盒模型",category:"css"},
  {title:"杭瑞山多表查询",category:"mysql"}
]

for-in 循环（索引操作）
for(const key in arr1){
  arr1[key].title = `杭瑞山${arr1[key].title}`;
}
-->arr1:
[
  {title:"杭瑞山响应式布局",category:"css"},
  {title:"杭瑞山盒模型",category:"css"},
  {title:"杭瑞山多表查询",category:"mysql"}
]

forEach()循环
let arr1 = [
  {title:"响应式布局",category:"css"},
  {title:"盒模型",category:"css"},
  {title:"多表查询",category:"mysql"}
]；

arr1.forEach(function(item,index,lessons){
  console.log(item);
  -->
  {title:"杭瑞山响应式布局",category:"css"}
  {title:"杭瑞山盒模型",category:"css"}
  {title:"杭瑞山多表查询",category:"mysql"}
  console.log(index);
  -->
  0
  1
  2
  console.log(lessons);
  -->
  [{title:"响应式布局",category:"css"},{title:"盒模型",category:"css"},{title:"多表查询",category:"mysql"}]
  [{title:"响应式布局",category:"css"},{title:"盒模型",category:"css"},{title:"多表查询",category:"mysql"}]
  [{title:"响应式布局",category:"css"},{title:"盒模型",category:"css"},{title:"多表查询",category:"mysql"}]
});

利用forEach对对象类型数组进行截断操作
 let arr1 = [
  {title:"响应式布局",category:"css"},
  {title:"盒模型",category:"css"},
  {title:"多表查询",category:"mysql"}
]；
arr1.forEach(function(item){
  item.title = item.title.substr(0,2);//从第0个位置开始截取，保留2个字符
})
console.log(arr1);
-->
[
  {title:"响应",category:"css"},
  {title:"盒模",category:"css"},
  {title:"多表",category:"mysql"}
]；

forEach函数可以直接操作Dom元素
举个例子：
let lis = document.querySelectAll("ul li");
lis.forEach(function(item){
  item.addEventListener("click",function(){
    console.log("666")
  })
});

iterator 迭代器 操作数组
高效处理数组方法（every，some）
every；全部为真则返回为真，有一个为假，则结束执行，返回false
let arr = ["hang","rui","shan"];
let status = arr.every(function(value,index,arr){  //参数值解释，value，数组值；index，数组索引；arr，原数组
    console.log(value);
    console.log(index);
    console.log(arr);
    return true;
    return false
});
对于 arr.every(),该函数返回值为布尔类型，当true时持续执行 当false时停止执行；
console.log(status);

利用every函数判断学生是否全部及格
const user = [
  {name:"aa",js:100},
  {name:"ab",js:85},
  {name:"ac",js:59},
];
const res = user.every(function(item){
  return item.js >= 60;
})
//若js大于等于60，则返回true，继续循环执行，若小于60则返回false中断遍历执行操作；

some函数；有一个为真，则停止执行返回为真，当返回值为家时，则继续执行 直到true或者数组遍历结束；
let arr = ["hang","rui","shan"];
let res = arr.some(function(value,index,arr){
    console.log(value);
    return false;
})
console.log(res);

filter函数（数组的遍历过滤操作）要的拿出来，不要的扔掉;即取出满足你条件的那一部分数据；
let arr = ["hang","rui","shan"];
let newArr = arr.filter(function(value,index,arr){
  return true;
  return false;
});//对数组进行遍历操作，返回值为原数组元素，当返回值为真时，取出原数组元素，当返回值为假时，不返回原数组元素；
console.log(newArray);

数组的映射操作
arr.map()函数//数组遍历操作 对数组进行操作，目的是返回一个新的数组
let arr = ["hang","rui","shan"];
arr.map(function(value,index,arr){
  console.log(value);
  console.log(index);
  console.log(arr);
});
let res = arr.map(function(value,index,arr){
  return 1;
});//循环三次，返回值会被res接收,res返回一个新的数组，不对原数组进行改变(值类型)
console.log(res)
-->[1,1,1];

对于引用类型？则会改变原数组（在内存地址上进行修改）

reduce方法,第一个参数 为匿名函数，
let arr = [1,2,3,4,5];
arr.reduce(function(pre,value,index,array){  
// 参数解释，对于pre，理解为上一次调用的返回值（该函数也是对数组进行遍历操作）；
// 当第一次调用时，pre为数组第1项，value值为2？默认进行了对数组的第二个元素进行提取？
// 未传递第二个参数
console.log(pre,value);
return 99;
})
//传递第二个参数（第一次调用时的前一次调用的返回值）
arr.reduce(function(pre,value,index,array){  
 //传递第二个参数
console.log(pre,value);
return 99;
}，0)
 //该函数可以用作统计数组中某个元素出现的的次数功能
 //适合用于统计功能设计

  reeduce函数举例，商品价格排序，选出最高价商品
  let cart = [
    {name:"iphone",price:12000},
    {name:"imac",price:18000},
    {name:"ipad",price:3200}
  ];

  function maxPrice(goods){
    rerurn cart.reduce(function(pre,cur){
      return pre.price > cur.price ? pre : cur;
    })
  }
  console.log(maxPrice(cart));
  
  例子;商品价格汇总
  function sum(goods){
      return goods.reduce(function(total,cur){
        return (total += cur["price"])
      },0);
  }
  console.log(sum(cart));
  例子：获取价格超过1万元的商品的名称；
  let cart = [
    {name:"iphone",price:12000},
    {name:"imac",price:18000},
    {name:"ipad",price:3200}
  ];
  function getNameByPrice(goods,price){
    return goods.reduce(function(arr,cur){
      if(cur.price > price){
        arr.push(cur);
      }
      return arr;
    },[]).map(function(item){return item.name});
  }
  console.table(getNameByPrice(cart,10000));

  数组去重例子
  let arr = [1,2,3,3,4,4,2,1];
  let newArr = arr.reduce(function(arr,cur){
    if(arr.include(cur) === false){
      arr.push(cur);
    }
    return arr;
  },[]);
  console.log(newArr);

  //数组结束
  //js新增特性
  symbol（可以让变量值永远唯一）
  1.定义symbol的第一种方式
  let hrs1 = Symbol("杭瑞山1号");
  let hrs2 = Symbol("杭瑞山2号");
  console.log(hd === edu);-->false
  console.log(hrs1.description);-->获取symbol类型变量的描述值
  2.定义symbol的第2种方式(？？？Symbol被反复使用时适用该定义方式)
  let hrs3 = Symbol.for("杭瑞山3号")；
  console.log(hrs3);-->输出：杭瑞山3号；
  let hrs = Symbol.for("杭瑞山3号")；
  console.log(hrs3 == hrs);-->true;
  console.log(Symbol.keyFor(hrs3));

  实例，使用symbol解决字符串耦合的问题
  let user1 = "李四"；
  let user2 = "李四"；
  let grade = {
    [user1]:{js:100,css:99},
    [user2]:{js:59,css:33}//中括号，用于获取变量
  };
  console.log(grade);--》只输出1个李四（被覆盖）
  可以使用symbol的方式解决

  set类型
  //set类型可用于放多个数据，但是不能放置重复的数据
  let set = new Set();
  set.add(1);
  set.add(1);
  set.add("1");
  console.log(set);
  

  set类型转换为数组；
  
  Map类型
  //可以将对象，函数，标准类型，作为键名，对象只允许字符串作为键名
  
















  


 





















 






 

































  





















  

























  





   



















  

  


  









  
  </script>


  */