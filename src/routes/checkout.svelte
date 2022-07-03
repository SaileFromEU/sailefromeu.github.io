<style>


@keyframes fadeInUp {
  from {
    opacity: 0.2;
    transform: translate3d(0, 20%, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0.2;
    transform: translate3d(20%, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

:global(*) {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.fadeInUp {
  animation-name: fadeInUp;
  animation-duration: 1.3s;
  animation-fill-mode: both;
}

@keyframes fadeInUp {
  from {
    opacity: 0.2;
    transform: translate3d(0, 20%, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0.2;
    transform: translate3d(20%, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.header-text .shop {
  font-size: 20px;
}
.header {
  width: 100%;
  background: #000000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.header .header-text {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header .header-text a {
  padding: 25px;
  color: white;
  text-decoration: none;
}


.clearCartButton {
  background-color: #1652f0;
  border: 1px solid #1652f0;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.15;
  padding: 12px 16px;
  text-transform: none;
  width: fit-content;
}

.clearCartButton:hover {
  background-color: #0a46e4;
  border-color: #0a46e4;
}






.clearCart {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid-container {
display: grid;
grid-template-columns: 7fr repeat(3, 1fr);
grid-column-gap: 5px;
grid-row-gap: 10px;
}

.checkout {
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
}
.amount,
.price,
.total {
  display: flex;
  justify-content: center;
  align-items: center;
}
.product {
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
}

.product .text h3 {
  font-weight: 600;
}

.headers h2 {
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.headers h2:nth-child(1){
  justify-content: left;
}

.totalEverything p, .totalEverything h3 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.totalEverything {
  margin-top: 50px;
}

.productImage {
  width: 50px;
}

</style>

<svelte:head>
  <style>
    body {
      background: white;
    }
  </style>
	<title>Sondre Mosdal</title>
  <link rel="icon" href="favicon-32x32.png" />
</svelte:head>
<script>
let pIL = "shop/products/"
let total = 0
let cart = []
let obj
let products = [
		{
			prodnr:1,
			name:"Automotive",
			description: "10 images",
			imageLink:"23 (Large).jpg",
			price:599
		},
		{
			prodnr:2,
			name:"Automotive",
			description: "25 images",
			imageLink:"34 (Large).jpg",
			price:1099
		},
    {
			prodnr:3,
			name:"Landscape",
			description: "4 images",
			imageLink:"50.jpg",
			price:599
		},
    {
			prodnr:4,
			name:"Landscape",
			description: "8 images",
			imageLink:"52.jpg",
			price:1099
		},
    {
			prodnr:5,
			name:"Landscape",
			description: "12 images",
			imageLink:"52.jpg",
			price:1399
		}
	]



if (process.browser) {
	cart = localStorage.getItem("cart")
	cart = JSON.parse(cart)
}
if (process.browser) {
  for (let i=0; i<cart.length; i++) {
    let prodnr = cart[i].prodnr
    let obj = products.find(i => i.prodnr === prodnr)
    total = total+obj.price*cart[i].amount

}}

	const clearCart = () => {
		if (process.browser) {
			localStorage.removeItem("cart")	
			location.reload()
			}
	}
</script>
<div class="header">
	<div class="header-text">
		<a href="/" class="home fadeInUp">HOME</a>
		<a href="my-work"class="my-work fadeInUp">MY WORK</a>
		<a href="shop" class="shop fadeInUp"><u><b>WEB SHOP</b></u></a>
		<a href="contact"class="contact fadeInUp">CONTACT</a>
	</div>
</div>

	
<div class="checkout">
  <div class="grid-container headers">
    <h2>Checkout</h2>
    <h2>Amount</h2>
    <h2>Price</h2>
    <h2>Total</h2>
  </div>

  <div class="grid-container products">
    {#if process.browser}
    {#each cart as c}
    {@const obj = products.find(i => i.prodnr === c.prodnr)}
    <div class="product">
      <img src={pIL+obj.imageLink} class="productImage" alt="">
      <div class="text">
      <h3>{obj.name}</h3>
      <p>{obj.description}</p>
    </div>
    </div>
    <p class="amount">{c.amount}</p>
    <p class="price">{obj.price},-</p>
    <p class="total">{obj.price*c.amount},-</p>



    {/each}
    {/if}
  </div>
  <div class="grid-container totalEverything">
    <div class=""></div>
    <div class=""></div>
    <h3>Total Price: </h3>
    <p>{total},-</p>
  </div>
  <div class="clearCart">
		<button class="clearCartButton" on:click={() => clearCart()}>Clear Cart</button>
	</div>
</div>

