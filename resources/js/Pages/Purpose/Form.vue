<template>
    <div class="w-full max-w-xl rounded border bg-white p-4 shadow">
        <validation-errors class="mb-4" />

        <form @submit.prevent="submit" class="">
            <div class="grid gap-x-10 md:grid-cols-2">
                <form-group label="বাবদের শিরোনাম" class="col-span-2">
                    <Input
                        type="text"
                        class="block w-full"
                        v-model="form.title"
                        required
                    />
                </form-group>
                <div class="col-span-full grid gap-4 md:grid-cols-2">
                    <div class="flex items-center gap-2">
                        <label
                            class="flex items-center gap-2 py-4 text-brand-500"
                        >
                            <Input
                                :checked="all_amount_same === true"
                                type="radio"
                                name="all_amount_same"
                                @click="all_amount_same = true"
                                @change="setAllAmount"
                                required
                            />
                            <span>সব ক্লাসে একই ফি</span>
                        </label>
                        <Input
                            type="number"
                            class="w-20 text-right"
                            v-show="all_amount_same === true"
                            :required="all_amount_same === true"
                            @input="setAllAmount"
                            v-model="amount"
                        />
                    </div>
                    <div class="flex items-center gap-2">
                        <label class="flex items-center gap-2 text-brand-500">
                            <Input
                                :checked="all_amount_same === false"
                                type="radio"
                                name="all_amount_same"
                                @click="all_amount_same = false"
                                required
                            />
                            <span>ভিন্ন ভিন্ন ফি</span>
                        </label>
                    </div>
                </div>
                <hr class="col-span-full mb-3" />
                <form-group
                    v-for="(purpose_fee, index) in form.purpose_fees"
                    :key="index"
                    class="col-span-1"
                >
                    <div
                        v-show="all_amount_same === false"
                        class="flex items-center gap-2 py-1"
                    >
                        <label class="w-full text-right">
                            {{ purpose_fee.class_name }}
                        </label>
                        <Input
                            type="text"
                            class="block w-20 text-right"
                            v-model="purpose_fee.amount"
                        />
                    </div>
                </form-group>
            </div>

            <hr class="my-4 w-full" />

            <div class="flex items-center justify-end">
                <Button
                    class=""
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                >
                    {{ buttonValue }}
                </Button>
            </div>
        </form>
    </div>
</template>

<script>
import ValidationErrors from "@/Components/ValidationErrors.vue";
import Button from "@/Components/Button.vue";
import Input from "@/Components/Input.vue";
import Select from "@/Components/Select.vue";
import FormGroup from "@/Components/FormGroup.vue";
import Textarea from "@/Components/Textarea.vue";
import Label from "@/Components/Label.vue";

export default {
    components: {
        ValidationErrors,
        Button,
        Input,
        Select,
        FormGroup,
        Textarea,
        Label,
    },
    props: {
        moduleAction: String,
        buttonValue: {
            type: String,
            default: "Save",
        },
        data: {
            type: Object,
            default: {},
        },
    },
    data() {
        return {
            form: this.$inertia.form({
                title: this.data.purpose.title,
                purpose_fees: [],
            }),
            all_amount_same: "",
            amount: "",
        };
    },
    created() {
        if (this.moduleAction == "store") {
            Object.values(this.data.classes).forEach((classes) => {
                this.form.purpose_fees.push({
                    class_id: classes.id,
                    class_name: classes.name,
                    amount: "",
                });
            });
        }

        if (this.moduleAction == "update") {
            this.all_amount_same = Object.keys(this.data.purpose.purpose_fees)
                .length
                ? Object.values(this.data.purpose.purpose_fees).every(
                      (val, i, arr) => val.amount === arr[0].amount
                  )
                : "";

            this.amount = this.all_amount_same
                ? this.data.purpose.purpose_fees[0].amount
                : "";

            Object.values(this.data.classes).forEach((classes) => {
                let filteredPurposeFee = Object.values(
                    this.data.purpose.purpose_fees
                ).find((purpose_fee) => purpose_fee.class_id === classes.id);

                this.form.purpose_fees.push({
                    class_id: classes.id,
                    class_name: classes.name,
                    amount: filteredPurposeFee ? filteredPurposeFee.amount : "",
                });
            });
        }
    },
    methods: {
        submit() {
            if (this.moduleAction == "store") {
                return this.form.post(this.route("purposes.store"));
            }
            if (this.moduleAction == "update") {
                return this.form.put(
                    this.route("purposes.update", this.data.purpose.id)
                );
            }
        },
        setAllAmount() {
            this.form.purpose_fees.forEach((purpose_fee) => {
                purpose_fee.amount = this.amount;
            });
        },
    },
};
</script>
