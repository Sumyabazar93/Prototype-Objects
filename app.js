/*
var p1 = {
    name: "Boldoo",
    job: "Software-engineer",
    info: function (){
        console.log(this.name + " nertei hun " + this.job + " mergjiltei");
    }
};
p1.info();

var p2 = {};

p2.name = "Saraa";
p2.job = "Accounter";
p2.info = function () {
    console.log(this.name + " nertei hun " + this.job + " mergjiltei");
};
p2.info();

String.prototype.sainuu = function() {
    console.log("Uduriin mend");
}

console.log("123".sainuu());
*/

var materi = {name: "bodis"};
materi.haragdah = function() {
    console.log(this.name + " materi haragdlaa");
};

var amitan = Object.create(materi);
amitan.name = 'amitan';

amitan.hoolloh = function () {
    console.log(this.name + " amitan hoolloo");
}
amitan.hudul = function () {
    console.log(this.name + " amitan hudululuu");
}

var hun = Object.create(amitan);
hun.name = "Hun";

hun.tushaalAvah = function(tushaal) {
    console.log(this.name + " hun " + tushaal + " tushaal avlaa");
}

var tsereg = Object.create(hun);
tsereg.name = "Boldoo";

tsereg.baildah = function () {
    console.log("Baildlaa.");
}

var tagnuul = Object.create(hun);
tagnuul.name = "Saraa";
// console.log(tsereg.__proto__.__proto__.__proto__);

tsereg.haragdah();
tsereg.hoolloh();
tsereg.hudul();
tsereg.tushaalAvah("Davsh!");
tsereg.baildah();

tagnuul.tushaalAvah("China ruu tagna...");