let app = new Vue({
    el: "#app",
    data: {
        messageSend: "",
        filterContacts: "",
        user: {
            name: 'Nome Utente',
            avatar: './assets/img/avatar_io.jpg',
        },
        contacts: [
            {
                name: 'Michele',
                avatar: './assets/img/avatar_1.jpg',
                visible: true,
                visibleFilter: true,
                lastAccess: "10/01/2020 16:15:22",
                lastMessage: "Tutto fatto!",
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
                visibleFilter: true,
                lastAccess: "20/03/2020 16:30:55",
                lastMessage: "Mi piacerebbe ma devo andare a fare la spesa.",
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
                visibleFilter: true,
                lastAccess: "28/03/2020 16:15:22",
                lastMessage: "Ah scusa!",
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
                visibleFilter: true,
                lastAccess: "10/01/2020 15:50:00",
                lastMessage: "Si, ma preferirei andare al cinema",
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
                let day = new Date().getDate();
                let month = new Date().getMonth();
                let year = new Date().getFullYear();
                let hours = new Date().getHours();
                let minutes = new Date().getMinutes();
                let seconds = new Date().getSeconds();
                if (day < 10) {
                    day = ("0" + day).toString();
                }
                if (month < 10) {
                    month = ("0" + month).toString();
                }
                if (hours < 10) {
                    hours = ("0" + hours).toString();
                }
                if (minutes < 10) {
                    minutes = ("0" + minutes).toString();
                }
                if (seconds < 10) {
                    seconds = ("0" + seconds).toString();
                }
                const dateNow = day + "/" + month + "/" + year + " " + hours + ":" + minutes + ":" + seconds;

                return dateNow;
            }

            this.contacts[index].lastMessage = this.messageSend;
            let newMessSent = {
                date: newDateNow(),
                text: this.messageSend,
                status: 'sent',
            };
            this.contacts[index].messages.push(newMessSent);

            var cont = this.contacts;

            setTimeout(function () { 

                cont[index].lastMessage = "ok";
                let newMessReceived = {
                date: newDateNow(),
                text: 'ok',
                status: 'received',
                };
                cont[index].messages.push(newMessReceived);
                cont[index].lastAccess = newDateNow();

            },1000);

        },
        filterUsers(){
            console.log(this.filterContacts);
            for (let i = 0; i < this.contacts.length; i++) {
                if (this.contacts[i].name.toLowerCase().includes(this.filterContacts)) {
                    this.contacts[i].visibleFilter = true;
                } else {
                    this.contacts[i].visibleFilter = false;
                }                
            }
        }
    },
});