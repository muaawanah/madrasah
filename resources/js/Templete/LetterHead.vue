<template>
    <div class="relative">
        <div class="mx-auto flex items-center justify-center gap-4">
            <application-logo v-if="hasLogo" class="w-16" />
            <div class="flex flex-col items-center justify-end space-y-1">
                <h1
                    class="text-3xl font-bold text-brand-950 print:text-3xl print:text-black"
                >
                    {{ $page.props.settings.siteName }}
                </h1>
                <p v-if="hasAddress" class="text-sm print:text-[12px] print:text-black">
                    {{ $page.props.settings.siteAddress }}
                </p>
            </div>
        </div>
        <div
            class="mx-auto mt-4 w-[72%] border-t border-gray-400 print:border-gray-700"
        ></div>
        <div v-if="photoFrame" class="absolute right-0 top-0 bg-white">
            <div
                class="flex h-24 w-20 items-center justify-center border p-4 print:border-black"
            >
                <label class="text-sm text-gray-500 print:text-black">
                    ছবি
                </label>
            </div>
        </div>
        <div v-if="photoUrl" class="absolute right-0 top-0 bg-white">
            <div
                class="flex aspect-[40/48] w-20 items-center justify-center overflow-hidden border"
            >
                <img class="w-full" :src="photoUrl" alt="ছবি" />
            </div>
        </div>
    </div>
</template>

<script>
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
export default {
    components: {
        ApplicationLogo,
    },
    props: {
        photoFrame: {
            type: Boolean,
            default: false,
        },
        photoUrl: {
            type: String,
            default: "",
        },
        hasLogo: {
            type: Boolean,
            default: true,
        },
        hasAddress: {
            type: Boolean,
            default: true,
        },
    },
};
</script>
