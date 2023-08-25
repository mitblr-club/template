<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import NavBar from '$components/NavBar.svelte';
	import NavDrawer from '$components/NavDrawer.svelte';
	import Footer from '$components/Footer.svelte';

	import type { ComponentEvents } from 'svelte';

	let navTop = true;

	const handleScroll = () => {
		if (window.scrollY > 72) {
			navTop = false;
		} else {
			navTop = true;
		}
		console.log(navTop);
	};

	function scrollHandler(event: ComponentEvents<AppShell>['scroll']) {
		event.currentTarget?.addEventListener('scroll', handleScroll);

		return () => {
			event.currentTarget?.removeEventListener('scroll', handleScroll);
		};
	}
</script>

<AppShell
	regionPage="relative"
	slotPageHeader="sticky top-0 z-10 bg-opacity-60 backdrop-blur-[5px] backdrop-saturate-[1]"
	on:scroll={scrollHandler}
>
	<svelte:fragment slot="pageHeader">
		<NavBar />
	</svelte:fragment>
	<NavDrawer />
	<svelte:fragment slot="sidebarLeft"></svelte:fragment>
	<div class="container mx-auto p-10">
		<slot />
	</div>
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
</AppShell>
