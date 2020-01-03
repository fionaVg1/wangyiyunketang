<template>
    <div>
        <ul>
            <li v-for="item in books" :key="item.id">
                <span>{{item.value}}</span>  
                <button v-on:click="deleteBook(item.id)">删除书籍</button>
            </li>
        </ul>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState([
            'books'
        ])
    },
    methods:{
        deleteBook(id){
            this.$store.dispatch('onDelBook',id);
        }
    },   
}
</script>

