"use strict";
var $__30,
    $__31;
var a = [1, 2, 3, 4];
var $__4 = true;
var $__5 = false;
var $__6 = undefined;
try {
  for (var $__2 = void 0,
      $__1 = (a)[Symbol.iterator](); !($__4 = ($__2 = $__1.next()).done); $__4 = true) {
    var value = $__2.value;
    {
      console.log(value);
    }
  }
} catch ($__7) {
  $__5 = true;
  $__6 = $__7;
} finally {
  try {
    if (!$__4 && $__1.return != null) {
      $__1.return();
    }
  } finally {
    if ($__5) {
      throw $__6;
    }
  }
}
var $__11 = true;
var $__12 = false;
var $__13 = undefined;
try {
  for (var $__9 = void 0,
      $__8 = ("fj")[Symbol.iterator](); !($__11 = ($__9 = $__8.next()).done); $__11 = true) {
    var value = $__9.value;
    {
      console.log(value);
    }
  }
} catch ($__14) {
  $__12 = true;
  $__13 = $__14;
} finally {
  try {
    if (!$__11 && $__8.return != null) {
      $__8.return();
    }
  } finally {
    if ($__12) {
      throw $__13;
    }
  }
}
var words = ["ad", "ad", "cd"];
var uniqWords = new Set(words);
var $__18 = true;
var $__19 = false;
var $__20 = undefined;
try {
  for (var $__16 = void 0,
      $__15 = (uniqWords)[Symbol.iterator](); !($__18 = ($__16 = $__15.next()).done); $__18 = true) {
    var word = $__16.value;
    {
      console.log(word);
    }
  }
} catch ($__21) {
  $__19 = true;
  $__20 = $__21;
} finally {
  try {
    if (!$__18 && $__15.return != null) {
      $__15.return();
    }
  } finally {
    if ($__19) {
      throw $__20;
    }
  }
}
var map = new Map();
map.set("a", 1);
map.set("b", 2);
var $__25 = true;
var $__26 = false;
var $__27 = undefined;
try {
  for (var $__23 = void 0,
      $__22 = (map)[Symbol.iterator](); !($__25 = ($__23 = $__22.next()).done); $__25 = true) {
    var $__29 = $__23.value,
        key = ($__30 = $__29[Symbol.iterator](), ($__31 = $__30.next()).done ? void 0 : $__31.value),
        value = ($__31 = $__30.next()).done ? void 0 : $__31.value;
    {
      console.log(key + "," + value);
    }
  }
} catch ($__28) {
  $__26 = true;
  $__27 = $__28;
} finally {
  try {
    if (!$__25 && $__22.return != null) {
      $__22.return();
    }
  } finally {
    if ($__26) {
      throw $__27;
    }
  }
}
var object = {
  a: 1,
  b: 2
};
for (var value in object) {
  console.log("in" + object[value]);
}
document.getElementsByTagName("p")[0].innerHTML = "haha";
document.getElementById("t1").innerHTML = "hehe";
document.getElementsByClassName("tt")[0].innerHTML = "tt";
document.getElementsByName("title")[0].innerHTML = "title";
