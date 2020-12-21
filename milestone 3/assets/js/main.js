let app = new Vue({
    el: "#app",
    data: {
        messageSend: "",
        user: {
            name: 'Nome Utente',
            avatar: './assets/img/avatar_io.jpg',
        },
        contacts: [
            {
                name: 'Michele',
                avatar: './assets/img/avatar_1.jpg',
                visible: true,
                lastAccess: "10/01/2020 16:15:22",
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Fabio',
                avatar: './assets/img/avatar_2.jpg',
                visible: false,
                lastAccess: "20/03/2020 16:30:55",
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: './assets/img/avatar_3.jpg',
                visible: false,
                lastAccess: "28/03/2020 16:15:22",
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: './assets/img/avatar_6.jpg',
                visible: false,
                lastAccess: "10/01/2020 15:50:00",
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ]
    },
    methods: {
        active(index){
            for (let i = 0; i < this.contacts.length; i++) {
                this.contacts[i].visible = false;
            }
            this.contacts[index].visible = true;
        },
        newMessage(index){
            
            function newDateNow(){
                var day = new Date().getDate().toString();
                var month = new Date().getMonth().toString();
                var year = new Date().getFullYear().toString();
                var hours = new Date().getHours().toString();
                var minutes = new Date().getMinutes().toString();
                var seconds = new Date().getSeconds().toString();
                var dateNow = day + "/" + month + "/" + year + " " + hours + ":" + minutes + ":" + seconds;

                return dateNow;
            }

            let newMessSent = {
                date: newDateNow(),
                text: this.messageSend,
                status: 'sent',
            };
            this.contacts[index].messages.push(newMessSent);

            var cont = this.contacts;

            setTimeout(function () { 

                let newMessReceived = {
                date: newDateNow(),
                text: 'ok',
                status: 'received',
                };
                cont[index].messages.push(newMessReceived);
                cont[index].lastAccess = newDateNow();

            },1000);

        }
    },
});