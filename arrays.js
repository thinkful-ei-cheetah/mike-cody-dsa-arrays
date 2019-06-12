const memory = require('./memory');
const Memory = new memory();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = Memory.allocate(this.length);
  }

  push(value) {
    // if the length is greater than the capacity,
    // resize according to the size ratio
    if (this.length >= this._capacity) {
      // resize the array clearing the space for new item
      // each time you go over the capacity, 
      // triple the size of allocated memory
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    // set the memory at pointer plus length to equal value
    Memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = Memory.allocate(size);
    // if the pointer is null
    // throw an error message
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    // copy memory (to the new pointer, from the previous pointer,
    // of the size of capacity
    Memory.copy(this.ptr, oldPtr, this.length);
    // frees the previous pointer's memory using allocate
    Memory.free(oldPtr);
    // set the new capacity equal to the size
    this._capacity = size;
  }

  get(index) {
    // if the index is less than 0 'or' index is greater and equal to
    // the length than throw an error
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    // returns the value of pointer plus index
    return Memory.get(this.ptr + index);
  }

  pop() {
    if (this.length === 0) {
      throw new Error('Index error');
    }
    const value = Memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    Memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    Memory.set(this.ptr + index, value);
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    Memory.copy(
      this.ptr + index,
      this.ptr + index + 1,
      this.length - index - 1
    );
    this.length--;
  }
}

function main() {
  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3); // length: 1, capacity: 3, ptr: 0
  arr.push(5); // length: 2, capacity: 3, ptr: 0
  arr.push(15); // length: 3, capacity: 3, ptr: 0
  arr.push(19); // length: 4, capacity: 12, ptr: 3
  arr.push(45); // length: 5, capacity: 12, ptr: 3
  arr.push(10); // length: 6, capacity: 12, ptr: 3
  // when the array length reached the initial capacity of 3,
  // capacity is increased by tripe ((3 + 1) * 3), pointer position
  // is moved to 3
  arr.pop(); // length: 5, capacity: 12, ptr: 3
  arr.pop(); // length: 4, capacity: 12, ptr: 3
  arr.pop(); // length: 3, capacity: 12, ptr: 3
  // three items were removed from the end of the array
  // resulting in new length of 3, but the capacity and ptr stays the
  // same, as array was not resized or relocated
  arr.pop();
  arr.pop();
  arr.pop();
  arr.push('tauhida');
  // this returns NaN because our Memory class only accepts 
  // arrays of numbers, (Float64Array)
  console.log(arr.get(0));
  
}
console.log(main());