const balance = document.querySelector("#balance");
const inc_amt = document.querySelector("#inc-amt");
const exp_amt = document.querySelector("#exp-amt");
const trans = document.querySelector("#trans");
const form = document.querySelector("#form");
const description = document.querySelector("#desc");
const amount = document.querySelector("#amount");


// const dummy = [
//   { id: 1, description: "Flower", amount: -20 },
//   { id: 2, description: "Salary", amount: 35000 },
//   { id: 3, description: "Book", amount: 10 },
//   { id: 4, description: "Camera", amount: -150 },
//   { id: 5, description: "Petrol", amount: -250 },
// ];

// let transactions = dummy;

const localstoragetrans = JSON.parse(localStorage.getItem("trans"));
let transactions=localStorage.getItem("trans") !== null ? localstoragetrans: [];


function loadtransactiondetails(transaction){
  const sign = transaction.amount < 0 ?"-":"+";
  const item = document.createElement("li");
  item.classList.add(transaction.amount > 0 ? "inc":"exp")
  item.innerHTML = `
  ${transaction.description}
  <span>${sign} ${Math.abs(transaction.amount)}</span>
  <button class = "btn-del" onclick="removetrans(${transaction.id})">X</button>`;
  trans.appendChild(item);
}
function removetrans(id){
  if(confirm("Are you sure you want to delete?"))
  {
    transactions = transactions.filter((transaction) =>
      transaction.id != id);
      config();
      updatelocalstorage();
  }
  else{
    return;
  }
}
function updateamount(){
const amounts = transactions.map((transaction)=>transaction.amount);
const total = amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);
balance.innerHTML = `₹ ${total}`;

const income = amounts
  .filter((item)=>item>0)
  .reduce((acc,item)=>(acc+=item),0);
  inc_amt.innerHTML = `₹ ${income}`;

const expense = amounts
  .filter((item)=>item<0).
  reduce((acc,item)=>(acc+=item),0);
  exp_amt.innerHTML = `₹ ${Math.abs(expense)}`;
}
function config(){
    trans.innerHTML=" ";
    transactions.forEach(loadtransactiondetails);
    updateamount();
}
function addtransaction(e){
  e.preventDefault();
  if(description.value.trim ==""||amount.value.trim==""){
  alert("Please enter Description and the Amount");}
  else{
  const transaction={
    id : uniqueId(),
    description : description.value,
    amount: +amount.value,
  };
  transactions.push(transaction);
  loadtransactiondetails(transaction);
  description.value = "";
  amount.value = "";
  updateamount();
  updatelocalstorage();
}
}
function uniqueId() {
  return Math.floor(Math.random() * 10);
}
form.addEventListener("submit",addtransaction);

window.addEventListener("load",()=>config());

function updatelocalstorage(){
  localStorage.setItem("trans",JSON.stringify(transactions));
}