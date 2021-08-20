// select elements
const art = document.getElementById('art');
const descField = document.getElementById('desc');
const priceField = document.getElementById('price');
const shippingBtns = document.getElementsByClassName('shipping-btn');
const tabBtns = document.getElementsByClassName('tab-btn');
const shippingChargeField = document.getElementById('shipping-charge');
const totalField = document.getElementById('total');

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
let selectedTab = {};

// functions
function changeTabs(tab, tabBtn) {
  art.src = tab.imageUrl;
  descField.innerText = tab.desc;
  priceField.innerText = tab.price;
  selectedTab = tab;
  updateBalance(selectedTab.price, shippingCost);
  selected(tabBtn);
}

function updateBalance(price, shippingCost) {
  const total = price + shippingCost;
  totalField.innerText = total;
}

function changeShippingMethod(selectedTabs, shippingMethod, shippingBtn) {
  shippingCost = eval(shippingMethod + 'ShippingCharge');
  shippingChargeField.innerText = shippingCost;
  updateBalance(selectedTabs.price, shippingCost);
  selected(shippingBtn);
}

function selected(item) {
  const parent = item.parentNode;
  const selectedElements = parent.getElementsByClassName('selected');
  for (const selected of selectedElements) {
    selected.classList.remove('selected');
  }
  item.classList.add('selected');
}

// event listeners
for (const tabBtn of tabBtns) {
  tabBtn.addEventListener('click', function () {
    const tabContent = tabBtn.dataset.tabcontent;
    changeTabs(eval(tabContent), tabBtn);
  });
}

for (const shippingBtn of shippingBtns) {
  shippingBtn.addEventListener('click', function () {
    const shippingMethod = shippingBtn.dataset.method;
    changeShippingMethod(selectedTab, shippingMethod, shippingBtn);
  });
}

// initial
changeTabs(tab1Contents, tabBtns[0]);
changeShippingMethod(selectedTab, 'free', shippingBtns[0]);
