<script>
	import { afterUpdate } from 'svelte';

	export let spacing = '';
	afterUpdate(() => {
		console.log('after Update');
	});
</script>

<span class="boujee-text {spacing}">
	<slot />
</span>

<style>
	.boujee-text {
		--bg-size: 400%;
		--color-one: hsl(192, 100%, 40%);
		--color-two: hsl(219, 100%, 41%);
		/* font-size: clamp(3rem, 25vmin, 8rem); */
		background: linear-gradient(90deg, var(--color-one), var(--color-two), var(--color-one)) 0 0 /
			var(--bg-size) 100%;
		color: transparent;
		background-clip: text;
		-webkit-background-clip: text;
		animation: move-bg var(--timing) infinite linear;
	}
	@keyframes move-bg {
		to {
			background-position: var(--bg-size) 0;
		}
	}
</style>
