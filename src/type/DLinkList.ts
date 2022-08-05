

class DNode {
  /**
   * 双向链表的结点，相比单向链表它有两个方向
   * @class DNode
   * @constructor
   * @param pre {DNode} 指前驱结点的指针
   * @param next {DNode} 指向后继结点的指针
   */

  pre: DNode | undefined | null;         // 指向先驱结点
  next: DNode | undefined | null;        // 指向后继结点
  data:any;                              // 数据域
  constructor(data?:any){
    if(data){
      this.data = data;
      this.pre = null;
      this.next = null;
    }else{
      this.data = null;
      this.pre = null;
      this.next = null;
    }

  }
}


class DLinkList{
  /**
   * 双链表类
   * @class DLinkList
   * @constructor
   * @param head {DNode} 头指针
   * @param length {number} 链表的长度
   */

  head: DNode | null;                           // 头指针，只指向一个结点
  private length: number;                       // 链表所容纳结点的个数

  constructor();                                // 重载：若不传参数则构造一个空链表
  constructor(datas:any[]);                     // 重载：若给定一个数组则将数组中的元素依次放在链表中构造链表
  constructor(datas?){
    this.head = new DNode();
    this.length = 0;                          // 初始化长度

    if(typeof datas == "object"){
      /**
       * 如果有给定了参数data
       */
      this.head.next = null;
      for(let i=0; i<datas.length; i++){
        this.append(datas[i])
      }
    }else{
      /**
       * 如果没有给定data参数，则构造一个空列表
       */
      this.head.next = null;
    }
  }

  is_empty():boolean{
    /**
     * 判断是否是空链表
     */
    if(this.head && this.head.next){
      return true
    }
    else{return false}
  }

  top(){
    /**
     * 查看链表头部结点（的数据）
     */
    if(this.head &&  this.head.next){
      return this.head.next.data
    }else{
      return null
    }
  }

  top_node(){
    /**
     * 查看链表头部结点
     */
    if(this.head && this.head.next){
      return this.head.next
    }else{
      return null
    }
  }

  clear():void{
    /**
     * 清空该双链表
     */
    if (this.head) {
      this.head.next = null;  // 不能去清空头指针`head`，而要清空头指针的引用结点`head.next`
    }
    this.length = 0;
  }

  append(data:any):void{
    /**
     * 在双链表右侧（尾）插入新的结点
     */
    const node = new DNode(data);               // 用数据建立新的结点
    if(this.head && this.head.next==null){                 // 如果指向空即还没有一个结点
      this.head.next = node
    }else{
      let pointer = this.head;
      /* 移动节点 */
      while(pointer && pointer.next){     // 只要结点还存在
        pointer = pointer.next            // 向后一个结点引用
      }
      node.pre = pointer;
      if (pointer) {
        pointer.next = node
      }
    }
    this.length++;
  }

  append_left(data:any):void{
    /**
     * 在双链表左测（头）插入新的结点
     */
    const node:DNode = new DNode(data);
    if (this.head) {
      if(this.head.next==null){
        this.head.next = node;
      }else{
        node.next = this.head.next;
        this.head.next.pre = node;
        this.head.next = this.head.next.pre;
      }
    }
    this.length++;
  }

  insert(index:number, data: any):void{
    /**
     * 在指定索引处插入新的结点
     */
    let pointer:DNode = this.head;
    let ct = 0;
    while(ct < index){
      pointer = pointer.next;
      ct++;
    }
    const node = new DNode(data);
    node.next = pointer.next;
    node.pre = pointer;
    pointer.next = node;
  }

  to_node_array(){
    /**
     * 将链表转换为结点数组后返回
     * 数组的元素为结点
     */
    const ar: any[] = [];
    if(this.head && this.head.next){
      let pointer = this.head;               // 复制头指针的引用
      while(pointer.next){                   // 引用非空
        ar.push(pointer.next);             // 转载被引用结点的数据
        pointer = pointer.next             // 引用后移
      }
      return ar
    }else{
      return ar
    }
  }

  to_array():any[]{
    /**
     * 将链表转换为数组后返回
     * 数组的元素为结点的数据域
     */
    const ar: any[] = [];
    if(this.head && this.head.next){
      let pointer = this.head;               // 复制头指针的引用
      while(pointer.next){                   // 引用非空
        ar.push(pointer.next.data);        // 转载被引用结点的数据
        pointer = pointer.next             // 引用后移
      }
      return ar
    }else{
      return ar
    }
  }
}

export {
  DNode,
  DLinkList
}

