<template>
	<div
		class="grid grid-cols-3 grid-rows-3 min-h-0 min-w-0 w-full h-full text-sm gap-0 my-0 mx-auto"
	>
		<div v-for="(res, index) in 9" :key="index">
			<div
				class="w-full h-full overflow-hidden border border-solid border-black"
				:style="{
					backgroundColor: index === 4 ? grid.bgMain : grid.bgSecond,
				}"
				@click="handleClick(index)"
			>
				<div class="w-full h-full flex justify-center items-center">
					<div
						class="p-2 whitespace-pre-line flex justify-center items-center font-normal w-[98%] h-[98%] overflow-hidden cursor-pointer"
					>
						{{ res }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['grid'],
	methods: {
		handleClick(index) {
			// 通知父層點擊了哪一個格子
			this.$emit('update-grid', index);
		},
	},
};
</script>
