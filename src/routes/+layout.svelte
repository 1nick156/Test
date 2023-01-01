<script>
  import pico from "@picocss/pico"
</script>

<nav class="layout">
  <a prefetch href="/">Home</a>
  <a prefetch href="/Competitive">Competitive</a>
  <a prefetch href="/Community">Community</a>
</nav>

<main>
  <slot />
</main>

<footer class="layout">  <a prefetch href="/">Home</a>
  <a prefetch href="/Competitive">Competitive</a>
  <a prefetch href="/Community">Community</a></footer>

<style>
	nav {
		background: rgba(0, 0, 0, 0.4);
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	nav,
	footer {
		text-transform: uppercase;
		font-size: 0.7rem;
		letter-spacing: 0.1px;
		font-weight: 500;
	}

	:global(html) {
		background: rgb(20, 20, 40);
		/* scrollbar-gutter: stable; */
		overflow-y: scroll;
	}

	:global(.layout) {
		--width: 700px;
		padding-left: max(1rem, calc(calc(100vw - var(--width)) / 2));
		padding-right: max(1rem, calc(calc(100vw - var(--width)) / 2));
	}

	main {
		margin-bottom: 5rem;
		margin-top: 5vw;
	}

	footer {
		
		margin-bottom: 5rem;
		margin-top: 5vw;
		text-align: center;
		margin: 3rem 0;
		color: rgba(255, 255, 255, 0.4);
	}
</style>
