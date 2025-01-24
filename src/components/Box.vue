<template>
	<div
		class="w-full h-full overflow-hidden border-1 border border-black"
		:style="{ backgroundColor: bgColor }"
	>
		<div class="w-full h-full flex justify-center items-center">
			<div
				class="p-[2px] whitespace-pre-line table-cell align-middle font-normal text-inherit w-[98%] h-[98%] overflow-hidden text-center"
			>
				<div
					class="w-full h-full flex justify-center items-center cursor-pointer break-all"
				>
					12345678910
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['bgColor'],
	setup() {},
};
</script>
