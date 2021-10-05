import Vue from 'vue'
import Vuetify, {
    VApp,
    VRow,
    VCol,
    VCard,
    VCardTitle,
    VCardText,
    VForm,
    VTextField,
    VMenu,
    VDatePicker,
    VCheckbox,
    VBtn,
    VDivider,
    VIcon,
    VSelect,
    VSpacer,
    VCalendar,
} from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
    components: { 
        VApp,
        VRow,
        VCol,
        VCard,
        VCardTitle,
        VCardText,
        VForm,
        VTextField,
        VMenu,
        VDatePicker,
        VCheckbox,
        VBtn,
        VDivider,
        VIcon,
        VSelect,
        VSpacer,
        VCalendar,
     },
})

const opts = {}

export default new Vuetify(opts)