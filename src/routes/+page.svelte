<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { bounceIn, bounceInOut, bounceOut, cubicInOut, expoIn, expoOut } from 'svelte/easing';
	import { fly, slide } from 'svelte/transition';
	import Custom from '$lib/Custom.svelte';
	let loaded = false;

	onMount(() => {
		loaded = true;
	});
</script>

<div
	id="landing"
	class="min-h-screen bg-gradient-to-b from-secondary-200 via-white via-20% to-transparent to-95%"
>
	{#if loaded}
		<div class="flex items-center gap-10 w-max mx-auto pt-40 text-surface-800-100-token">
			<h1 class="h1 text-8xl flex flex-col gap-8 items-end text-surface-700">
				<div transition:fly={{ delay: 300, duration: 1000, x: -200, y: -100 }}>Pretty</div>
				<div transition:fly={{ delay: 700, duration: 1000, x: -200 }}>Darn</div>
				<div
					class="tracking-widest italic"
					transition:fly={{ delay: 1200, duration: 1000, x: -200, y: 100 }}
				>
					Slick
				</div>
			</h1>
			<div class="p-4 flex flex-col">
				<h1
					transition:fly={{ delay: 1600, duration: 1000, easing: bounceOut, y: -300 }}
					class="h1 text-9xl"
				>
					<Custom --timing={'8s'} spacing="tracking-[1.1rem]">Custom</Custom>
				</h1>
				<h1 class="h1 text-[16rem]" transition:fly={{ delay: 2200, duration: 1200, y: 300 }}>
					<Custom --timing={'10s'}>Sites</Custom>
				</h1>
			</div>
		</div>
	{/if}
</div>
<div
	class="grid place-content-center w-max mx-auto grid-rows-[auto_auto] grid-cols-[auto_1fr] gap-10 p-10 justify-center"
>
	<div class="bg-surface-700-200-token w-96 h-96" />
	<section class="flex flex-col gap-4">
		<h2 class="h2">About</h2>
		<article class="max-w-[34rem] text-lg">
			Self-taught and constantly learning and expanding my horizons, I strive to make a holistic
			approach to tech and building my business. There's no fine-print or gotchas when working with
			me, there's just high quality output and communication. I won't create your business for you,
			I will build your vision and multiply it. This isn't a cookie cutter website creation factory,
			it's a completely custom, modern, responsive and performant website made by a guy who's open
			to your wildest ideas and making them come true.
		</article>
	</section>
	<div class="pt-10 italic col-span-2 flex flex-col w-max gap-4 mx-auto">
		Take the next step in amplifying your business and passion <button
			class="btn variant-filled-secondary">Contact Me</button
		>
	</div>
</div>
<div id="packages" class="flex gap-10 justify-center pt-20">
	<div class="card flex flex-col p-10 w-72 gap-4">
		<h3 class="h3">Landing Page</h3>
		<ul>
			<li>One page</li>
			<li>Contact Form</li>
			<li>2-5 pagelengths</li>
		</ul>
		<div class="grow" />
		<span class=" text-green-600">$200-400</span>
		<button class="btn variant-filled-primary">Contact Me</button>
	</div>
	<div class="card flex flex-col p-10 w-72 gap-4">
		<h3 class="h3">Multi-page website</h3>
		<ul>
			<li>5-10 pages</li>
			<li>Payments</li>
			<li>API Calls</li>
			<li>Database</li>
			<li>User Authentication</li>
		</ul>
		<div class="grow" />
		<span class=" text-green-600">$400-3000</span>
		<button class="btn variant-filled-primary">Contact Me</button>
	</div>
	<div class="card flex flex-col p-10 w-72 gap-4">
		<h3 class="h3">Big Boy</h3>
		<ul>
			<li>Massive Project</li>
			<li>Complicated Web-app</li>
			<li>Payments</li>
			<li>API Calls</li>
			<li>Database</li>
			<li>User Authentication</li>
			<li>CMS</li>
		</ul>
		<div class="grow" />
		<span class=" text-green-600">$45/hour</span>
		<button class="btn variant-filled-primary">Contact Me</button>
	</div>
</div>
<div id="contact" class="p-60">
	<form class="flex flex-col gap-4 w-96 mx-auto card p-10">
		<h2 class="h2 text-center p-4">Contact</h2>
		<label for="name"
			>Name:<input type="text" name="name" id="name" class="input form-input" /></label
		>
		<label for="email"
			>Email:<input type="text" name="email" id="email" class="input form-input" /></label
		>
		<label for="business"
			>Business:
			<input type="text" name="business" id="business" class="input form-input" />
		</label>
		<label for="project"
			>Project:
			<input type="textarea" name="project" id="project" class="form-input textarea" />
		</label>
		<button class="btn variant-filled-tertiary input">Blast Off!</button>
	</form>
</div>
