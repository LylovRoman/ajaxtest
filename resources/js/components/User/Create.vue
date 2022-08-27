<template>
    <div class="w-25">
        <div class="mb-3">
            <input type="text" v-model="name" placeholder="name" class="form-control">
        </div>
        <div class="mb-3">
            <input type="text" v-model="email" placeholder="email" class="form-control">
        </div>
        <div class="mb-3">
            <input type="number" v-model="admin" placeholder="admin" class="form-control">
        </div>
        <div class="mb-3">
            <input :disabled="isDisabled" @click.prevent="$store.dispatch('store', {name, email, admin})" type="submit" value="Add" class="btn btn-primary">
        </div>
    </div>
</template>

<script>
export default {
    name: "Create",
    data() {
        return {
            name: null,
            email: null,
            admin: null
        }
    },
    computed: {
        isDisabled(){
            return !(this.name && this.email && this.admin);
        }
    }
}
</script>

<style scoped>

</style>
