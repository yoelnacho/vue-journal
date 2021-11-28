<template>
    <div class="d-flex justify-content-center">
        <h1 class="align-self-center">No hay nada seleccionado</h1>
    </div>

    <Fab />
</template>


<script>
import { defineAsyncComponent } from 'vue'
import { mapState } from 'vuex'

export default {
    components: {
        Fab: defineAsyncComponent( () => import('../components/Fab.vue') )
    },
    computed: {
        ...mapState('journal', ['isLoading'])
    }
}
</script>

<style lang="scss" scoped>
div {
    height: 100%;
}
</style>