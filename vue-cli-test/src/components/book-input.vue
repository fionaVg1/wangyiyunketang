<template>
    <div>
        <input type="text" placeholder="请输入书籍名称" v-model="value"/>
        <button v-on:click="addBook()">新增书籍</button>
    </div>
</template>
<script>
export default {
    methods:{
        addBook(){
            var item = {
                value:this.value,
                id:++this.id
            }
            this.value = '';
            this.$store.dispatch('onAddBook',item);
        }
    },
    data(){
        return{
            value:'',
            id:0
        }
    }
}
</script>

