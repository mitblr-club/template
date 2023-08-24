<script lang="ts">
	import { Drawer } from '@skeletonlabs/skeleton';
	import { siteConfig } from '$lib/site.config';
</script>

<Drawer position="right">
	<nav class="list-nav p-4">
		<ul>
			{#each siteConfig.navLinks as link}
				<li>
					<a href={link.href}>
						{link.title}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</Drawer>
