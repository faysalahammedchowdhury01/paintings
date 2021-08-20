// select elements
const art = document.getElementById('art');
const descField = document.getElementById('desc');
const priceField = document.getElementById('price');
const freeShippingBtn = document.getElementById('free-shipping-btn');
const expressShippingBtn = document.getElementById('express-shipping-btn');
const freeShippingPriceField = document.getElementById('free-shipping-price');
const expressShippingPriceField = document.getElementById(
  'express-shipping-price'
);
const shippingChargeField = document.getElementById('shipping-charge');
const totalField = document.getElementById('total');
const tab1Btn = document.getElementById('first');
const tab2Btn = document.getElementById('second');
const tab3Btn = document.getElementById('third');

// price
const freeShippingCharge = 0;
const expressShippingCharge = 30;
let shippingCost = freeShippingCharge;

// tab contents
const tab1Contents = {
  imageUrl: 'images/1.jpg',
  desc: 'First - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque?',
  price: 600,
};
const tab2Contents = {
  imageUrl: 'images/2.jpg',
  desc: 'Second - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque?',
  price: 550,
};
const tab3Contents = {
  imageUrl: 'images/3.jpg',
  desc: 'Third - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque?',
  price: 400,
};
let selectedTabs = {};

// functions
function changeTabs(tab) {
  art.src = tab.imageUrl;
  descField.innerText = tab.desc;
  priceField.innerText = tab.price;
}

function selected(item) {
  const parent = item.parentNode;
  const selectedElements = parent.getElementsByClassName('selected');
  for (const selected of selectedElements) {
    selected.classList.remove('selected');
  }
  item.classList.add('selected');
}

function updateBalance(price, shippingCost) {
  const total = price + shippingCost;
  shippingChargeField.innerText = shippingCost;
  totalField.innerText = total;
}

// event listeners
tab1Btn.addEventListener('click', function () {
  changeTabs(tab1Contents);
  selected(tab1Btn);
  selectedTabs = tab1Contents;
  updateBalance(selectedTabs.price, shippingCost);
});
tab2Btn.addEventListener('click', function () {
  changeTabs(tab2Contents);
  selected(tab2Btn);
  selectedTabs = tab2Contents;
  updateBalance(selectedTabs.price, shippingCost);
});
tab3Btn.addEventListener('click', function () {
  changeTabs(tab3Contents);
  selected(tab3Btn);
  selectedTabs = tab3Contents;
  updateBalance(selectedTabs.price, shippingCost);
});

freeShippingBtn.addEventListener('click', function () {
  shippingCost = freeShippingCharge;
  selected(freeShippingBtn);
  updateBalance(selectedTabs.price, shippingCost);
});
expressShippingBtn.addEventListener('click', function () {
  shippingCost = expressShippingCharge;
  selected(expressShippingBtn);
  updateBalance(selectedTabs.price, shippingCost);
});

// initial
changeTabs(tab1Contents);
selectedTabs = tab1Contents;
selected(tab1Btn);
selected(freeShippingBtn);
updateBalance(selectedTabs.price, shippingCost);
