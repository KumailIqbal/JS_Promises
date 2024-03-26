const cart= ["jeans", "t-shirt", "pants", "shoes"];

createOrder(cart)
.then(function(orderId){
    console.log(orderId);
    return orderId;
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
    return paymentInfo;
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo);
})
.then(function(summaryDeatil){
    console.log(summaryDeatil);
    return summaryDeatil;
})
.then(function(summaryDeatil){
    return updateWallet(summaryDeatil);
})
.then(function(walletInfo){
    console.log(walletInfo);
})
.catch(function(err){
    console.log(err.message);
})

function createOrder(cart){
    return new Promise(function(resolve,reject){
        if(!validateCart(cart)){
            const err = new Error("Cart is not validated");
            reject(err);
        }
        const orderId='12345';
        if(orderId){
            setTimeout(function() {
                resolve(orderId);
            }, 3000);
        }
    })
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment Successfull");
    })
}

function showOrderSummary(paymentInfo){
    return new Promise(function(resolve,reject){
        resolve("Order has been placed successfully!");
    })
}

function updateWallet(summaryDeatil){
    return new Promise(function(resolve,reject){
        resolve("Wallet Amount : 459");
    })
}

function validateCart(cart){
    return true;
}