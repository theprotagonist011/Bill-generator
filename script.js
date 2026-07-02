
const menu = [
    {
        id: 1,
        name: "Burger",
        price: 120
    },
    {
        id: 2,
        name: "Pizza",
        price: 250
    },
    {
        id: 3,
        name: "Pasta",
        price: 180
    },
    {
        id: 4,
        name: "Coffee",
        price: 80
    },
    {
        id: 5,
        name: "French Fries",
        price: 100
    },
    {
        id: 6,
        name: "Sandwich",
        price: 150
    }
];


let bill = [];


const food = document.getElementById("food");
const qty = document.getElementById("qty");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");

const billBody = document.getElementById("billBody");

const subtotal = document.getElementById("subtotal");
const gst = document.getElementById("gst");
const grandTotal = document.getElementById("grandTotal");


function loadMenu() {

    menu.forEach(item => {

        const option = document.createElement("option");

        option.value = item.id;
        option.textContent = `${item.name} - ₹${item.price}`;

        food.appendChild(option);

    });

}

loadMenu();


addBtn.addEventListener("click", () => {

    const id = Number(food.value);

    const quantity = Number(qty.value);

    if (quantity <= 0) {

        alert("Enter valid quantity");

        return;
    }

    const selectedItem = menu.find(item => item.id === id);

    bill.push({

        name: selectedItem.name,

        price: selectedItem.price,

        qty: quantity

    });

    displayBill();

});

function displayBill() {

    billBody.innerHTML = "";

    let sub = 0;

    bill.forEach((item, index) => {

        const amount = item.price * item.qty;

        sub += amount;

        billBody.innerHTML += `

        <tr>

            <td>${item.name}</td>

            <td>₹${item.price}</td>

            <td>${item.qty}</td>

            <td>₹${amount}</td>

            <td>

                <button
                    class="remove-btn"
                    onclick="removeItem(${index})">

                    Remove

                </button>

            </td>

        </tr>

        `;

    });

    subtotal.textContent = sub.toFixed(2);

    const gstAmount = sub * 0.05;

    gst.textContent = gstAmount.toFixed(2);

    grandTotal.textContent = (sub + gstAmount).toFixed(2);

}

function removeItem(index) {

    bill.splice(index, 1);

    displayBill();

}

clearBtn.addEventListener("click", () => {

    bill = [];

    displayBill();

});

displayBill();