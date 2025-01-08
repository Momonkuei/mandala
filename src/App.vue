<template>
	<div class="flex justify-center items-center">
		<div
			class="shadow-mainBox flex-grow-[5] flex-shrink basis-0 min-w-[900px] h-full overflow-auto"
		>
			<div class="w-fit my-0 mx-auto">
				<div
					class="grid grid-cols-3 grid-rows-3 min-h-0 min-w-0 w-[822px] h-[822px] m-10 translate-x-0 translate-y-0 gap-px bg-black border border-solid border-black"
				>
					<nine-times-nine></nine-times-nine>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import nineTimesNine from './components/nineTimesNine.vue';

export default {
	components: { nineTimesNine },
};
</script>
