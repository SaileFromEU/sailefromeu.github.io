<style>

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap");

:global(*) {
  box-sizing: border-box;
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
  <link rel="icon" href="favicon-32x32.png" />

</svelte:head>

<script>
    $:p="media/landscape/"
    let bilder1 = [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
        "13.jpg",
        "14.jpg",
        "15.jpg"]
    let bilder2 = [
        "16.jpg",
        "17.jpg",
        "18.jpg",
        "19.jpg",
        "20.jpg",
        "21.jpg",
        "22.jpg",
        "23.jpg",
        "24.jpg",
        "25.jpg",
        "26.jpg",
        "27.jpg",
        "28.jpg",
        "29.jpg",
        "30.jpg"]
    let bilder3 = [
        "31.jpg",
        "32.jpg",
        "33.jpg",
        "34.jpg",
        "35.jpg",
        "36.jpg",
        "37.jpg",
        "38.jpg",
        "39.jpg",
        "40.jpg",
        "41.jpg",
        "42.jpg",
        "43.jpg",
        "44.jpg",
        "45.jpg"]
    let bilder4 = [
        "46.jpg",
        "47.jpg",
        "48.jpg",
        "49.jpg",
        "50.jpg",
        "51.jpg",
        "52.jpg",
        "53.jpg",
        "54.jpg",
        "55.jpg",
        "56.jpg",
        "57.jpg",
        "58.jpg",
        "59.jpg",
        "60.jpg",
        ]
</script>

<div class="header">
    <h1>Landscape</h1>
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
