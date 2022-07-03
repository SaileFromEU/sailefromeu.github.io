<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

:global(*) {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
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

.header-text .contact {
  font-size: 20px;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.innerContainer {
  background-color: #34373b;
  border: 1px solid #505050;
  padding: 30px;
  display: flex;
  flex-direction: column;
}
.container h1 {
  color: white;
  margin-top: 30px;
}

.innerContainer h3 {
  color: white;
}

.innerContainer input {
  padding: 5px;
  width: 400px;
}
.innerContainer input:nth-child(6) {
  height: 100px;
}
.submit {
  padding: 6px;
  margin-top: 3px;
  border-radius: 5px;
}

.submit:hover {
  cursor: pointer;
}

.thankYouContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.thankYou {
  color: white;
  width: 500px;
  margin-top: 200px;
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

.contactImage {
  width: 200px;
  position: absolute;
  left: 50px;
  top: 80px
}

</style>

<script>
	let done = false
	let name = ""
</script>

<svelte:head>
  <style>
    body {
      background: #24272b;
    }
  </style>
	<title>Sondre Mosdal</title>
  <link rel="icon" href="favicon-32x32.png" />

</svelte:head>

<div class="header">
	<div class="header-text">
		<a href="/" class="home fadeInUp">HOME</a>
		<a href="my-work"class="my-work fadeInUp">MY WORK</a>
		<a href="shop" class="about fadeInUp">WEB SHOP</a>
		<a href="contact"class="contact fadeInUp"><u><b>CONTACT</b></u></a>
	</div>
</div>
{#if (!done)}
<div class="container">
  <img src="media/contactUs.png" alt="" class="contactImage">
	<h1 class="contactTitle">Contact</h1>
	<div class="innerContainer">
		<h3 class="nameTitle">Name</h3>
		<input type="text" bind:value={name} name="" id="" placeholder="Name...">
		<h3 class="emailTitle">Email</h3>
		<input type="email" name="" id="" placeholder="Email...">
		<h3 class="messageTitle">Message</h3>
		<input type="text" name="" id="" placeholder="">

	</div>
	<button on:click={() => done = true} class="submit">Submit</button>
</div>
{:else}
<div class="thankYouContainer"><h1 class="thankYou">Thank you {name} for contacting me! I will answer your email in the next days!</h1></div>
	
{/if}


