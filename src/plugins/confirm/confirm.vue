<template>
    <transition name="fade-in">
        <div class="confirm" v-show="show" @click.stop>
            <div class="confirm-box">
                <div class="confirm-title">{{content}}</div>
                <div class="confirm-operation">
                    <div v-if="showCancel" class="confirm-operation-btn confirm-operation-cancel" @click.stop="confirm">{{cancelText}}</div>
                    <div class="confirm-operation-btn confirm-operation-confirm" @click="confirm('confirm')">{{confirmText}}</div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
		name: 'vue-confirm',
        props: {
            content: {
                default: '内容',
                type: String
            },
            cancelText: {
                default: '取消',
                type: String
            },
            confirmText: {
                default: '确定',
                type: String
            },
            showCancel: {
                default: false,
                type: Boolean
            },
            show:{
                default: false,
                type: Boolean
            }
        },
        data() {
            return {

            }
        },
        methods:{
            confirm(res){
                this.$emit('confirm', {
                    confirm: res == 'confirm'
                })
            }
        }
    }
</script>

<style scoped="scoped">
    .confirm{position: fixed; z-index: 999999; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; left: 0; top: 0; background-color: rgba(0,0,0,0.5);}
    .confirm-box{width: 250px; background-color: #fff; border-radius: 8px; overflow: hidden; box-sizing: border-box;}
    .confirm-title{padding: 20px 10px 15px; box-sizing: border-box; font-size: #333; font-size: 16px; text-align: center; word-break: break-all;}
    .confirm-operation{height: 45px; width: 100%; border-top: 0.5px solid #eee; box-sizing: border-box; display: flex; align-items: center; }
    .confirm-operation-btn{width: 50%; height: 100%; font-size: 16px; color: #444; box-sizing: border-box; flex-grow: 1; display: flex; align-items: center; justify-content: center;}
    .confirm-operation-cancel{border-right: 0.5px solid #eee; color: #999;}
    .confirm-operation-confirm{color: slateblue;}

    .fade-in-enter-active{
        animation: fadein 0.3s;
    }

    .fade-in-enter-active .confirm-box{
        animation: zoomin 0.4s;
    }


    @keyframes fadein{
        from{opacity: 0;}
        to{opacity: 1;}
    }
    @keyframes zoomin{
        0%{transform: scale(0);}
        50%{transform: scale(1.1);}
        100%{transform: scale(1);}
    }
</style>
