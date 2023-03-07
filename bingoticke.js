let tickets = [];
let ticketId = "ticketNo";
function bingoTickets() {
    for (let i = 1; i <= 10; i++) {
        let ticketArr = [];
        let ticketName = ticketId + i;
        while (ticketArr.length < 25) {
            let randomNumber = Math.floor(Math.random() * 90 + 1);

            if (!ticketArr.includes(randomNumber)) {
                ticketArr.push(randomNumber);

            }
        }
        tickets.push({ ticketId: ticketName, ticketArr });
    }
    return tickets;
}
console.log(bingoTickets());