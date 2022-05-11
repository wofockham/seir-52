<template>
    <button @click="incrementCount">
        {{ clicks }} clicks so far
    </button>
</template>

<script>
export default {
    name: 'ClickrButton',
    data() {
        return {
            clicks: 0
        };
    },
    methods: {
        incrementCount() {
            this.clicks++;
        }
    }
}
</script>
