let myCallBack = function (gF, bF, Ch) {
   if(Ch.isGood){
       gF(Ch.name)
   }else{
       bF(Ch.name)
   }
};

let ftw = function (name) {
  console.log("Depending on the season,", name, "is a good guy");
};
let wtf = function (name) {
  console.log("Depending on the season,", name, "is a bad guy");
};
let app = (function () {
  const castiel = { name: "Castiel", isGood: true };
  const crowley = { name: "Crowley", isGood: false };
  //use callback function here
  myCallBack(ftw, wtf, castiel);
  myCallBack(ftw, wtf, crowley);
})();
