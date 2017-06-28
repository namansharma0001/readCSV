const csv = require('csvtojson')
const _ = require('underscore')

module.exports = (req, res) => {
    var csvData = []
    csv().fromFile('./Settled.csv')
        .on('json', (row) => {
            csvData.push(row)
        })
        .on('done', (error) => {
            var customers = []
            for (var i in csvData) {
                var customer = csvData[i].Customer
                var customerFound = false
                for (var j in customers) {
                    if (customers[j] == customer)
                        customerFound = true
                }
                if (!customerFound)
                    customers.push(customer)
            }
            for (var i in customers) {
                var Customer = customers[i]
                var winCount = 0
                var Data = []
                var Risky = false
                for (var j in csvData) {
                    if (csvData[j].Customer == Customer) {
                        Data.push(csvData[j])
                        var winAmount = parseInt(csvData[j].Win)
                        if (winAmount > 0)
                            winCount++
                    }
                }
                var winPercent = Math.floor((winCount / Data.length) * 100)
                if(winPercent > 60)
                    Risky = true
                customers[i] = { Customer, winPercent, Risky, Data }
            }
            res.json(customers)
        })
}