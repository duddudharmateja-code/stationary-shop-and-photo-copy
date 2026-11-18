let total = 0;

function addToCart(name, price) {
    const item = document.createElement("li");
    item.textContent = name + " - ₹" + price;
    document.getElementById("cartItems").appendChild(item);

    total += price;
    document.getElementById("total").textContent = total;

    document.getElementById("orderMessage").textContent = "";
}

document.getElementById("printForm").addEventListener(
    "submit",
    function(event) {
        event.preventDefault();

        const name = document.getElementById("studentName").value;
        const pages = Number(document.getElementById("pages").value);
        const price = Number(document.getElementById("printType").value);

        const cost = pages * price;

        document.getElementById("printResult").textContent =
            name + ", your estimated printing cost is ₹" + cost + ".";
    }
);

function placeOrder() {
    if (total === 0) {
        document.getElementById("orderMessage").textContent =
            "Please add a product to your cart first.";
        return;
    }

    document.getElementById("orderMessage").textContent =
        "Demo order created! Total amount: ₹" + total +
        ". This is a sample order, not a real purchase.";
}