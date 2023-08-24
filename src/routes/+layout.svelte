<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import NavBar from '$components/NavBar.svelte';
	import NavDrawer from '$components/NavDrawer.svelte';
	import Footer from '$components/Footer.svelte';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<NavBar />
	</svelte:fragment>
	<NavDrawer />
	<svelte:fragment slot="sidebarLeft"></svelte:fragment>
	<div class="container mx-auto p-10">
		<slot />
	</div>
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
</AppShell>
