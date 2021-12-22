import Vue from 'vue';

export default Vue.observable({
    inputRicerca: '',
    films: '',
    series: '',
    apiKey: 'a4a9b8d54eb726132cc1223964c218f1',
    languageFlags: ['en', 'it', 'es', 'fr', 'de'],
    flags: {
        en: 'https://cdn-icons-png.flaticon.com/512/197/197374.png',
        it: 'https://cdn-icons-png.flaticon.com/512/197/197626.png', 
        es: 'https://cdn-icons-png.flaticon.com/512/197/197593.png',
        fr: 'https://cdn-icons-png.flaticon.com/512/197/197560.png',
        de: 'https://cdn-icons-png.flaticon.com/512/197/197571.png'
    },
    
});