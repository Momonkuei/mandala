<template>
	<div
		class="grid grid-cols-3 grid-rows-3 min-h-0 min-w-0 w-full h-full gap-0 my-0 mx-auto"
	>
		<Box :bgColor="sub.bgSecond" :content="sub.actions[0].title"></Box>
		<Box :bgColor="sub.bgSecond" :content="sub.actions[1].title"></Box>
		<Box :bgColor="sub.bgSecond" :content="sub.actions[2].title"></Box>
		<Box :bgColor="sub.bgSecond" :content="sub.actions[3].title"></Box>
		<Box :bgColor="sub.bgMain" :content="sub.title"></Box>
		<Box :bgColor="sub.bgSecond" :content="sub.actions[4].title"></Box>
		<Box :bgColor="sub.bgSecond" :content="sub.actions[5].title"></Box>
		<Box :bgColor="sub.bgSecond" :content="sub.actions[6].title"></Box>
		<Box :bgColor="sub.bgSecond" :content="sub.actions[7].title"></Box>
	</div>
</template>

<script>
import Box from './Box.vue';

export default {
	components: { Box },
	props: ['sub'],
	setup(props) {},
};
</script>
