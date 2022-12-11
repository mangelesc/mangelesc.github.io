const activityTable = document.querySelector('#activityTable');
const currentBalanceP = document.querySelector('#currentBalance');
const totalIncomesDiv = document.querySelector('#totalIncomes');
const totalExpensesDiv = document.querySelector('#totalExpenses');

const addIncomeAmount = document.querySelector('#incomeAmount');
const addIncomeDescript = document.querySelector('#incomeDescription');
const addIncomeButton = document.querySelector('#addIncomeModalButton');

const addExpenseAmount = document.querySelector('#expenseAmount');
const addExpenseDescript = document.querySelector('#expenseDescription');
const addExpenseButton = document.querySelector('#addExpenseModalButton');

let arrayTransactions = [];

let savingTotal = 0;

let incomesTotal = 0;
let expensesTotal = 0;

// Guardar/ Adquirir info desde Local Storage
const saveLocalStorage = () => {
    localStorage.setItem('serializedArrayTransactions', JSON.stringify(arrayTransactions));
}

const getLocalStorage = () => {
    const serializedTransactions = localStorage.getItem('serializedArrayTransactions');
    if (serializedTransactions ==  null){
    arrayTransactions = [];
    } else {
    arrayTransactions= JSON.parse(serializedTransactions);
    }
}

//Mostrar balance actual 
const showCurrentBalance = () => {
    currentBalanceP.innerHTML = "";
    savingTotal = 0;
    arrayTransactions.forEach(transaction => {
        savingTotal += parseFloat(transaction.amount);
    })
    currentBalanceP.innerHTML = savingTotal + ' €';
}

//Calcular incomes y expenses 
const calculateIncomesExpenses = () => {
    incomesTotal = 0;
    expensesTotal = 0;
    arrayTransactions.forEach(transaction => {
        let amount = parseFloat(transaction.amount);
        if (amount >= 0) {
            incomesTotal += amount;
        } else {
            expensesTotal += amount;
        }
    })
}

const showIncomes = () => {
    totalIncomesDiv.innerHTML = incomesTotal + ' €';
}

const showExpenses = () => {
    totalExpensesDiv.innerHTML = expensesTotal + ' €';
}

// Creamos la tabla para las transacciones
const createTransactionTr = () => {
    activityTable.innerHTML = '';
    //Recorro el array al revés, para luego poner usar el ined de la fila en deleteTransaction
    for(let i = 0 ; i < arrayTransactions.length; i++){
        const newExpense = document.createElement('tr');
        let newRow = `<td class="tableDescript">${arrayTransactions[i].description} </td>
                    <td class="tableAmount">${arrayTransactions[i].amount} €</td>
                    <td class="tableDelete" onclick="deleteTransaction(this)">
                        <img class="binIMG" src="imgs/bin.png" >
                    </td>`;
            if (arrayTransactions[i].amount > 0) {
                newRow += `<td class="tableColorIncome"></td>`;
            } else{
                newRow += `<td class="tableColorExpense"></td>`;   
            }            
        newExpense.innerHTML = newRow;
        activityTable.insertAdjacentHTML('afterbegin', newRow);
    }
}; 

// Llamamos a todas las funciones desde una sola
const refresh = () => {
    showCurrentBalance();
    calculateIncomesExpenses();
    showIncomes();
    showExpenses();
    createTransactionTr();
    saveLocalStorage();
}

//Añadir un ingreso al array
const addIncome = () => {
    const description = addIncomeDescript.value;
    let amount = addIncomeAmount.value;
    if (amount>0 && amount!= NaN &&description != ''){
        amount = parseFloat(amount).toFixed(2);
        arrayTransactions.push({description,amount});
        refresh();
    } else {
        displayFieldsModal();    } 
    addIncomeDescript.value = '';
    addIncomeAmount.value = '';
}

//Añadir un gasto al array
const addExpense = () => {
    const description = addExpenseDescript.value;
    let amount = addExpenseAmount.value;
    if (amount>0 && amount!= NaN &&description != ''){
        if((incomesTotal-amount) >= 0){
            amount =  parseFloat(-amount).toFixed(2);
            arrayTransactions.push({description,amount});
            refresh();
        }else {
            displayErrorModal();
        }
    } else {
        displayFieldsModal();
    } 
    addExpenseDescript.value= '';
    addExpenseAmount.value = '';
}

const displayErrorModal = () => {
    let errorModal = new bootstrap.Modal(
        document.getElementById("notAvailableTransactionModal"),
        {}
    );
    errorModal.show();
}

const displayFieldsModal = () => {
    let fieldsModal = new bootstrap.Modal(
        document.getElementById("FieldsModal"),
        {}
    );
    fieldsModal.show();
}

//Eliminar una transacción
const deleteTransaction = (row) => {
    let rowIndex = row.parentElement.rowIndex;
    let deletePosition = (arrayTransactions.length -1) - rowIndex;
    arrayTransactions.splice(deletePosition,1);
    refresh();
}

// Event listeners y funciones
getLocalStorage();
refresh();
addIncomeButton.addEventListener('click', addIncome);
addExpenseButton.addEventListener('click', addExpense);