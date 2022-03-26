const countEl = document.getElementById('count-el');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const saveBtn = document.getElementById('save-btn');
const resetBtn = document.getElementById('reset-btn')
const peopleCounted = document.getElementById('people-count');
let count = 0;

console.log(count);

incrementBtn.addEventListener('click', increment);

decrementBtn.addEventListener('click', decrement);

resetBtn.addEventListener('click', reset);

saveBtn.addEventListener('click', save)

function increment(){
   count += 1;

   countEl.textContent = count;
}

function save(){
   let entryCount = `${count} -`
   peopleCounted.textContent += entryCount;
   countEl.textContent = 0;
   count = 0
}

function decrement(){
  if(count <= 0){
     countEl.textContent = 0;
  }else{
     count = count - 1;

     countEl.textContent = count;
  }
}

function reset(){
  count = 0;
  countEl.textContent = count;
  peopleCounted.textContent = count;
}


