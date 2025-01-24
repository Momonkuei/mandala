<template>
	<div class="flex justify-center items-center">
		<div
			class="shadow-mainBox flex-grow-[5] flex-shrink basis-0 min-w-[900px] h-full overflow-auto"
		>
			<div class="w-fit my-0 mx-auto">
				<div
					class="grid grid-cols-3 grid-rows-3 min-h-0 min-w-0 w-[822px] h-[822px] m-10 translate-x-0 translate-y-0 gap-px border border-solid border-black"
				>
					<nine-times-nine-conrainer :data="data" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { reactive, ref } from 'vue';
import nineTimesNineConrainer from './components/nineTimesNineConrainer.vue';

export default {
	components: { nineTimesNineConrainer },
	setup() {
		const data = reactive({
			main: {
				title: 'Start Here!',
				bgMain: 'rgb(204,204,204)',
				bgSecond: 'rgb(255,255,255)',
			},
			subs: [
				{
					title: 'Sub Goal 1',
					bgMain: 'rgb(118,163,158)',
					bgSecond: 'rgb(179,204,201)',
					actions: [
						{
							title: '123',
						},
						{
							title: '456',
						},
						{
							title: '789',
						},
						{
							title: '123',
						},
						{
							title: '456',
						},
						{
							title: '789',
						},
						{
							title: '123',
						},
						{
							title: '456',
						},
					],
				},
				{
					title: 'Sub Goal 2',
					bgMain: 'rgb(255,132,132)',
					bgSecond: 'rgb(255,234,234)',
					actions: [
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
					],
				},
				{
					title: 'Sub Goal 3',
					bgMain: 'rgb(255,228,135)',
					bgSecond: 'rgb(255,251,237)',
					actions: [
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
					],
				},
				{
					title: 'Sub Goal 4',
					bgMain: 'rgb(155,192,222)',
					bgSecond: 'rgb(231,240,247)',
					actions: [
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
					],
				},
				{
					title: 'Sub Goal 5',
					bgMain: 'rgb(188,172,156)',
					bgSecond: 'rgb(229,223,217)',
					actions: [
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
					],
				},
				{
					title: 'Sub Goal 6',
					bgMain: 'rgb(221,196,161)',
					bgSecond: 'rgb(248,243,236)',
					actions: [
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
					],
				},
				{
					title: 'Sub Goal 7',
					bgMain: 'rgb(153,171,158)',
					bgSecond: 'rgb(209,217,211)',
					actions: [
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
					],
				},
				{
					title: 'Sub Goal 8',
					bgMain: 'rgb(169,155,196)',
					bgSecond: 'rgb(224,219,234)',
					actions: [
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
						{
							title: '',
						},
					],
				},
			],
		});

		return {
			data,
		};
	},
};
</script>
