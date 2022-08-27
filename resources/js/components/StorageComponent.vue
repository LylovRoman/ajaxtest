<template>
    <div class="container border border-2 p-3 m-5">
        <h1>Файлы</h1>
        <div style="display: flex; flex-direction: row">
            <FileComponent></FileComponent>
            <FileComponent></FileComponent>
            <FileComponent></FileComponent>
            <FileComponent></FileComponent>
        </div>
    </div>
</template>

<script>
import FileComponent from "./FileComponent";

export default {
    name: "StorageComponent",
    mounted() {
        //
    },
    components: {
        FileComponent
    }
}
</script>
