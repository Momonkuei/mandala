<template>
	<sub-goal-box :sub="data.subs[0]"></sub-goal-box>
	<sub-goal-box :sub="data.subs[1]"></sub-goal-box>
	<sub-goal-box :sub="data.subs[2]"></sub-goal-box>
	<sub-goal-box :sub="data.subs[3]"></sub-goal-box>
	<core-goal-box :main="data.main" :subs="data.subs"></core-goal-box>
	<sub-goal-box :sub="data.subs[4]"></sub-goal-box>
	<sub-goal-box :sub="data.subs[5]"></sub-goal-box>
	<sub-goal-box :sub="data.subs[6]"></sub-goal-box>
	<sub-goal-box :sub="data.subs[7]"></sub-goal-box>
</template>

<script>
import SubGoalBox from './SubGoalBox.vue';
import CoreGoalBox from './CoreGoalBox.vue';
export default {
	components: { SubGoalBox, CoreGoalBox },
	props: ['data'],
	setup(props) {},
};
</script>
