<template>
	<view>
	<u-button type="success" @click="getFunc">GET</u-button>
	<u-button type="primary" @click="postFunc">POST</u-button>
	</view>
</template>

<script>
	import {postFuncAPI,getFuncAPI} from '@/config/api.js'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			getFunc(){
				getFuncAPI()
			},
			postFunc(){
				postFuncAPI({data:'UView'})
			}
		}
	}
</script>

<style>

</style>
