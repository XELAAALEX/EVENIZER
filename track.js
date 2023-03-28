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

const localstoragetrans = JSON.parse(localStorage.getItem("trans"));//getting the trans element from the local storage
let transactions=localStorage.getItem("trans") !== null ? localstoragetrans: [];


function loadtransactiondetails(transaction){
  const sign = transaction.amount < 0 ?"-":"+";// amount sign
  const item = document.createElement("li");
  item.classList.add(transaction.amount > 0 ? "inc":"exp")//in li if the amount is positive inc class should add else exp should br added
  item.innerHTML = `
  ${transaction.description}
  <span>${sign} ${Math.abs(transaction.amount)}</span>
  <button class = "btn-del" onclick="removetrans(${transaction.id})">X</button>`;
  trans.appendChild(item);// to show the li elements we append it in the form elements
}


//for removig the li
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
    trans.innerHTML=" ";//emptying the form
    transactions.forEach(loadtransactiondetails);//loading the details
    updateamount();
}



function addtransaction(e){
  e.preventDefault();//preventing from default submitting
  //validation
  if(description.value.trim ==""||amount.value.trim==""){
  alert("Please enter Description and the Amount");}
  else{
    //adding the transaction
  const transaction={
    id : uniqueId(),
    description : description.value,
    amount: +amount.value,
  };
  //above transaction has been pushed to the transactions array
  transactions.push(transaction);
  //calling the loadtransactiondetails function again to update the transactions in li
  loadtransactiondetails(transaction);
  description.value = "";
  amount.value = "";
  updateamount();
  updatelocalstorage();
}
}
//for id
function uniqueId() {
  return Math.floor(Math.random() * 10);
}
//eventlistener for submit button
form.addEventListener("submit",addtransaction);

//call config function whenever we load
window.addEventListener("load",()=>config());

//storing in the localstorage
function updatelocalstorage(){
  localStorage.setItem("trans",JSON.stringify(transactions));
}