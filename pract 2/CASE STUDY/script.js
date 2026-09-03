function calculateBill(){

    var customerName = document.getElementById("customerName").value;

    if(customerName.trim() === ""){
        alert("Please enter your name.");
        return;
    }

    let isMember = true;

    const laptopPrice = 50000;
    const mobilePrice = 20000;
    const headphonePrice = 2000;

 

    let lapQty = Number(document.getElementById("lapQty").value);
    let mobQty = Number(document.getElementById("mobQty").value);
    let headQty = Number(document.getElementById("headQty").value);

  

    let subtotal =
        (lapQty * laptopPrice) +
        (mobQty * mobilePrice) +
        (headQty * headphonePrice);

    let discount = 0;

    if(isMember){
        discount = subtotal * 0.10;
    }

    let total = subtotal - discount;


    let num = 100;
    let text = "200";

    let coercion = num + text;             
    let conversion = num + Number(text);    



    document.getElementById("customer").innerHTML =
    "<b>Customer Name (String using var):</b> " + customerName;

    document.getElementById("membership").innerHTML =
    "<b>Premium Member (Boolean using let):</b> " + isMember;

    document.getElementById("items").innerHTML =
    "<b>Items Purchased (Number):</b><br><br>" +
    "Laptop : " + lapQty + "<br>" +
    "Mobile : " + mobQty + "<br>" +
    "Headphones : " + headQty;

    document.getElementById("total").innerHTML =
    "<hr>" +
    "<b>Subtotal :</b> ₹" + subtotal + "<br>" +
    "<b>Discount (10%) :</b> ₹" + discount + "<br>" +
    "<b>Final Bill :</b> ₹" + total + "<br><br>" +

    "<b>Type Coercion</b><br>" +
    "100 + '200' = " + coercion + "<br><br>" +

    "<b>Type Conversion</b><br>" +
    "100 + Number('200') = " + conversion;
}