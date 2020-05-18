<template>
    <div>
        <vue-confirm :show="showConfirm" :content="content" @confirm="confirm" :showCancel="true" confirmText="知道了"></vue-confirm>
        <button @click="showConfirm = true">show confirm</button>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                content: 'asdasdadad我哦我我我我哦我我我我我我我哦我哦我我我我我',
                showConfirm: false
            }
        },
        methods:{
            confirm(e){
                this.showConfirm = false
                console.log(e)
            }
        }
    }
</script>
