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
                        status: 'sent',
                        visibleDelete: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        visibleDelete: false,
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received',
                        visibleDelete: false,
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
                        status: 'sent',
                        visibleDelete: false,
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        visibleDelete: false,
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        visibleDelete: false,
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
                        status: 'received',
                        visibleDelete: false,
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        visibleDelete: false,
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received',
                        visibleDelete: false,
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
                        status: 'sent',
                        visibleDelete: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        visibleDelete: false,
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
                let day = new Date().getDate().toString();
                let month = new Date().getMonth().toString();
                let year = new Date().getFullYear().toString();
                let hours = new Date().getHours().toString();
                let minutes = new Date().getMinutes().toString();
                let seconds = new Date().getSeconds().toString();
                if (day < 10) {
                    day = ("0" + day);
                }
                if (month < 10) {
                    month = ("0" + month);
                }
                if (hours < 10) {
                    hours = ("0" + hours);
                }
                if (minutes < 10) {
                    minutes = ("0" + minutes);
                }
                if (seconds < 10) {
                    seconds = ("0" + seconds);
                }
                const dateNow = day + "/" + month + "/" + year + " " + hours + ":" + minutes + ":" + seconds;

                return dateNow;
            }

            this.contacts[index].lastMessage = this.messageSend;
            let newMessSent = {
                date: newDateNow(),
                text: this.messageSend,
                status: 'sent',
                visibleDelete: false,
            };
            this.contacts[index].messages.push(newMessSent);

            var cont = this.contacts;

            setTimeout(function () { 

                cont[index].lastMessage = "ok";
                let newMessReceived = {
                date: newDateNow(),
                text: 'ok',
                status: 'received',
                visibleDelete: false,
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
        },
        addClassClick(ind, index){
            console.log(ind, index);
            if (this.contacts[index].messages[ind].visibleDelete === false) {
                this.contacts[index].messages[ind].visibleDelete = true;
            } else {
                this.contacts[index].messages[ind].visibleDelete = false;
            }

        },
        deleteMessageClick(ind, index){
            if (this.contacts[index].messages[ind].status === "sent") {
                console.log("ciao");
                Vue.delete(this.contacts[index].messages, ind);
            }
        },
    },
});