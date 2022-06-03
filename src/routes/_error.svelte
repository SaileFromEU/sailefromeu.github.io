<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
	const home = () => {
		location.href="/"
	}
</script>

<style>
	h1, p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>


<h1>{status}</h1>

<p>{error.message}</p>
<p>Her har det nok gått litt for fort i svingene, tykk på knappen nedenfor for å komme til home page</p>
<button on:click={home}>Home</button>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
