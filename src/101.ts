// 迷之操作异或
/*
  1^1 = 0
  1^0 = 1
  交换律
  1^0 = 0^1
  结合律
  0^1^1 = 0^0 
  N^N = 0
  N^0 = N
*/


/*
  eg 两个数交换
  方法一   tem = a; a = b; b = tem
  方法二   a = a + b;   b = a - b; a = a - b;
  方法三   a = a^b;  b = a^b; b = a = a^b 注释：  第一句结束  a = a^ b   b= b   
  第二句结束   b = a^b^b = a^0 = a    a = a^b   第三句结束  a = a^b^a = b    b = a  类似方法二

*/

/*
  eg 一个数组中某个数字出现是奇数次其他都是偶数次 求这个数字   数组为   numbers
      let r = 0
      loop( i in  numbers)  r ^= i  也就是将所有数字异或起来，结果就是这个数字

  
  继续--->
  如果某两个数字出现了奇数次呢？ 数组为  numbers
  let r = 0

  loop( i in numbers) r ^= i    这样假设这两个数字是a， b 那么r 就是 a^b 
  let  right = r&-r        取出r的最右边的1  这也1 的意义是  a和b在这一个位不同

  let r2 = 0
  loop(i in  numbers )
    if  i & right === 0  r2 ^= i    // 思考下这个条件成立的只可能是a或者b中的1个，这样r2最终是等于其中一个值
  r2是其中一个  另一个 是 r^r2

*/

/*
  eg数一个二进制数的1的个数   数字 num
  count = 0
  while(num > 0)  right = num & -num; ++count; num ^= right;
*/

