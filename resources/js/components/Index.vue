<template>
    <div>
        <router-link :to="{ name: 'files' }">Файлы</router-link>
        <router-link :to="{ name: 'user.add'}">Добавить юзера</router-link>
        <router-link :to="{ name: 'user.get'}">Таблица юзеров</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Index"
}
</script>

<style scoped>

</style>
