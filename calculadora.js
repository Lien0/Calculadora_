const delAll = document.getElementById("delAll");
const delet = document.getElementById("del");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eigth = document.getElementById("eigth");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const dot = document.getElementById("dot");
const mult = document.getElementById("mult");
const divi = document.getElementById("div");
const percent = document.getElementById("percent");
const sus = document.getElementById("sust");
const add = document.getElementById("add");
const equal = document.getElementById("equal");
const scree = document.getElementById("scrcalc");
var a = 0;
var r = 0;
var p = 0;
var di = 0;
var m = 0;
var i = false;
var flagSuma = 0;
var flagResta = 0;
var flagMult = 0;
var flagDiv = 0;
var flagPor = 0;

function number1() {
  scree.insertAdjacentText("beforeend", "1");
}
function number2() {
  scree.insertAdjacentText("beforeend", "2");
}
function number3() {
  scree.insertAdjacentText("beforeend", "3");
}
function number4() {
  scree.insertAdjacentText("beforeend", "4");
}
function number5() {
  scree.insertAdjacentText("beforeend", "5");
}
function number6() {
  scree.insertAdjacentText("beforeend", "6");
}
function number7() {
  scree.insertAdjacentText("beforeend", "7");
}
function number8() {
  scree.insertAdjacentText("beforeend", "8");
}
function number9() {
  scree.insertAdjacentText("beforeend", "9");
}
function number0() {
  scree.insertAdjacentText("beforeend", "0");
}
function numberdot() {
  scree.insertAdjacentText("beforeend", ".");
}

delAll.addEventListener("click", deleteAll);
one.addEventListener("click", number1);
two.addEventListener("click", number2);
three.addEventListener("click", number3);
four.addEventListener("click", number4);
five.addEventListener("click", number5);
six.addEventListener("click", number6);
seven.addEventListener("click", number7);
eigth.addEventListener("click", number8);
nine.addEventListener("click", number9);
zero.addEventListener("click", number0);
dot.addEventListener("click", numberdot);

equal.addEventListener("click", () => {
  i = true;
  if (a >= 2) {
    let b = toString(flagSuma);
    document.getElementById("scrcalc").innerHTML = b;
  }
});

function adicion() {
  a++;
  if (a == 1) {
    let b = document.getElementById("scrcalc");
    flagSuma = parseInt(b.value);
    document.getElementById("scrcalc").innerHTML = "";
  }
  if (a >= 2) {
    let b = document.getElementById("scrcalc");
    let c = parseInt(b.value);
    let d = flagSuma + c;
    flagSuma = d;
    document.getElementById("scrcalc").innerHTML = "";
  }
}

function sustraccion() {
  r++;
  if (r == 1) {
    let b = document.getElementById("scrcalc");
    flagResta = parseInt(b.value);
    document.getElementById("scrcalc").innerHTML = "";
  }
  if (r >= 2) {
    let b = document.getElementById("scrcalc");
    let c = parseInt(b.value);
    let d = flagResta - c;
    flagResta = d;
    document.getElementById("scrcalc").innerHTML = "";
  }
}

function multiplicacion() {
  m++;
  if (m == 1) {
    let b = document.getElementById("scrcalc");
    flagMult = parseInt(b.value);
    document.getElementById("scrcalc").innerHTML = "";
  }
  if (m >= 2) {
    let b = document.getElementById("scrcalc");
    let c = parseInt(b.value);
    let d = flagMult * c;
    flagMult = d;
    document.getElementById("scrcalc").innerHTML = "";
  }
}

function division() {
  di++;
  if (di == 1) {
    let b = document.getElementById("scrcalc");
    flagDiv = parseInt(b.value);
    document.getElementById("scrcalc").innerHTML = "";
  }
  if (di >= 2) {
    let b = document.getElementById("scrcalc");
    let c = parseInt(b.value);
    let d = flagDiv / c;
    flagDiv = d;
    document.getElementById("scrcalc").innerHTML = "";
  }
}

function porcentaje() {
  p++;
  if (p == 1) {
    let b = document.getElementById("scrcalc");
    flagPor = parseInt(b.value);
    document.getElementById("scrcalc").innerHTML = "";
  }
  if (p >= 2) {
    let b = document.getElementById("scrcalc");
    let c = parseInt(b.value);
    let d = (flagPor * c) / 100;
    flagPor = d;
    document.getElementById("scrcalc").innerHTML = "";
  }
}

function igual() {
  if (a >= 2) {
    document.getElementById("scrcalc").innerHTML = flagSuma;
    flagSuma = 0;
    a = 0;
  }
  if (r >= 2) {
    document.getElementById("scrcalc").innerHTML = flagResta;
    flagResta = 0;
    r = 0;
  }
  if (m >= 2) {
    document.getElementById("scrcalc").innerHTML = flagMult;
    flagMult = 0;
    m = 0;
  }
  if (di >= 2) {
    document.getElementById("scrcalc").innerHTML = flagDiv;
    flagDiv = 0;
    di = 0;
  }
  if (p >= 2) {
    document.getElementById("scrcalc").innerHTML = flagPor + "%";
    flagPor = 0;
    p = 0;
  }
}

add.addEventListener("click", adicion);
sus.addEventListener("click", sustraccion);
divi.addEventListener("click", division);
mult.addEventListener("click", multiplicacion);
percent.addEventListener("click", porcentaje);

equal.addEventListener("click", igual);

function deleteAll() {
  document.getElementById("scrcalc").innerHTML = "";
  flagSuma = 0;
  a = 0;
}
