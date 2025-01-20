<template>
	<div class="flex justify-center items-center">
		<div
			class="shadow-mainBox flex-grow-[5] flex-shrink basis-0 min-w-[900px] h-full overflow-auto"
		>
			<div class="w-fit my-0 mx-auto">
				<div
					class="grid grid-cols-3 grid-rows-3 min-h-0 min-w-0 w-[822px] h-[822px] m-10 translate-x-0 translate-y-0 gap-px border border-solid border-black"
				>
					<nine-times-nine
						v-for="(grid, index) in grids"
						:key="index"
						:grid="grid"
						@update-grid="updateGrid"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';
import nineTimesNine from './components/nineTimesNine.vue';

export default {
	components: { nineTimesNine },
	setup() {
		// 將 grids 設為 reactive state
		const grids = ref([
			{
				id: 1,
				bgMain: 'rgb(118,163,158)',
				bgSecond: 'rgb(179,204,201)',
				title: '內容1',
				content: [
					'內容1-1',
					'內容1-2',
					'內容1-3',
					'內容1-4',
					'內容1-5',
					'內容1-6',
					'內容1-7',
					'內容1-8',
				],
			},
			{
				id: 2,
				bgMain: 'rgb(255,132,132)',
				bgSecond: 'rgb(255,234,234)',
				title: '內容2',
				content: [
					'內容2-1',
					'內容2-2',
					'內容2-3',
					'內容2-4',
					'內容2-5',
					'內容2-6',
					'內容2-7',
					'內容2-8',
				],
			},
			{
				id: 3,
				bgMain: 'rgb(255,228,135)',
				bgSecond: 'rgb(255,251,237)',
				title: '內容3',
				content: [
					'內容3-1',
					'內容3-2',
					'內容3-3',
					'內容3-4',
					'內容3-5',
					'內容3-6',
					'內容3-7',
					'內容3-8',
				],
			},
			{
				id: 4,
				bgMain: 'rgb(155,192,222)',
				bgSecond: 'rgb(231,240,247)',
				title: '內容4',
				content: [
					'內容4-1',
					'內容4-2',
					'內容4-3',
					'內容4-4',
					'內容4-5',
					'內容4-6',
					'內容4-7',
					'內容4-8',
				],
			},
			{
				id: 5,
				bgMain: 'rgb(204,204,204)',
				bgSecond: 'rgb(255,255,255)',
				title: ref('內容5'),
				content: [
					'內容1',
					'內容2',
					'內容3',
					'內容4',
					'內容5',
					'內容6',
					'內容7',
					'內容8',
				],
			},
			{
				id: 6,
				bgMain: 'rgb(188,172,156)',
				bgSecond: 'rgb(229,223,217)',
				title: '內容6',
				content: [
					'內容6-1',
					'內容6-2',
					'內容6-3',
					'內容6-4',
					'內容6-5',
					'內容6-6',
					'內容6-7',
					'內容6-8',
				],
			},
			{
				id: 7,
				bgMain: 'rgb(221,196,161)',
				bgSecond: 'rgb(248,243,236)',
				title: '內容7',
				content: [
					'內容7-1',
					'內容7-2',
					'內容7-3',
					'內容7-4',
					'內容7-5',
					'內容7-6',
					'內容7-7',
					'內容7-8',
				],
			},
			{
				id: 8,
				bgMain: 'rgb(153,171,158)',
				bgSecond: 'rgb(209,217,211)',
				title: '內容8',
				content: [
					'內容8-1',
					'內容8-2',
					'內容8-3',
					'內容8-4',
					'內容8-5',
					'內容8-6',
					'內容8-7',
					'內容8-8',
				],
			},
			{
				id: 9,
				bgMain: 'rgb(169,155,196)',
				bgSecond: 'rgb(224,219,234)',
				title: '內容9',
				content: [
					'內容9-1',
					'內容9-2',
					'內容9-3',
					'內容9-4',
					'內容9-5',
					'內容9-6',
					'內容9-7',
					'內容9-8',
				],
			},
		]);

		// 更新網格內容
		const updateGrid = index => {
			// 更新 id 5 的 title 時，連動更新其他 grid 的 title
			if (index === 4) {
				const updatedTitle = grids.value[4].title; // 取 id 5 的 title
				grids.value.forEach((grid, i) => {
					// 除了 id 5 外，更新所有其他 grid 的 title
					if (i !== 4) {
						grid.title = updatedTitle;
					}
				});
			}
			grids.value[index].content = '已更新';
		};

		return {
			grids,
			updateGrid,
		};
	},
};
</script>
