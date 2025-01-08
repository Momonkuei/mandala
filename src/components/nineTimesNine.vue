<template>
	<div
		class="grid grid-cols-3 grid-rows-3 min-h-0 min-w-0 w-full h-full text-sm gap-0 my-0 mx-auto"
	>
		<div
			v-for="(gridColor, index) in 9"
			class="w-full h-full overflow-hidden border border-solid border-black"
			:style="{ backgroundColor: index === 4 ? bgMain : bgSecond }"
		></div>
	</div>
</template>

<script>
export default {
	props: ['bgMain', 'bgSecond'],
	setup() {},
};
</script>
