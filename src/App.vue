<template>
	<div class="flex justify-center items-center">
		<div
			class="shadow-mainBox flex-grow-[5] flex-shrink basis-0 min-w-[900px] h-full overflow-auto"
		>
			<div class="w-fit my-0 mx-auto">
				<div
					class="grid grid-cols-3 grid-rows-3 min-h-0 min-w-0 w-[822px] h-[822px] m-10 translate-x-0 translate-y-0 gap-px bg-black border border-solid border-black"
				>
					<nine-times-nine
						v-for="(gridColor, idx) in gridColors"
						:key="idx"
						:bgMain="gridColor.main"
						:bgSecond="gridColor.second"
						>{{ key }}</nine-times-nine
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import nineTimesNine from './components/nineTimesNine.vue';

export default {
	components: { nineTimesNine },
	setup() {
		const gridColors = ref([
			{ main: 'rgb(118,163,158)', second: 'rgb(179,204,201)' },
			{ main: 'rgb(255,132,132)', second: 'rgb(255,234,234)' },
			{ main: 'rgb(255,228,135)', second: 'rgb(255,251,237)' },
			{ main: 'rgb(155,192,222)', second: 'rgb(231,240,247)' },
			{ main: 'rgb(204,204,204)', second: 'rgb(255,255,255)' },
			{ main: 'rgb(188,172,156)', second: 'rgb(229,223,217)' },
			{ main: 'rgb(221,196,161)', second: 'rgb(248,243,236)' },
			{ main: 'rgb(153,171,158)', second: 'rgb(209,217,211)' },
			{ main: 'rgb(169,155,196)', second: 'rgb(224,219,234)' },
		]);

		return {
			gridColors,
		};
	},
};
</script>
