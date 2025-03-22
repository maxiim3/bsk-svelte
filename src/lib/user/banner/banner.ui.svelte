<script lang="ts">
	import type { BannerUIProps } from './banner.domain';

	const { banner }: BannerUIProps = $props();
</script>

<img src={banner.source || 'https://placehold.co/600x400'} alt={banner.altText} />
