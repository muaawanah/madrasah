<template>
    <Head title="ক্লাস/বিভাগ প্রিভিউ" />

    <app-layout>
        <div class="max-w-2xl rounded p-3 md:p-4">
            <div class="flex items-end justify-between gap-4 print:hidden">
                <h2
                    class="flex-shrink flex-grow text-xl font-bold leading-5 text-gray-700"
                >
                    ক্লাস/বিভাগ প্রিভিউ
                </h2>
                <print-button />
                <Link
                    :href="route('classes.edit', data.classes.id)"
                    class="flex flex-shrink-0 flex-grow-0 items-center justify-center gap-1 rounded bg-brand-600 px-2.5 py-0.5 text-white"
                >
                    <PencilAltIcon class="w-5" />
                    <span class="hidden md:block">Edit</span>
                </Link>
            </div>
        </div>
        <div class="max-w-2xl rounded border bg-white print:border-0">
            <ClassTemplete :data="data" />

            <div class="flex gap-2 px-10 pb-8">
                <span class="font-bold">শ্রেণী শিক্ষক:</span>
                <span>{{ data.classes.teacherName }}</span>
            </div>
        </div>
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/GridApp.vue";
import { Head, Link } from "@inertiajs/vue3";
import ShowTableRow from "@/Components/ShowTableRow.vue";
import ActionButtonEdit from "@/Components/ActionButtonEdit.vue";
import SimpleTable from "@/Components/SimpleTable.vue";
import TableTd from "@/Components/TableTd.vue";
import LetterHead from "@/Templete/LetterHead.vue";
import PrintButton from "@/Components/PrintButton.vue";
import { PencilAltIcon } from "@heroicons/vue/solid";
import ClassTemplete from "@/Templete/Class.vue";

export default {
    components: {
        AppLayout,
        Head,
        Link,
        ShowTableRow,
        ActionButtonEdit,
        SimpleTable,
        TableTd,
        LetterHead,
        PrintButton,
        PencilAltIcon,
        ClassTemplete,
    },
    props: {
        data: {
            type: Object,
            default: {},
        },
    },
};
</script>
