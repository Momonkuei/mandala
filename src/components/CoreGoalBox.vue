<template>
	<div
		class="grid grid-cols-3 grid-rows-3 min-h-0 min-w-0 w-full h-full gap-0 my-0 mx-auto"
	>
		<Box :bgColor="main.bgSecond" :content="subs[0].title"></Box>
		<Box :bgColor="main.bgSecond" :content="subs[1].title"></Box>
		<Box :bgColor="main.bgSecond" :content="subs[2].title"></Box>
		<Box :bgColor="main.bgSecond" :content="subs[3].title"></Box>
		<Box :bgColor="main.bgMain" :content="main.title"></Box>
		<Box :bgColor="main.bgSecond" :content="subs[4].title"></Box>
		<Box :bgColor="main.bgSecond" :content="subs[5].title"></Box>
		<Box :bgColor="main.bgSecond" :content="subs[6].title"></Box>
		<Box :bgColor="main.bgSecond" :content="subs[7].title"></Box>
	</div>
</template>

<script>
import Box from './Box.vue';

export default {
	components: { Box },
	props: ['main', 'subs'],
	setup(props) {
		console.log(props.subs);
	},
};
</script>
