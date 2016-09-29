<template>
    <transition name="opacity">
        <div class="y-alert" :class="[Class]" v-if="!show">
            
        </div>
    </transition>
</template>
<script>
export default {
    name:"y-alert",
    data(){
        return {
            Class:"",
            show:false,
        }
    }
}
</script>