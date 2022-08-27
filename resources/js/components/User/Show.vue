<template>
    <div v-if="user">
        <div>
            Name: {{ user.name }}
        </div>
        <div>
            Email: {{ user.email }}
        </div>
        <div>
            Admin: {{ user.admin }}
        </div>
        <router-link :to="{name: 'user.edit', params: {id:  this.user.id}}">Edit</router-link>
    </div>
</template>

<script>
export default {
    name: "Show",
    mounted() {
        this.$store.dispatch('getUser', this.$route.params.id);
    },
    computed: {
        user(){
            return this.$store.getters.user;
        }
    }
}
</script>
