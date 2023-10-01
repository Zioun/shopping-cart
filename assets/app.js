const minusBtnOne = document.getElementById("minusBtnOne");
minusBtnOne.addEventListener("click", function () {
    const inputOne = document.getElementById("inputOne").value;
    const convert = parseFloat(inputOne);
    const minus = convert - 1;
    if (convert > 1) {
        const amountOne = document.getElementById("amountOne").innerText;
        const convertAmount = parseFloat(amountOne);
        const plusAmount = convertAmount - 1219;
        document.getElementById("amountOne").innerText = plusAmount;
      document.getElementById("inputOne").value = minus;
    } else {
      document.getElementById("alertArea").style.display = "block";
      document.getElementById("alertMessege").innerText =
        "You cannot buy less than 1 product";
    }
  
    const amountOne = document.getElementById("amountOne").innerText;
    const convertOneValue = parseFloat(amountOne);
    console.log(convertOneValue);

    const amountTwo = document.getElementById("amountTwo").innerText;
    const convertTwoValue = parseFloat(amountTwo);
    console.log(convertTwoValue);

    const subTotalInput = document.getElementById("subTotal").innerText;
    const convertSubTotal = parseFloat(subTotalInput);

    const subTotal = convertOneValue + convertTwoValue;

    console.log(subTotal);

    document.getElementById("subTotal").innerText = subTotal;
    document.getElementById("total").innerText = subTotal;
    
});

const plusBtnOne = document.getElementById("plusBtnOne");
plusBtnOne.addEventListener("click", function () {
    const inputOne = document.getElementById("inputOne").value;
    const convert = parseFloat(inputOne);
    const plus = convert + 1;
    if (convert < 10) {
        const amountOne = document.getElementById("amountOne").innerText;
        const convertAmount = parseFloat(amountOne);
        const plusAmount = convertAmount + 1219;
        document.getElementById("amountOne").innerText = plusAmount;
      document.getElementById("inputOne").value = plus;  
    } else {
      document.getElementById("alertArea").style.display = "block";
      document.getElementById("alertMessege").innerText =
        "You cannot buy more than 10 products";
    }
  
    const amountOne = document.getElementById("amountOne").innerText;
    const convertOneValue = parseFloat(amountOne);
    console.log(convertOneValue);

    const amountTwo = document.getElementById("amountTwo").innerText;
    const convertTwoValue = parseFloat(amountTwo);
    console.log(convertTwoValue);

    const subTotalInput = document.getElementById("subTotal").innerText;
    const convertSubTotal = parseFloat(subTotalInput);

    const subTotal = convertOneValue + convertTwoValue;

    console.log(subTotal);

    document.getElementById("subTotal").innerText = subTotal;
    document.getElementById("total").innerText = subTotal;
    
});


// 2nd 


const minusBtnTwo = document.getElementById("minusBtnTwo");
minusBtnTwo.addEventListener("click", function () {
  const inputTwo = document.getElementById("inputTwo").value;
  const convert = parseFloat(inputTwo);
  const minus = convert - 1;
  if (convert > 1) {
    const amountTwo = document.getElementById("amountTwo").innerText;
    const convertAmount = parseFloat(amountTwo);
    const plusAmount = convertAmount - 59;
    document.getElementById("amountTwo").innerText = plusAmount;
    document.getElementById("inputTwo").value = minus;
  } else {
    document.getElementById("alertArea").style.display = "block";
    document.getElementById("alertMessege").innerText =
      "You cannot buy less than 1 product";
  }
    const amountOne = document.getElementById("amountOne").innerText;
    const convertOneValue = parseFloat(amountOne);
    console.log(convertOneValue);

    const amountTwo = document.getElementById("amountTwo").innerText;
    const convertTwoValue = parseFloat(amountTwo);
    console.log(convertTwoValue);

    const subTotalInput = document.getElementById("subTotal").innerText;
    const convertSubTotal = parseFloat(subTotalInput);

    const subTotal = convertOneValue + convertTwoValue;

    console.log(subTotal);

    document.getElementById("subTotal").innerText = subTotal;
    document.getElementById("total").innerText = subTotal;
});

const plusBtnTwo = document.getElementById("plusBtnTwo");
plusBtnTwo.addEventListener("click", function () {
  const inputTwo = document.getElementById("inputTwo").value;
  const convert = parseFloat(inputTwo);
  const plus = convert + 1;
  if (convert < 10) {
    const amountTwo = document.getElementById("amountTwo").innerText;
    const convertAmount = parseFloat(amountTwo);
    const plusAmount = convertAmount + 59;
    document.getElementById("amountTwo").innerText = plusAmount;
    document.getElementById("inputTwo").value = plus;
  } else {
    document.getElementById("alertArea").style.display = "block";
    document.getElementById("alertMessege").innerText =
      "You cannot buy more than 10 products";
  }
    const amountOne = document.getElementById("amountOne").innerText;
    const convertOneValue = parseFloat(amountOne);
    console.log(convertOneValue);

    const amountTwo = document.getElementById("amountTwo").innerText;
    const convertTwoValue = parseFloat(amountTwo);
    console.log(convertTwoValue);

    const subTotalInput = document.getElementById("subTotal").innerText;
    const convertSubTotal = parseFloat(subTotalInput);

    const subTotal = convertOneValue + convertTwoValue;

    console.log(subTotal);

    document.getElementById("subTotal").innerText = subTotal;
    document.getElementById("total").innerText = subTotal;
});



// sub total

const amountOne = document.getElementById("amountOne").innerText;
const convertOneValue = parseFloat(amountOne);

const amountTwo = document.getElementById("amountTwo").innerText;
const convertTwoValue = parseFloat(amountTwo);

const subTotalInput = document.getElementById("subTotal").innerText;
const convertSubTotal = parseFloat(subTotalInput);

const subTotal = convertOneValue + convertTwoValue;

document.getElementById("subTotal").innerText = subTotal;

document.getElementById("total").innerText = subTotal;



// alert 

document.getElementById("closeAlert").addEventListener("click", function () {
  document.getElementById("alertArea").style.display = "none";
});

// check out

document.getElementById("checkOut").addEventListener("click", function () {
  document.getElementById("successCard").style.display = "block";
});

document.getElementById("checkOut").addEventListener("click", function () {
  document.getElementById("orderCard").style.display = "none";
});


