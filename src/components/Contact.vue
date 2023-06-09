<script setup lang="ts">
import { reactive, ref } from 'vue'
import emailjs from '@emailjs/browser'
import useCookie from '@/utils/useCookie'
const serviceId = import.meta.env.VITE_EMAIL_JS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID
const publicId = import.meta.env.VITE_EMAIL_JS_PUBLIC_ID
const { setCookie, getCookie } = useCookie()
type InputAttributes = {
    value: string
    firstCheck: boolean
    validation: string[]
    error: Set<string>
}
type FormFields = {
    name: InputAttributes
    email: InputAttributes
    message: InputAttributes
}
const emailVal = {
    regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
    error: 'The email needs to be a valid one'
}
const min20Val = { regex: /(.*[a-z]){18,}/i, error: 'This field needs at least 20 characters' }
const min10Val = { regex: /(.*[a-z]){10,}/i, error: 'This field needs at least 10 characters' }
const form = reactive<FormFields>({
    name: {
        value: '',
        firstCheck: false,
        validation: ['required', 'min:10'],
        error: new Set<string>()
    },
    email: {
        value: '',
        firstCheck: false,
        validation: ['required', 'email'],
        error: new Set<string>()
    },
    message: {
        value: '',
        firstCheck: false,
        validation: ['required', 'min:20'],
        error: new Set<string>()
    }
})
const errors = ref<number>(0)
const cookieName = 'contactForm'
const oldCookie = ref<string>(getCookie(cookieName))
const loading = ref<boolean>(false)
const formHTML = ref()

const validateInput = (e: Event | null) => {
    if (e) {
        let eventType = e.type
        let target = e.target as HTMLInputElement
        let formField = form[target.name as keyof FormFields]
        if (eventType === 'blur' && !formField.firstCheck) formField.firstCheck = true

        if (formField.firstCheck) {
            validate(formField)
        }
    } else {
        ;(Object.keys(form) as (keyof FormFields)[]).forEach((key) => {
            validate(form[key])
        })
    }
    countErrors()
}

const countErrors = () => {
    errors.value = (Object.keys(form) as (keyof FormFields)[]).reduce((acc, curr) => {
        return acc + form[curr].error.size
    }, 0)
}

const validate = (field: InputAttributes) => {
    field.validation.forEach((val) => {
        switch (val) {
            case 'required':
                if (!field.value) field.error.add('This field is required')
                else field.error.delete('This field is required')
                break
            case 'min:20':
                if (!field.value.match(min20Val.regex)) field.error.add(min20Val.error)
                else field.error.delete(min20Val.error)
                break
            case 'min:10':
                if (!field.value.match(min10Val.regex)) field.error.add(min10Val.error)
                else field.error.delete(min10Val.error)
                break
            case 'email':
                if (!field.value.match(emailVal.regex)) field.error.add(emailVal.error)
                else field.error.delete(emailVal.error)
                break
            default:
                return
        }
    })
}

const handleSubmit = (e: Event) => {
    e.preventDefault()
    validateInput(null)
    if (!errors.value) {
        loading.value = true

        emailjs
            .sendForm(serviceId, templateId, formHTML.value, publicId)
            .then((res) => {
                loading.value = false
                setCookie(cookieName, 'done', 1)
                oldCookie.value = getCookie(cookieName)
            })
            .catch((error) => {
                loading.value = false
                console.log(error)
            })
    }
}
</script>

<template>
    <section class="bg-haiti text-white contact-section xl:mt-[200px] lg:mt-[150px] mt-[100px]">
        <div class="max-w-1440 mx-auto px-5 md:px-20 flex flex-col items-center">
            <h3 id="contact" class="text-3xl lg:text-5xl">Contact</h3>
            <form
                ref="formHTML"
                v-if="!oldCookie && !loading"
                class="mt-10 flex flex-col gap-4 md:w-[510px] w-full"
                method="post"
                @submit="handleSubmit"
                novalidate
            >
                <div class="flex flex-col">
                    <label for="name">Name</label>
                    <input
                        v-model="form.name.value"
                        @input="validateInput"
                        @blur="validateInput"
                        id="name"
                        autocomplete="no"
                        placeholder="Name"
                        class="border border-purple-heart-20 text-white rounded-md mt-2 outline-0 p-2 bg-purple-heart-20"
                        name="name"
                        type="text"
                    />
                    <div v-if="form.name.error.size > 0" class="text-xs mt-2 text-red-600">
                        {{ Array.from(form.name.error).join('. ') }}
                    </div>
                </div>
                <div class="flex flex-col">
                    <label for="email">Email</label>
                    <input
                        v-model="form.email.value"
                        @input="validateInput"
                        @blur="validateInput"
                        id="email"
                        placeholder="Email"
                        autocomplete="off"
                        class="border border-purple-heart-20 text-white rounded-md mt-2 outline-0 p-2 bg-purple-heart-20"
                        name="email"
                        type="email"
                    />
                    <div v-if="form.email.error.size > 0" class="text-xs mt-2 text-red-600">
                        {{ Array.from(form.email.error).join('. ') }}
                    </div>
                </div>
                <div class="flex flex-col">
                    <label for="message">Message</label>
                    <textarea
                        @input="validateInput"
                        @blur="validateInput"
                        v-model="form.message.value"
                        class="border border-purple-heart-20 text-white rounded-md mt-2 outline-0 p-2 bg-purple-heart-20"
                        name="message"
                        id="message"
                        placeholder="Message"
                        cols="20"
                        rows="10"
                    ></textarea>
                    <div v-if="form.message.error.size > 0" class="text-xs mt-2 text-red-600">
                        {{ Array.from(form.message.error).join('. ') }}
                    </div>
                </div>
                <button
                    class="bg-meteorite border border-white-lilac-50 rounded-md p-2 hover:bg-meteorite-70 mt-5 md:px-4 text-lg"
                    type="submit"
                >
                    Submit
                </button>
            </form>
            <div v-else-if="loading" class="mt-10 text-sm">Loading...</div>
            <div v-else class="mt-10 text-sm">
                Thanks for your message, I will reach out as soon as possible.
            </div>
        </div>
    </section>
</template>
