module.exports = {
    getHouses: (req, res) => {
        const db = req.app.get('db')
        db.get_houses()
            .then(result => {
                res.status(200).send(result)
            })
            .catch(err => {
                console.log(err)
            })
    },
    addHouse: (req, res) => {
        const db = req.app.get('db')
        const {name, address, city, state, zipcode} = req.body
        db.add_house([name, address, city, state, zipcode])
            .then(result => {
                res.status(200).send(result)
            })
    }
}