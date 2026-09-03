const taxRate = 0.18;

const formatCurrency = (amount) => `₹${amount.toFixed(2)}`;

document.getElementById("billingForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const customerName = document.getElementById("customerName").value.trim();
    const itemName = document.getElementById("itemName").value.trim();
    const price = Number(document.getElementById("price").value);
    const quantity = Number(document.getElementById("quantity").value);
    const formMessage = document.getElementById("formMessage");

    if (!customerName || !itemName || price < 0 || quantity < 1 || !Number.isFinite(price) || !Number.isInteger(quantity)) {
        formMessage.textContent = "Enter a valid customer, item, price, and whole-number quantity.";
        return;
    }

    formMessage.textContent = "";
    const subtotal = price * quantity;
    const gst = subtotal * taxRate;
    const total = subtotal + gst;
    const bill = { customerName, itemName, price, quantity, subtotal, gst, total };
    const { customerName: billedTo, itemName: item, subtotal: billSubtotal, gst: billGst, total: billTotal } = bill;

    document.getElementById("receipt").innerHTML = `
        <div class="receipt-top"><div><span class="receipt-label">Billed to</span><strong>${billedTo}</strong></div><span class="paid-tag">Ready</span></div>
        <div class="receipt-line"><span>${item} × ${quantity}</span><span>${formatCurrency(price * quantity)}</span></div>
        <div class="receipt-line muted"><span>Subtotal</span><span>${formatCurrency(billSubtotal)}</span></div>
        <div class="receipt-line muted"><span>GST (18%)</span><span>${formatCurrency(billGst)}</span></div>
        <div class="receipt-total"><span>Total payable</span><strong>${formatCurrency(billTotal)}</strong></div>`;
});