var data = []

function Client(date, contact) {
    this.date = date
    this.contact = contact
}

let clients = new Array();

for (var i = 0; i < 4; i++) {
    clients.push(new Client("2018-08-0" + i, i))
}

for (i = 0; i < clients.length; i++) {
    var dict = {}
    dict['Date'] = clients[i].date
    dict['Contact'] = clients[i].contact
    data[i] = dict
}

console.log(data)