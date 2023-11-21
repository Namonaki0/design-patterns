//? OBJECT POOL PATTERN
// Object Pool
function ObjectPool(maxSize) {
  this.maxSize = maxSize || 10;
  this.pool = [];
}

ObjectPool.prototype.create = function () {
  return {
    // You can replace this with your object creation logic
    used: false,
    data: null,
  };
};

ObjectPool.prototype.acquire = function () {
  if (this.pool.length > 0) {
    return this.pool.pop();
  } else if (this.pool.length < this.maxSize) {
    return this.create();
  } else {
    console.log("Pool limit reached. Cannot create more objects.");
    return null;
  }
};

ObjectPool.prototype.release = function (obj) {
  if (obj.used) {
    obj.used = false;
    obj.data = null;
    this.pool.push(obj);
  }
};

// Example usage
var myObjectPool = new ObjectPool(5);

// Acquire objects from the pool
var obj1 = myObjectPool.acquire();
var obj2 = myObjectPool.acquire();
var obj3 = myObjectPool.acquire();

// Use the acquired objects
obj1.data = "Object 1 Data";
obj2.data = "Object 2 Data";
obj3.data = "Object 3 Data";

// Release the objects back to the pool when done
myObjectPool.release(obj1);
myObjectPool.release(obj2);
myObjectPool.release(obj3);

// Acquire more objects
var obj4 = myObjectPool.acquire();
var obj5 = myObjectPool.acquire();

console.log(obj4.data); // null, as it's a newly acquired object
console.log(obj5.data); // null, as it's a newly acquired object

// Release objects again
myObjectPool.release(obj4);
myObjectPool.release(obj5);
