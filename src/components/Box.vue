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
					<textarea
						ref="textareaRef"
						class="w-full h-full resize-none bg-transparent text-center border-none outline-none table-cell align-middle"
						v-model="localContent"
						@input="updateContent"
					></textarea>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
export default {
	props: ['bgColor', 'content'],
	emits: ['update:content'],
	setup(props, { emit }) {
		// Local copy of content
		const localContent = ref(props.content);

		// Reference for the textarea
		const textareaRef = ref(null);

		// Watch for prop updates (optional, if parent changes content dynamically)
		watch(
			() => props.content,
			newContent => {
				localContent.value = newContent;
			}
		);

		// Emit the updated content to the parent
		const updateContent = () => {
			emit('update:content', localContent.value);
		};

		// Get the height of textarea after mounting
		onMounted(() => {
			if (textareaRef.value) {
				const textareaHeight = textareaRef.value.offsetHeight;
				console.log('Textarea height:', textareaHeight);
			}
		});

		return {
			localContent,
			updateContent,
			textareaRef,
		};
	},
};
</script>
