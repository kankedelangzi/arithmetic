
// 完全二叉树   堆

/*
  父子位置关系  父 k  子 k<<1 k<<1|1
              子 l  父 l>>1

  层关系   n层第一个元素下标  1<<n   n层最后一个元素下标 1<<(n + 1) -1  注： n+1层第一个-1
          已知下标为 n 求层  32 - Math.clz32(n)    

  路径如果将left记为0   right 记为1  那么  下标5 的元素  0101  位于第三层   从根节点 root.left.right
  代码为下标为  n       k = 32 - Math.clz32(n) 求层    然后 bit = 1<<(k - 1) 
  nood 从根节点开始
  while(nood !== null && bit > 0) {
    if(n & bit) {
      node === node.right
    } else {
      node = node.left
    }
    bit >>= 1
  }  
  node即为所查找元素 

*/ 





























