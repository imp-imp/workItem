<template>
	<view :class="className" >
		<textarea
        :class="inputClass"
        @keyup="$emit('keyup', $event)"
        v-model="inputValue"
        @input="changeValue"
        :placeholder="placeholder"
        :confirm-type="confirmType"
        :maxlength="maxlength"
        :placeholder-style="placeholderStyle"
        :auto-height="autoHeight" 
        />
    <slot v-if="showNum" name="number" v-bind:maxlength="maxlength" v-bind:inputLength="inputLength"></slot>
	</view>
</template>

<script>
	export default {
    name: 'benben-textarea',
    props: { 
      'placeholderStyle' :'' ,
      placeholder: '',
      maxlength: Number,
      confirmType:'',
      autoHeight: '',
      value: '',
      showNum:false,
      className:'',
      inputClass: ''
    },
    //监听value
    watch: {
      value: {
        handler(val) {
          this.inputValue = val
        },
        immediate: true,
      },
    },
    computed:{
        inputLength(){
            return this.value.length;
        }
    },
    data() {
        return {
            inputValue:''
        }
    },
    methods: {
        changeValue(e) {
          let value = e.detail.value
          this.$emit('input', value)
        },
    },
	}
</script>

<style>
.r-top{
}
.r-top-t{
	display: flex;
	justify-content: flex-end;
	font-weight:400;
	line-height:20px;
}
</style>
