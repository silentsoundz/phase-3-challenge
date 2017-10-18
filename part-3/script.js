let cart = []
let cartTotal = []

const cartTotalPrice = document.querySelector(".cart-total-price")
const addToCartBtn = document.querySelectorAll(".item > button")

const cartBtn = document.querySelector(".site-header > button")

const closeCartBtn = document.querySelector(".close-btn")

const modalWindow = document.querySelector(".modal-window")

const clearBtn = document.querySelector(".clear-btn")

const modalBackground = document.querySelector(".modal-background")

const rowContainer = document.querySelector(".modal-items")

const openModal = () => {
  modalBackground.classList.add("display-modal")
  modalWindow.classList.add("display-modal")
}

const closeModal = () => {
  modalBackground.classList.remove("display-modal")
  modalWindow.classList.remove("display-modal")
}

const clearModal = () => {
  while (rowContainer.firstChild) {
    rowContainer.removeChild(rowContainer.firstChild)
  }
  cartTotal = []
  cart =[]
  cartBtn.childNodes[1].innerText = cart.length
  cartTotalPrice.innerText = "$0.00"
}

addToCartBtn.forEach(btn => {
  btn.addEventListener("click", (element) => {
    let itemName = element.target.parentElement.childNodes[1].innerText;
    let itemPrice = element.target.parentElement.childNodes[3].innerText;
    cart.push({itemName, itemPrice})

    let rowItem = document.createElement("div")

    let itemNameNode = document.createElement("span")
    rowItem.appendChild(itemNameNode)
    let itemNameText = document.createTextNode(itemName)
    itemNameNode.appendChild(itemNameText)

    let itemPriceNode = document.createElement("span")
    rowItem.appendChild(itemPriceNode)
    let itemPriceText = document.createTextNode(itemPrice)
    itemPriceNode.appendChild(itemPriceText)

    rowContainer.appendChild(rowItem)

    itemPrice = Number(itemPrice.slice(1))
    cartTotal.push(itemPrice)

    let totalPrice = cartTotal.reduce((sum,value) => {
      return sum + value
    }, 0)

    cartTotalPrice.innerText = "$" + totalPrice.toFixed(2)

    cartBtn.childNodes[1].innerText = cart.length
  })
})

clearBtn.addEventListener("click", clearModal)
cartBtn.addEventListener("click", openModal)
closeCartBtn.addEventListener("click", closeModal)
