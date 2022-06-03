<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

:global(*){
	  margin: 0;
	  padding: 0;
	  box-sizing: border-box;
	  font-family: "Poppins", sans-serif;
	}

	.header-text .shop {
  font-size: 20px;
}
.header {
  width: 100%;
  background: #000000;
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


.shopItems {
  width: 100%;
  margin: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.productCard {
  height: auto;
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.productCard .productImage {
  width: 400px;
}
.productDescription {
  font-size: small;
}

.lastRow {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px
}

.productPrice {
  font-weight: 500;
}

.addToCart {
  background-color: #1652f0;
  border: 1px solid #1652f0;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.15;
  padding: 10px 10px;
  text-transform: none;
  width: fit-content;
}

.addToCart:hover {
  background-color: #0a46e4;
  border-color: #0a46e4;
}
.addToCart:active {
  background-color: #0039D7;
  border-color: #0039D7;
}


.checkout {
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

.checkout:hover {
  background-color: #0a46e4;
  border-color: #0a46e4;
}



.shop {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 10px;
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

.productImage {margin-bottom: 10px;}
	</style>


<svelte:head>
	<title>Sondre Mosdal</title>
  <link rel="icon" href="favicon-32x32.png" />

</svelte:head>

<script>
	let cart = []
	let tempcart

	if (process.browser) {
		tempcart = localStorage.getItem("cart")
		if (tempcart) {cart = JSON.parse(tempcart)}
		
}	
	let pIL = "shop/products/"
	let products = [
		{
			prodnr:1,
			name:"Automotive",
			description: "10 images",
			imageLink:"23 (Large).jpg",
			price:"599,-"
		},
		{
			prodnr:2,
			name:"Automotive",
			description: "25 images",
			imageLink:"34 (Large).jpg",
			price:"1099,-"
		},
    {
			prodnr:3,
			name:"Landscape",
			description: "4 images",
			imageLink:"50.jpg",
			price:"599,-"
		},
    {
			prodnr:4,
			name:"Landscape",
			description: "8 images",
			imageLink:"52.jpg",
			price:"1099,-"
		},
    {
			prodnr:5,
			name:"Landscape",
			description: "12 images",
			imageLink:"52.jpg",
			price:"1399,-"
		}
	]
	

	const addStorage = (prodnr, amount) => {
		if (cart.find(i => i.prodnr === prodnr)) {
			let obj = cart.find(i => i.prodnr === prodnr)
			obj.amount = obj.amount+1

		}
		else {
			cart.push({prodnr:prodnr, amount:amount})
		}
		
		if (process.browser) {
		localStorage.setItem("cart", JSON.stringify(cart))
	}
	}

  const toCheckout = () => {
    location.href="/shop/checkout"
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
<div class="shop">
	<div class="shopItems">
		{#each products as p}
		<div class="productCard" id="productCard">
			<img src={pIL+p.imageLink} alt={p.name} class="productImage">
			<p class="productName">{p.name}</p>
			<p class="productDescription">{p.description}</p>
			<div class="lastRow">
				<p class="productPrice">{p.price}</p>
				<button on:click={() => addStorage(p.prodnr, 1)} class="addToCart">Add to cart</button>
			</div>	
		</div>
		{/each}
	</div>
	<button class="checkout" on:click={() => toCheckout()}>Checkout</button>
</div>