<template>
	<div
		class="grid grid-cols-3 grid-rows-3 min-h-0 min-w-0 w-full h-full text-sm gap-0 my-0 mx-auto"
	>
		<div
			v-for="(content, contentIndex) in grid.content"
			:key="contentIndex"
		>
			<div
				class="w-full h-full overflow-hidden border border-solid border-black"
				:style="{
					backgroundColor:
						contentIndex === 4 ? grid.bgMain : grid.bgSecond,
				}"
				@click="handleClick(contentIndex)"
			>
				<div class="w-full h-full flex justify-center items-center">
					<div
						class="p-2 whitespace-pre-line flex justify-center items-center font-normal w-[98%] h-[98%] overflow-hidden cursor-pointer"
					>
						{{ content }}
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
			this.$emit('update-grid', index);
		},
	},
};
</script>
