<template>
    <Head title="আবেদন ফরম প্রিভিউ" />

    <app-layout>
        <div class="max-w-3xl">
            <div
                class="flex flex-wrap items-end justify-between gap-4 print:hidden"
            >
                <h2
                    class="flex-shrink flex-grow text-xl font-bold leading-5 text-gray-700"
                >
                    আবেদন ফরম প্রিভিউ
                </h2>
                <print-button />
                <Link
                    :href="route('admissions.edit', data.admission.id)"
                    class="flex flex-shrink-0 flex-grow-0 items-center justify-center gap-1 rounded bg-brand-600 px-2.5 py-0.5 text-white"
                >
                    <PencilAltIcon class="w-5" />
                    <span class="hidden md:block">সম্পাদনা</span>
                </Link>
            </div>
        </div>
        <div
            class="max-w-3xl rounded border bg-white print:border-0"
        >
            <admission-form-templete :data="data" class="max-w-3xl" />
        </div>
        <div class="flex max-w-3xl items-center justify-end pt-2 print:hidden">
            <Link
                :href="route('admissions.edit', data.admission.id) + '?step=2'"
                class="flex flex-shrink-0 flex-grow-0 items-center justify-center gap-1 rounded bg-brand-600 px-3 py-2 text-white"
            >
                পরবর্তী ধাপ &#8594;
            </Link>
        </div>
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/GridApp.vue";
import { Head, Link } from "@inertiajs/vue3";
import ActionButtonEdit from "@/Components/ActionButtonEdit.vue";
import FormHeading from "@/Components/FormHeading.vue";
import InlineData from "@/Components/InlineData.vue";
import LetterHead from "@/Templete/LetterHead.vue";
import PrintButton from "@/Components/PrintButton.vue";
import { PencilAltIcon } from "@heroicons/vue/outline";
import AdmissionFormTemplete from "@/Templete/AdmissionForm.vue";

export default {
    components: {
        AppLayout,
        Head,
        Link,
        ActionButtonEdit,
        FormHeading,
        InlineData,
        LetterHead,
        PrintButton,
        PencilAltIcon,
        AdmissionFormTemplete,
    },
    props: {
        data: {
            type: Object,
            default: {},
        },
    },
    data() {
        return {
            columns: [
                { title: "Code", align: "left" },
                { title: "Name", align: "left" },
            ],
        };
    },
};
</script>
