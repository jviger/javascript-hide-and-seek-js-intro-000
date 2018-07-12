
function getFirstSelector(selector){
  
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target')
  
}

function increaseRankBy(n){
 const lis = document.querySelectorAll('ul.ranked-list li');
 for (let i=0; i< lis.length; i++){
   lis[i].value = i + n + 1;
   console.log(lis[i].value);
 }

}

function deepestChild(){
 const bod = document.getElementById('grand-node').querySelectorAll('div');
 return bod[bod.length - 1];
  
  
}