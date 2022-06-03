<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap");

:global(*) {
  box-sizing: border-box;
}

:global(body) {
  margin: 0;
  font-family: "Poppins", sans-serif;
}

.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  margin: 0;
}

.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.header {
  text-align: center;
  padding: 32px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  transition: transform 0.25s ease;
}

img:hover {
  transform: scale(1.06);
}

@media (max-width: 1000px) {
  .column {
    flex: calc(100% / 3);
    max-width: calc(100% / 3);
  }
}

@media (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

@media (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
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


@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

:global(*) {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

</style>

<svelte:head>
	<title>Sondre Mosdal</title>
  <link rel="icon" href="favicon-32x32.png" />

</svelte:head>

<script>
    $:p="media/automotive/"
    let bilder1 = [
        "1 (Large).jpg",
        "2 (Large).jpg",
        "3 (Large).jpg",
        "4 (Large).jpg",
        "5 (Large).jpg",
        "6 (Large).jpg",
        "7 (Large).jpg",
        "8 (Large).jpg",
        "9 (Large).jpg",
        "10 (Large).jpg",
        "11 (Large).jpg"]
    let bilder2 = [
        "12 (Large).jpg",
        "13 (Large).jpg",
        "14 (Large).jpg",
        "15 (Large).jpg",    
        "16 (Large).jpg",
        "17 (Large).jpg",
        "18 (Large).jpg",
        "19 (Large).jpg",
        "20 (Large).jpg",
        "21 (Large).jpg",
        "22 (Large).jpg"]
    let bilder3 = [
        "23 (Large).jpg",
        "24 (Large).jpg",
        "25 (Large).jpg",
        "26 (Large).jpg",
        "27 (Large).jpg",
        "28 (Large).jpg",
        "29 (Large).jpg",
        "30 (Large).jpg",
        "31 (Large).jpg",
        "32 (Large).jpg",
        "33 (Large).jpg"]
    let bilder4 = [
        "34 (Large).jpg",
        "35 (Large).jpg",
        "36 (Large).jpg",
        "37 (Large).jpg",
        "38 (Large).jpg",
        "39 (Large).jpg",
        "40 (Large).jpg",
        "41 (Large).jpg",
        "42 (Large).jpg",
        "43 (Large).jpg",
        "44 (Large).jpg"]
</script>

<div class="header">
    <h1>Automotive</h1>
</div>


<div class="row">
    <div class="column">
        {#each bilder1 as b}
        <a href={p+b}><img src={p+b} style="width: 100%;" alt="Landscape bilde"></a>
        {/each}
    </div>
    <div class="column">
        {#each bilder2 as b}
        <a href={p+b}><img src={p+b} style="width: 100%;" alt="Landscape bilde"></a>
        {/each}
    </div>
    <div class="column">
        {#each bilder3 as b}
        <a href={p+b}><img src={p+b} style="width: 100%;" alt="Landscape bilde"></a>
        {/each}
    </div>
    <div class="column">
        {#each bilder4 as b}
        <a href={p+b}><img src={p+b} style="width: 100%;" alt="Landscape bilde"></a>
        {/each}
    </div>
</div>
