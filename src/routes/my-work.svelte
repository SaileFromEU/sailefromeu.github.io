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
.fadeInUp {
  animation-name: fadeInUp;
  animation-duration: 1.3s;
  animation-fill-mode: both;
}
.fadeInLeft {
  animation-name: fadeInLeft;
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

:global(body) {
  background: #24272b;
}

.header-text .my-work {
  font-size: 20px;
}

.slider__container {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  margin-top: 25px;
  overflow: hidden;
}

.controls {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  top: 500px;
}

.controls button {
  background: transparent;
  color: #fff;
  border-color: transparent;
  width: 3.2rem;
  height: 3.2rem;
  background: rgba(0, 0, 0, 0.3);
}

.controls button:hover {
  background: rgba(0, 0, 0, 0.5);
}

.link__filler {
  width: 1200px;
  height: 3.2rem;
}

.right__arrow__button {
  border-radius: 10px 0px 0px 10px;
}

.left__arrow__button {
  border-radius: 0px 10px 10px 0px;
}

h1.imageMessage {
  color: white;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 510px;
  font-size: 100px;
  text-shadow: 1px solid black;
}


</style>

<script>
	let slides = 2

	let images = [
		"video.PNG",
		"automotive.jpg",
		"landscape.jpg"
	]
	let alts = [
		"Videos",
		"Automotive",
		"Landscape",
	]
	let links = [
		"videos",
		"automotive",
		"landscape",
	]
	let messages = [
		"Videos",
		"Automotive",
		"Landscape"
	]

	$:slideLink = links[slides]
	$:slideImage = images[slides]
	$:slideAlt = alts[slides]
	$:slideMessage = messages[slides]


	const prev = () => {
		if (slides == 0) {
			slides = images.length-1
			return
		}
		slides = slides-1
	}
	const next = () => {
		if (slides == images.length-1) {
			slides = 0
			return
		}
		slides = slides+1
	}

</script>
<svelte:head>
	<title>Sondre Mosdal</title>
  <link rel="icon" href="favicon-32x32.png" />



</svelte:head>

<div class="header">
	<div class="header-text">
		<a href="/" class="home fadeInUp">HOME</a>
		<a href="my-work"class="my-work fadeInUp"><u><b>MY WORK</b></u></a>
		<a href="shop" class="about fadeInUp">WEB SHOP</a>
		<a href="contact"class="contact fadeInUp">CONTACT</a>
	</div>
</div>

<div class="slider__container">
	<div class="inner__container">
		<a href="{slideLink}">
		<h1 class="imageMessage">{slideMessage}</h1>
		</a>
		<a href="{slideLink}" class="link">
		<img src="media/{slideImage}" alt="{slideAlt}" width="1200px" height="800px"class="slideShow">
		</a>
		<div class="controls">
			<button class="left__arrow__button" on:click="{()=>prev()}">
				&lt;
			</button>
			<a href="{slideLink}" class="link__filler"></a>
			<button class="right__arrow__button" on:click="{()=>next()}">
				&gt;
			</button>
		</div>  
	</div>
</div>
