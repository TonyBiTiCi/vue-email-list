const {createApp} = Vue 

createApp({
    data() {
        return {
            emailsArray: [],

        }
    },
    mounted() {
        console.log("caricato");

        for (i=0 ; i<11; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail") 
            .then
            ( (datoindietro) => {

                console.log.datoindietro;
                const result = datoindietro.data.response
                console.log(datoindietro.data.response);
                this.emailsArray.push(result)

        })
    }
}


}).mount("#app")



//OGGETTO
// {
//     name: antonio;
//     datanascita: "16marzo";
//     sesso: "M";
// };