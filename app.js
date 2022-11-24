//Barnabé Pilliaudin B1-B
//selecting the mount point
const app = document.querySelector("#app");

//creating usefull variables

const FPS = 20;
let totalIncome = 0;
let totalOutcome = 0;
let balance = 0;
let line = 0;

//creating the table, tr, td, for the top zone
const topTable = document.createElement("table");
topTable.classList.add("w-screen");
app.appendChild(topTable);

const row1 = document.createElement("tr");
topTable.appendChild(row1);

const row2 = document.createElement("tr");
topTable.appendChild(row2);

const tdTop1 = document.createElement("td");
tdTop1.classList.add("w-1/4");
row1.appendChild(tdTop1);

const tdBottom1 = document.createElement("td");
tdBottom1.classList.add("w-1/4");
row2.appendChild(tdBottom1);

const tdTop2 = document.createElement("td");
tdTop2.classList.add("w-1/4");
row1.appendChild(tdTop2);

const tdBottom2 = document.createElement("td");
tdBottom2.classList.add("w-1/4");
row2.appendChild(tdBottom2);

const tdTop3 = document.createElement("td");
tdTop3.classList.add("w-1/4");
row1.appendChild(tdTop3);

const tdBottom3 = document.createElement("td");
tdBottom3.classList.add("w-1/4");
row2.appendChild(tdBottom3);

const tdTop4 = document.createElement("td");
tdTop4.classList.add("w-1/4");
row1.appendChild(tdTop4);

const tdBottom4 = document.createElement("td");
tdBottom4.classList.add("w-1/4");
row2.appendChild(tdBottom4);

//Creating the Income and outcome buttons functions

const incomeFunction = () => {
  mainTbody.removeChild(lastRow);
  line -= 1;
  const incomeValue = parseFloat(amountInput.value);
  //checking if inputs are corects
  if (isNaN(incomeValue) || incomeValue <= 0) {
    alert("Please enter a number greater than 0!");
    mainTbody.appendChild(lastRow);
    line += 1;
    return;
  }
  if (descInput.value === "") {
    alert("Please enter a description");
    mainTbody.appendChild(lastRow);
    line += 1;
    return;
  }
  const cleanIncomeValue = new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "EUR",
  }).format(incomeValue);
  totalIncome += incomeValue;
  balance += incomeValue;
  const tr = document.createElement("tr");
  mainTbody.appendChild(tr);
  const incomeTd = document.createElement("td");
  incomeTd.classList.add("border-r", "border-slate-200");
  tr.appendChild(incomeTd);
  const outcomeTd = document.createElement("td");
  tr.appendChild(outcomeTd);
  const inputTime = new Date();
  const cleanInputTime = new Intl.DateTimeFormat("en", {
    year: "numeric",
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h24",
    timeZoneName: "short",
  }).format(inputTime);
  const dateDisplay = document.createElement("h2");
  dateDisplay.textContent = cleanInputTime;
  dateDisplay.classList.add("text-right", "text-slate-400", "mr-3");
  incomeTd.appendChild(dateDisplay);
  const incomeH2 = document.createElement("h2");
  incomeH2.textContent = `${cleanIncomeValue}`;
  incomeH2.classList.add("font-bold", "ml-3");
  incomeTd.appendChild(incomeH2);
  const descH2 = document.createElement("h2");
  descH2.textContent = `${descInput.value}`;
  descH2.classList.add("ml-3");
  incomeTd.appendChild(descH2);
  if (line % 2 === 1) {
    tr.classList.add("bg-slate-100", "border", "border-slate-200");
  }
  tr.classList.add("text-green-700");
  line += 1;
  mainTbody.appendChild(lastRow);
  line += 1;
};

const OutcomeFunction = () => {
  mainTbody.removeChild(lastRow);
  line -= 1;
  const outcomeValue = parseFloat(amountInput.value);
  //checking if inputs are corects
  if (isNaN(outcomeValue) || outcomeValue <= 0) {
    alert("Please enter a number");
    mainTbody.appendChild(lastRow);
    line += 1;
    return;
  }
  if (descInput.value === "") {
    alert("Please enter a description");
    mainTbody.appendChild(lastRow);
    line += 1;
    return;
  }
  const cleanOutcomeValue = new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "EUR",
  }).format(outcomeValue);
  totalOutcome += outcomeValue;
  balance -= outcomeValue;
  const tr = document.createElement("tr");
  mainTbody.appendChild(tr);
  const incomeTd = document.createElement("td");
  incomeTd.classList.add("border-r", "border-slate-200");
  tr.appendChild(incomeTd);
  const outcomeTd = document.createElement("td");
  tr.appendChild(outcomeTd);
  const inputTime = new Date();
  const cleanInputTime = new Intl.DateTimeFormat("en", {
    year: "numeric",
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h24",
    timeZoneName: "short",
  }).format(inputTime);
  const dateDisplay = document.createElement("h2");
  dateDisplay.textContent = cleanInputTime;
  dateDisplay.classList.add("text-right", "text-slate-400", "mr-3");
  outcomeTd.appendChild(dateDisplay);
  const outcomeH2 = document.createElement("h2");
  outcomeH2.textContent = `-${cleanOutcomeValue}`;
  outcomeH2.classList.add("font-bold", "ml-3");
  outcomeTd.appendChild(outcomeH2);
  const descH2 = document.createElement("h2");
  descH2.textContent = `${descInput.value}`;
  descH2.classList.add("ml-3");
  outcomeTd.appendChild(descH2);
  if (line % 2 === 1) {
    tr.classList.add("bg-slate-100", "border", "border-slate-200");
  }
  tr.classList.add("text-red-700");
  line += 1;
  mainTbody.appendChild(lastRow);
  line += 1;
};

// Creating the inputs, the buttons, and the titles ont the top

const amountTitle = document.createElement("h2");
amountTitle.textContent = "Amount";
amountTitle.classList.add("font-bold", "text-center", "p-2");
tdTop1.appendChild(amountTitle);

const amountInput = document.createElement("input");
amountInput.type = "number";
amountInput.placeholder = "0";
amountInput.classList.add("border-slate-300", "border-2", "mx-[33%]", "test");
tdBottom1.appendChild(amountInput);

const descTitle = document.createElement("h2");
descTitle.textContent = "Description";
descTitle.classList.add("font-bold", "text-center", "p-2");
tdTop2.append(descTitle);

const descInput = document.createElement("input");
descInput.type = "text";
descInput.placeholder = "A short description";
descInput.classList.add("border-slate-300", "border-2", "mx-[33%]");
tdBottom2.appendChild(descInput);

const emptyTxt = document.createElement("h2");
emptyTxt.textContent = " ";
tdTop3.appendChild(emptyTxt);
tdTop4.appendChild(emptyTxt);

const incomeInput = document.createElement("button");
incomeInput.textContent = "Income";
incomeInput.classList.add("bg-blue-600", "font-bold", "p-1", "mx-[33%]");
incomeInput.addEventListener("click", incomeFunction);
tdBottom3.appendChild(incomeInput);

const outcomeInput = document.createElement("button");
outcomeInput.textContent = "Outcome";
outcomeInput.classList.add("bg-red-600", "font-bold", "p-1", "mx-[33%]");
outcomeInput.addEventListener("click", OutcomeFunction);
tdBottom4.appendChild(outcomeInput);

//Creating the main table

const mainTable = document.createElement("table");
mainTable.classList.add("w-screen", "my-5", "border-collapse");
app.appendChild(mainTable);

const mainThead = document.createElement("thead");
mainTable.appendChild(mainThead);

const mainTd1 = document.createElement("td");
mainTd1.classList.add(
  "bg-slate-400",
  "w-1/2",
  "text-center",
  "border-r",
  "border-slate-300"
);
mainThead.appendChild(mainTd1);

const mainTd2 = document.createElement("td");
mainTd2.classList.add("bg-slate-400", "w-1/2", "text-center");
mainThead.appendChild(mainTd2);

const mainTbody = document.createElement("tbody");
mainTable.appendChild(mainTbody);

const mainIncomeTitile = document.createElement("h2");
mainIncomeTitile.textContent = "INCOME";
mainIncomeTitile.classList.add("font-bold", "p-4");
mainTd1.appendChild(mainIncomeTitile);

const mainOutcomeTitle = document.createElement("h2");
mainOutcomeTitle.textContent = "OUTCOME";
mainOutcomeTitle.classList.add("font-bold", "p-4");
mainTd2.appendChild(mainOutcomeTitle);

// creating the last row of the main table with total incomes and total

const lastRow = document.createElement("tr");
mainTbody.appendChild(lastRow);
line += 1;
const tdTotalIncome = document.createElement("td");
tdTotalIncome.classList.add("border", "border-slate-200");
lastRow.appendChild(tdTotalIncome);
const tdTotalOutcome = document.createElement("td");
tdTotalOutcome.classList.add("border", "border-slate-200");
lastRow.appendChild(tdTotalOutcome);

const totalIncomeTitle = document.createElement("h2");
totalIncomeTitle.textContent = "TOTAL INCOME";
totalIncomeTitle.classList.add("text-green-700", "pl-2", "bg-slate-100");
tdTotalIncome.appendChild(totalIncomeTitle);

const totalIncomeDisplay = document.createElement("h2");
totalIncomeDisplay.classList.add(
  "text-green-700",
  "pl-2",
  "font-bold",
  "bg-slate-100"
);
totalIncomeDisplay.textContent = `€${totalIncome}`;
tdTotalIncome.appendChild(totalIncomeDisplay);

const totalOutcomeTitle = document.createElement("h2");
totalOutcomeTitle.textContent = "TOTAL OUTCOME";
totalOutcomeTitle.classList.add("text-red-700", "pl-2", "bg-slate-100");
tdTotalOutcome.appendChild(totalOutcomeTitle);

const totalOutcomeDisplay = document.createElement("h2");
totalOutcomeDisplay.classList.add(
  "text-red-700",
  "pl-2",
  "font-bold",
  "bg-slate-100"
);
totalOutcomeDisplay.textContent = `-€${totalOutcome}`;
tdTotalOutcome.appendChild(totalOutcomeDisplay);

const balanceTitle = document.createElement("h2");
balanceTitle.textContent = "BALANCE";
balanceTitle.classList.add("text-center", "font-bold", "text-slate-500");
app.appendChild(balanceTitle);

const balanceDisplayer = document.createElement("h2");
balanceDisplayer.textContent = `€${balance}`;
balanceDisplayer.classList.add("text-center", "font-bold");
app.appendChild(balanceDisplayer);

const updateview = () => {
  const cleanTotalIncome = new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "EUR",
  }).format(totalIncome);
  const cleanTotalOutcome = new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "EUR",
  }).format(totalOutcome);
  const cleanBalance = new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "EUR",
  }).format(balance);
  balanceDisplayer.textContent = `${cleanBalance}`;
  totalIncomeDisplay.textContent = `${cleanTotalIncome}`;
  totalOutcomeDisplay.textContent = `-${cleanTotalOutcome}`;
  setTimeout(updateview, 1000 / FPS);
};
updateview();
