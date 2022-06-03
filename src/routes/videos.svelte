<style>
  .header {
  text-align: center;
  padding: 12px;
}
.video {
  width: 100%;
  display: flex;
  justify-content: center;
}
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

:global(*) {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
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

<svelte:head>
	<title>Sondre Mosdal</title>
	<link rel="stylesheet" href="standard.css">
	<link rel="stylesheet" href="videos.css">
	<link rel="stylesheet" href="animations.css">
  <link rel="icon" href="favicon-32x32.png" />

</svelte:head>

<div class="header">
    <h1>Video</h1>
</div>
<div class="video">
  <!-- svelte-ignore a11y-media-has-caption -->
  <video width="1600" height="900" controls>
    <source src="media/videoer/sykkel.mp4" type="video/mp4">
  Your browser does not support the video tag.
  </video>
</div>