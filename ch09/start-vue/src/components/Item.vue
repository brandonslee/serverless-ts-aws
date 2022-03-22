<template>
    <li
        v-bind:class="{complete: item.complete}"
        @click="toggle"
    >
    {{ item.title }}
    </li>
</template>

<script>
export default {
    name: "TodoItem",   // component name to be multi-word
    props: ['item', "index"],
    methods: {
        toggle() {
            this.$emit("toggle", this.index);
        }
    }
}
</script>
