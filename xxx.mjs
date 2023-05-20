// 引入 json-bigint 模块
import JSONbig from "json-bigint";

// 要处理的包含大整数的 JSON 字符串
const jsonString = '{"value": 123456789012345678901234567890,"user":"kkk"}';

// 将 JSON 字符串解析为包含大整数的 JavaScript 对象
const jsonObject = JSONbig.parse(jsonString);
console.log(jsonObject.user);
// 访问大整数值
const bigIntValue = jsonObject.value;

// 进行计算操作
const sum = bigIntValue.plus(1);
const product = bigIntValue.times(2);

// 将结果转换回字符串
const sumString = sum.toString();
const productString = product.toString();

// // 输出结果
// console.log(sumString); // '123456789012345678901234567891'
// console.log(productString); // '246913578024691357802469135780'
