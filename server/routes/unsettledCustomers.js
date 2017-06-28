const csv = require('csvtojson')
const _ = require('underscore')

module.exports = (req, res) => {
    var csvData = []
    csv().fromFile('./Unsettled.csv')
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
                var data = []
                for (var j in csvData) {
                    if (csvData[j].Customer == Customer) {
                        data.push(csvData[j])
                    }
                }
                var totalStake = 0
                for (var j in data) {
                    totalStake += parseInt(data[j].Stake)
                }
                var Average = Math.floor(totalStake / data.length)
                console.log(Customer, totalStake, data.length)
                customers[i] = { Customer, Average }
            }
            console.log(customers)
            for (var i in csvData) {
                var customer
                for (var j in customers) {
                    if (csvData[i].Customer == customers[j].Customer) {
                        customer = customers[j]
                        break
                    }
                }
                var stake = parseInt(csvData[i].Stake)
                var unusual = customer.Average * 10
                var veryUnusual = customer.Average * 30
                console.log(stake, unusual, veryUnusual)
                if (stake > unusual) {
                    csvData[i].status = 'Risky'
                }
                else if (stake > veryUnusual) {
                    csvData[i].status = 'Very Risky'
                }
                else if (stake > 1000) {
                    csvData[i].status = 'Risky'
                }
                else {
                    csvData[i].status = 'OK'
                }
            }
            res.json(csvData)
        })
}