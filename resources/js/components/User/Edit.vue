<template>
    <div class="w-25" v-if="user">
        <div class="mb-3">
            <input type="text" v-model="user.name" placeholder="name" class="form-control">
        </div>
        <div class="mb-3">
            <input type="text" v-model="user.email" placeholder="email" class="form-control">
        </div>
        <div class="mb-3">
            <input type="number" v-model="user.admin" placeholder="admin" class="form-control">
        </div>
        <div class="mb-3">
            <input :disabled="isDisabled" @click.prevent="$store.dispatch('updateUser', {id: user.id, name: user.name, email: user.email, admin: user.admin})" type="submit" value="Update" class="btn btn-primary">
        </div>
    </div>
</template>

<script>
export default {
    name: "Edit",
    mounted() {
        this.$store.dispatch('getUser', this.$route.params.id);
    },
    computed: {
        isDisabled(){
            return !(this.user.name && this.user.email && this.user.admin);
        },
        user(){
            return this.$store.getters.user;
        }
    }
}
</script>

<style scoped>

</style>
