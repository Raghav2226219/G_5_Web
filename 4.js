var cart = ["Shoes", "Shirts", "Watches", "Wallets", "Belts"]

function createOrder(cb,cart){
    console.log("Making order" + cart);
    let order = "OrderId: " + (Math.ceil(Math.random() * 10000));
    console.log("CREATING ORDER: ", order);
    setTimeout(cb, 5000);
}

function placeOrder(){

}

function orderPayment(){}

function status(){}

createOrder();