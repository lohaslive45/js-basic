//--------var & const必須在console輸出之前
var name = "Tobias";
console.log(name);

const name2 = "Shown";
console.log(name2);

//--------fuction動作，可以寫在輸出之後，程式會自動先抓取fuction動作
sayName();

function sayName(){
    console.log("hello there");
}
//--------var開頭最後;結尾-----function開頭只需要{ }不用;結尾
//--------var開頭，必須優先於console輸出之前
var sayAge = function(){
    console.log("I'm 26 now");
};
sayAge();

//-----------IIFE--直接輸出不用var宣告的方法
(function(){
    console.log('heyy');
})();
//---------IIFE--或者 此變數僅使用於此function內
(function(){
    var abc = "abc";
})();

//------GLOABAL SCOPE--可替換變數，使用${變數名}
const name3 = "Andy";
const age2 = "二十六";

function sayName2(){
    console.log(`hello my dear scriber,my name is ${name3}`);
    sayAge2();
    function sayAge2(){
        console.log(`my age is ${age2}`);
    }
}
sayName2();

//------Callback, promises & async awai

async function gatData(){
    let promise = new Promise((resolve, reject) =>{
        setTimeout(() => resolve("done"),3000); //--3000ms後顯示done 
    });

    let result = await promise;
    console.log(result);
}
gatData();