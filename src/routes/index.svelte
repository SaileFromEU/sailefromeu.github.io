<style>
	@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

:global(*){
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


.info {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.info .image-wrapper {
  height: 800px;
  width: 800px;
  border-radius: 0 0 100% 0;
  overflow: hidden;
}

.info .text-wrapper {
  position: absolute;
  right: 300px;
  height: 200px;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.info .text-wrapper h1 {
  font-size: 60px;
  font-weight: bolder;
  margin-bottom: 20px;
}

.info .text-wrapper p {
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
}
.info .text-wrapper a {
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
  color: white;
}

.header-text .home {
  font-size: 20px;
}

.animate {
  animation-duration: 1s;
  animation-fill-mode: both;
}

.fadeInUp {
  animation-name: fadeInUp;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 30%, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
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



</style>

<script>
</script>

<svelte:head>
  <style>
    body {
      background: #24272b;
      color:white
    }
  </style>
  
	<title>Sondre Mosdal</title>
  <link rel="icon" href="favicon-32x32.png" />

</svelte:head>

<div class="header">
	<div class="header-text">
		<a href="/" class="home fadeInUp"><u><b>HOME</b></u></a>
		<a href="my-work"class="my-work fadeInUp">MY WORK</a>
		<a href="shop" class="about fadeInUp">WEB SHOP</a>
		<a href="contact"class="contact fadeInUp">CONTACT</a>
	</div>
</div>

<div class="info">
    <div class="image-wrapper">
        <img src="media/sondrev2.jpg" alt="Sondre" class="image" height="800px" width="auto">
    </div>
	<div class="text-wrapper">
		<h1 class="heading-text fadeInUp animate">Hey, I'm Sondre!</h1>
		<div class="description fadeInUp animate">
			<p>I'm a photographer, based in Haugesund, Norway</p>
			<p>Specialist at landscape, automotive and family photos</p>
			<p><a href="my-work">Check out my work</a>, and <a href="contact">contact me</a> for a collaboration!</p>
		</div>
	</div>
</div>