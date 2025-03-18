import { defineConfig } from 'vite'

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "./scss/base/_vars.scss"; 
                                @use "./scss/base/_base.scss"; 
                                @use "./scss/base/_reset.scss";
                                @use "./scss/base/_containers.scss";`,
            },
        },
    },
    base: "/True-or-Action-2.0-JS/",
})