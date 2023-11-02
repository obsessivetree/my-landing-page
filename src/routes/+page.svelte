<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { bounceIn, bounceInOut, bounceOut, cubicInOut, expoIn, expoOut } from 'svelte/easing';
	import { fly, slide } from 'svelte/transition';
	import Custom from '$lib/Custom.svelte';
	import headshot from '../assets/DanielBeattyHeadshot.png';
	let loaded = false;

	onMount(() => {
		loaded = true;
	});
	let small = true;
</script>

<div id="landing" class="min-h-screen bg-gradient-to-b from-slate-300 from-10% to-transparent p-4">
	{#if loaded}
		<div class="flex items-center gap-1 md:gap-10 w-max mx-auto pt-40 text-surface-800-100-token">
			<h1 class="h1 md:text-8xl flex flex-col gap-5 md:gap-8 items-end text-surface-700">
				<div transition:fly={{ delay: 300, duration: 1000, x: -200, y: -100 }}>Pretty</div>
				<div transition:fly={{ delay: 700, duration: 1000, x: -200 }}>Darn</div>
				<div
					class="tracking-widest italic"
					transition:fly={{ delay: 1200, duration: 1000, x: -200, y: 100 }}
				>
					Slick
				</div>
			</h1>
			<div class="p-4 gap-12 -translate-y-1 md:gap-0 flex flex-col">
				<h1
					transition:fly={{ delay: 1600, duration: 1000, easing: bounceOut, y: -300 }}
					class="h1 text-[3rem] md:text-9xl"
				>
					<Custom --timing={'12s'} spacing="tracking-[.5rem] md:tracking-[1.1rem]">Custom</Custom>
				</h1>
				<h1
					class="h1 text-[6rem] md:text-[16rem]"
					transition:fly={{ delay: 2200, duration: 1200, y: 300 }}
				>
					<Custom --timing={'14s'}>Sites</Custom>
				</h1>
			</div>
		</div>
	{/if}
</div>
<div class="flex flex-col sm:flex-row w-max mx-auto gap-10 pt-20 md:pt-60 md:pb-16">
	<div class="w-full mx-auto flex flex-col items-center gap-4 max-w-xs md:max-w-sm p-4">
		<img src={headshot} alt="headshot" class=" rounded" />
	</div>
	<section class="flex flex-col gap-4 place-items-center max-w-[34rem] w-screen p-10 text-justify">
		<h2 class="h2 text-4xl">About</h2>
		<article class=" text-lg">
			Self-taught and constantly learning and expanding my horizons, I strive to make a holistic
			approach to tech and building my business. There's no fine-print or gotchas when working with
			me, there's just high quality output and communication. I won't create your business for you,
			I will build your vision and multiply it. This isn't a cookie cutter website creation factory,
			it's a completely custom, modern, responsive and performant website made by a guy who's open
			to your wildest ideas and making them come true.
		</article>
	</section>
</div>
<blockquote class="blockquote w-max mx-auto h-min">
	<div class="flex flex-col w-[15rem] sm:w-max gap-4 mx-auto italic mb-40">
		Take the next step in amplifying your business and passion <button
			class="btn variant-filled-secondary">Contact Me</button
		>
	</div>
</blockquote>
<h2 class="h2 text-4xl pt-0 md:pt-40 text-center p-0 md:pb-10">Pricing</h2>
<div
	id="packages"
	class="flex flex-col md:flex-row gap-10 items-center md:items-stretch justify-center pb-10 md:pb-40 m-10"
>
	<div class="card flex flex-col p-10 md:w-72 gap-4">
		<h3 class="h3 text-center text-[1.6rem] text-white">Fixed</h3>
		<hr />
		<h4 class="h4 italic">Best for people with clear guidelines and smaller projects.</h4>
		<ul>
			<li>e.g. Landing Page, Business Site</li>

			<li>1-5 pages</li>
			<li>Contact Form</li>
			<li>Stripe Payments</li>
			<li>Few API Calls</li>
			<li>Small Database</li>
			<li>User Authentication</li>
		</ul>
		<div class="grow" />
		<span class=" text-green-600 text-center">$200~$2000</span>
		<button class="btn variant-filled-primary">Select</button>
	</div>

	<div class="card flex flex-col p-10 md:w-72 gap-4">
		<h3 class="h3 text-center text-[1.6rem] text-white">Hourly</h3>
		<hr />
		<h4 class="h4 italic">
			For complicated projects with changing requirements and future maintainance.
		</h4>
		<ul>
			<li>e.g. e-commerce, blog</li>
			<li>Complicated Web-apps</li>
			<li>Stripe Payments</li>
			<li>Many API Calls</li>
			<li>Large Database</li>
			<li>User Authentication</li>
			<li>CMS</li>
		</ul>
		<div class="grow" />
		<span class=" text-green-600 text-center">$45 / hr</span>
		<button class="btn variant-filled-primary">Select</button>
	</div>
	<div class="card flex flex-col p-10 md:w-72 gap-4">
		<h3 class="h3 text-center text-[1.6rem] text-white">Profit Share</h3>
		<hr />
		<h4 class="h4 italic">For those on a budget with a dream.</h4>
		<ul>
			<li>Percentage of profits</li>
			<li>If I like your project</li>
		</ul>
		<div class="grow" />
		<span class=" text-green-600 text-center">40%~50%</span>
		<button class="btn variant-filled-primary">Select</button>
	</div>
</div>
<div id="contact" class="py-10 md:py-40 mx-10">
	<h2 class="h2 text-center text-4xl pb-8 md:p-10">Contact</h2>
	<form class="flex flex-col gap-4 md:w-96 mx-auto card p-10">
		<label class="flex flex-col gap-2" for="name"
			>Name:<input type="text" name="name" id="name" class="input form-input" /></label
		>
		<label class="flex flex-col gap-2" for="email"
			>Email:<input type="text" name="email" id="email" class="input form-input" /></label
		>
		<label class="flex flex-col gap-2" for="business"
			>Business:
			<input type="text" name="business" id="business" class="input form-input" />
		</label>

		<div class="space-y-2 space-x-2">
			<legend>Pricing:</legend>
			<label class="flex w-max items-center space-x-2">
				<input class="checkbox" type="checkbox" />
				<p>Fixed</p>
			</label>
			<label class="flex w-max items-center space-x-2">
				<input class="checkbox" type="checkbox" />
				<p>Hourly</p>
			</label>
			<label class="flex w-max items-center space-x-2">
				<input class="checkbox" type="checkbox" />
				<p>Profit Share</p>
			</label>
		</div>

		<label class="flex flex-col gap-2" for="project"
			>Project Description:
			<textarea name="project" id="project" class="input form-input textarea" rows="8" />
		</label>
		<button class="btn variant-filled-secondary input">Submit</button>
	</form>
</div>

<style>
	.vertical-text {
		writing-mode: vertical-lr;
		text-orientation: upright;
		size: 2rem !important;
	}
	.input {
		@apply border border-surface-500 border-opacity-0;
	}
	.input:hover {
		@apply border  border-opacity-30;
	}
	.input:focus {
		@apply border-opacity-10;
	}
</style>
