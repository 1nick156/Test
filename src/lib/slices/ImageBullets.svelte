<script>
	import * as prismicH from '@prismicio/helpers';

	export let slice;

  const imageSrc = prismicH.asImageWidthSrcSet(slice.primary.image)

	const htmlSerializer = {
		paragraph: ({ children }) => children
	};
</script>

<div class="layout box">
  <img src={imageSrc.src} srcset={imageSrc.srcset} alt={slice.primary.image.alt}>
	<ul>
		{#each slice.items as item}
			<li style:list-style-type={`"${item.emoji}"`}>{@html prismicH.asHTML(item.bullet, null, htmlSerializer)}</li>
		{/each}
	</ul>
</div>

<style>
 img {
    width: 40%;
    border-radius: 1rem;
    aspect-ratio: 0.9;
    object-fit: cover;
    flex: 1.2;
  }

  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin-top: 5vw;
    margin-bottom: 5vw;
  }

  ul {
    margin: 0;
    padding-left: 2rem;
    flex: 1;
  }

  .box :global(li:last-child) {
    margin-bottom: 0;
  }

  .box :global(li) {
    font-weight: 500;
    color: #eee;
    padding-left: 0.5rem;
    margin-bottom: 1rem;
  }
</style>