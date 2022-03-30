<template>
	<div class="dashboard-content">
		<div class="content-header">
			<h2 class="text__title">Create new post</h2>
		</div>
		<div class="blog_editor__wrap">
			<div class="blog_editor__group">
				<div>
					<h2 class="blog_editor__caption">Title</h2>
					<div class="blog_editor__input">
						<el-input placeholder="Please input"></el-input>
					</div>
				</div>
				<div>
					<h2 class="blog_editor__caption">Content</h2>
					<div class="blog_editor__editor">
						<QuillEditor theme="snow" toolbar="full"/>
					</div>
				</div>
				<div>
					<h2 class="blog_editor__caption">Post Excerpt</h2>
					<div class="blog_editor__input">
						<el-input placeholder="Please input" type="textarea" rows="3"></el-input>
					</div>
				</div>
			</div>
			<div class="blog_editor__group">
				<div>
					<h2 class="blog_editor__caption">Category</h2>
					<div class="blog_editor__input">
						<el-select v-model="value1" multiple placeholder="Select">
							<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value"
							>
							</el-option>
						</el-select>
					</div>
				</div>
				<div>
					<h2 class="blog_editor__caption">Tags</h2>
					<div class="blog_editor__input">
						<el-select v-model="value1" multiple placeholder="Select">
							<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value"
							>
							</el-option>
						</el-select>
					</div>
				</div>
				<div>
					<h2 class="blog_editor__caption">Featured Image</h2>
					<div class="blog_editor__input">
						<el-upload
						class="upload-demo"
						drag
						action="https://jsonplaceholder.typicode.com/posts/"
						>
							<i class="el-icon-upload"></i>
							<div class="el-upload__text">Drop file here or <em>click to upload</em></div>
						
						</el-upload>
					</div>
				</div>
				<div>
					<h2 class="blog_editor__caption">Meta Description</h2>
					<div class="blog_editor__input">
						<el-input placeholder="Please input" type="textarea" rows="3"></el-input>
					</div>
				</div>
			</div>
		</div>
		<div class="blog_editor__button">
			<el-button type="primary" >Create a post</el-button>
		</div>
	</div>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default {
	components: {
		QuillEditor
    },
	data() {
		return {
			data: {
                title: '',
                post: '<h2>Insert your text here</h2>',
                metaDescription: '',
                postExcerpt: '',
                category_id: [],
                tag_id: [],
            },
			content: '<h2>I am Example</h2>',
			options: [
			{
				value: 'Option1',
				label: 'Option1',
			},
			{
				value: 'Option2',
				label: 'Option2',
			},
			{
				value: 'Option3',
				label: 'Option3',
			},
			{
				value: 'Option4',
				label: 'Option4',
			},
			{
				value: 'Option5',
				label: 'Option5',
			},
			],
			value1: [],
			value2: [],
		}
	},
	computed: {
        editor() {
            return this.$refs.myQuillEditor.quill
        }
    },
}
</script>