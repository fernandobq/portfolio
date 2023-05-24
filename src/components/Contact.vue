<script setup lang="ts">
import { reactive, ref } from 'vue'
import emailjs from '@emailjs/browser'
import Cookie from '@/utils/cookie'
const serviceId = import.meta.env.VITE_EMAIL_JS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID
const publicId = import.meta.env.VITE_EMAIL_JS_PUBLIC_ID
const { setCookie, getCookie } = Cookie()
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
const min20Val = { regex: /(.*[a-z]){20}/i, error: 'This field needs at least 20 characters' }
const min10Val = { regex: /(.*[a-z]){10}/i, error: 'This field needs at least 10 characters' }
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
    <div class="bg-haiti text-white">
        <div class="max-w-1440 mx-auto px-5 py-10 md:px-20">
            <h3 class="text-3xl lg:text-5xl font-medium">Contact</h3>
            <p class="text-lg mt-5">
                If you wan to connect you can reach me on
                <a
                    class="hover:text-white-lilac text-purple-heart"
                    href="https://www.linkedin.com/in/fernando-barraza-quintero-76b974197/"
                    target="_blank"
                    >LinkedIn</a
                >, send me an
                <a
                    class="hover:text-white-lilac text-purple-heart"
                    href="mailto:febaqui1008@gmail.com"
                    >email</a
                >
                or simply use this form
            </p>
            <form
                ref="formHTML"
                v-if="!oldCookie && !loading"
                class="mt-10 flex flex-col gap-4"
                method="post"
                @submit="handleSubmit"
                novalidate
            >
                <div class="flex flex-col">
                    <label for="name">Name</label>
                    <input
                        :class="form.name.error.size > 0 ? 'bg-red-100' : 'bg-white '"
                        v-model="form.name.value"
                        @input="validateInput"
                        @blur="validateInput"
                        id="name"
                        autocomplete="no"
                        class="border-2 border-white text-haiti rounded-md mt-2 outline-0 p-2"
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
                        :class="form.email.error.size > 0 ? 'bg-red-100' : 'bg-white '"
                        v-model="form.email.value"
                        @input="validateInput"
                        @blur="validateInput"
                        id="email"
                        autocomplete="off"
                        class="border-2 border-white text-haiti rounded-md mt-2 outline-0 p-2"
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
                        :class="form.message.error.size > 0 ? 'bg-red-100' : 'bg-white '"
                        @input="validateInput"
                        @blur="validateInput"
                        v-model="form.message.value"
                        class="border-2 border-white text-haiti rounded-md mt-2 outline-0 p-2"
                        name="message"
                        id="message"
                        cols="20"
                        rows="10"
                    ></textarea>
                    <div v-if="form.message.error.size > 0" class="text-xs mt-2 text-red-600">
                        {{ Array.from(form.message.error).join('. ') }}
                    </div>
                </div>
                <div class="hidden bg-red-100"></div>
                <button class="bg-purple-heart rounded-md p-2 hover:bg-white-lilac" type="submit">
                    Submit
                </button>
            </form>
            <div v-else-if="loading">Loading...</div>
            <div v-else class="mt-10 text-sm">
                Thanks for your message, I will reach out as soon as possible
            </div>
        </div>
    </div>
</template>
