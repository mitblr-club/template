<script lang="ts">
	import { AppBar, drawerStore } from '@skeletonlabs/skeleton';
	import { siteConfig } from '$lib/site.config';
	import ThemeSwitcher from './ThemeSwitcher.svelte';

	function drawerOpen(): void {
		drawerStore.open();
	}
</script>

<AppBar
	padding="px-4 py-3"
	gridColumns="grid-cols-3"
	slotDefault="place-self-center"
	slotTrail="place-content-end"
	background="bg-transparent"
>
	<svelte:fragment slot="lead">
		<a
			href="/"
			aria-label={siteConfig.headerTitle}
			class="transition duration-150 hover:opacity-70"
		>
			<svg
				version="1.0"
				width="48"
				height="48"
				viewBox="0 0 900 900"
				preserveAspectRatio="xMinYMin"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title>CodeX Logo</title>
				<g
					transform="matrix(0.1, 0, 0, -0.1, -911.100037, 1707.999878)"
					class="fill-black dark:fill-white"
					stroke="none"
				>
					<path
						d="M16020 16077 c0 -6 -701 -2091 -704 -2094 -2 -2 -83 193 -181 434 -97 241 -229 565 -293 721 l-115 284 -320 160 -320 160 -441 -17 c-243 -9 -443 -18 -445 -20 -2 -3 328 -821 733 -1820 405 -998 736 -1819 736 -1825 0 -9 -500 -1507 -785 -2352 l-64 -188 278 0 278 0 299 889 c164 490 301 888 304 886 3 -2 163 -391 355 -865 l349 -862 318 -159 317 -159 433 11 c238 6 441 14 450 17 15 6 -27 115 -308 807 -178 440 -538 1327 -800 1970 l-475 1170 476 1418 c261 780 475 1423 475 1428 0 5 -112 9 -275 9 -151 0 -275 -1 -275 -3z m-1473 -1612 c270 -665 505 -1239 521 -1275 27 -61 187 -455 375 -925 46 -115 303 -749 571 -1408 268 -660 486 -1200 484 -1202 -9 -9 -773 -24 -781 -16 -9 9 -179 425 -875 2136 -796 1959 -1572 3878 -1569 3881 6 7 465 21 627 20 l155 -1 492 -1210z"
					/>
					<path
						d="M10326 15053 l-375 -398 0 -1910 0 -1910 376 -397 376 -398 907 0 907 0 376 398 376 397 0 453 1 452 -290 0 -290 0 0 -306 0 -306 -232 -234 -232 -234 -620 1 -621 0 -182 189 -183 189 0 1708 0 1708 188 188 187 187 621 0 621 0 227 -234 226 -234 0 -306 0 -306 290 0 290 0 0 453 0 452 -376 398 -375 397 -909 0 -908 0 -376 -397z"
					/>
				</g>
			</svg>
		</a>
	</svelte:fragment>
	<div class="hidden md:flex">
		{#each siteConfig.navLinks as link}
			<a
				href={link.href}
				class="rounded px-2.5 text-lg font-bold transition duration-150 hover:opacity-75"
			>
				{link.title}
			</a>
		{/each}
	</div>
	<svelte:fragment slot="trail">
		<ThemeSwitcher />
		<button class="btn btn-sm mr-4 md:hidden" on:click={drawerOpen}>
			<span>
				<svg viewBox="0 0 100 80" class="h-4 w-4 fill-gray-700 dark:fill-gray-400">
					<rect width="100" height="20" />
					<rect y="30" width="100" height="20" />
					<rect y="60" width="100" height="20" />
				</svg>
			</span>
		</button>
	</svelte:fragment>
</AppBar>
