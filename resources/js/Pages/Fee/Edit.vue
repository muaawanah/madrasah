<template>
    <Head title="প্রদেয় ফি" />

    <app-layout pageTitle="প্রদেয় ফি">
        <form-component :data="data" module-action="update" />
    </app-layout>
</template>

<script>
import { Head } from "@inertiajs/vue3";
import AppLayout from "@/Layouts/GridApp.vue";
import FormComponent from "./Form.vue";

export default {
    components: {
        Head,
        AppLayout,
        FormComponent,
    },

    props: {
        data: {
            type: Object,
            default: {},
        },
    },
};
</script>
