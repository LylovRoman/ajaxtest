<template>
    <div class="w-25">
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Admin</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users">
                <th scope="row">{{ user.id }}</th>
                <td>
                    <router-link :to="{ name: 'user.show', params: {id: user.id} }">
                        {{ user.name }}
                    </router-link>
                </td>
                <td>{{ user.email }}</td>
                <td>{{ user.admin }}</td>
                <td>
                    <router-link :to="{name: 'user.edit', params: {id:  user.id}}">Edit</router-link>
                </td>
                <td><a @click.prevent="$store.dispatch('deleteUsers', user.id)" href="#" class="btn btn-outline-danger">Delete</a></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "Index",
    mounted() {
        this.$store.dispatch('getUsers');
    },
    computed: {
        users(){
            return this.$store.getters.users;
        }
    }
}
</script>

<style scoped>

</style>
