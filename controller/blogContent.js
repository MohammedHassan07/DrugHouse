const path = require('path')
const fs = require('fs/promises')
const { response } = require('express')

const blogContent = (req, res) => {

    const conn = req.conn
    const drugName = req.query.q
    // console.log(drugName)

    const query = `SELECT * FROM Medicines WHERE drugName = "${drugName}"`;

    conn.query(query, async (error, result) => {

        if (error) console.log(error.message)

        else {
            const medicine = result[0]

            const drugImageName = medicine.drugName

            const imagePath = path.join(__dirname, '/public/images/drugs/', drugImageName + '.png')
            const pathSegm = path.normalize(imagePath).split(path.sep)

            const controller = pathSegm.indexOf('controller')

            if (controller !== -1) {
                pathSegm.splice(controller, 1)
            }

            const newImgPath = pathSegm.join(path.sep)

            try {

                const imgBinaryData = await fs.readFile(newImgPath, { encoding: 'base64' })
                medicine.drugImage = imgBinaryData
            } catch (error) {

                console.log(error.message)
            }

            // console.log(medicine)
            res.render('detail', {medicine})
        }
    })
}

const blogContentUsingId = (req, res) => {

    const id = req.query.id
    const conn = req.conn

    // console.log(id)

    const query = `SELECT * FROM Medicines WHERE Id = "${id}"`

    conn.query(query, (error, result) => {

        if (error) {

            res.status(500).json({ message: 'Internal Server Error' })

            // console.log(error.message)
        }

        else {

            res.status(200).send({ result: result[0] })
            // console.log(result)
        }
    })
}

const blogByAuthor = (req, res) => {

    try {

        let query = `SELECT * FROM Medicines`
        const author = req.query.author

        if (author === 'Select') query = `SELECT * FROM Medicines`
        else query = `SELECT * FROM Medicines WHERE drugName = "${author}"`

        // console.log(author)

        const connection = req.conn

        connection.query(query, (error, result) => {

            if (error) console.log(error.message)

            else {

                const response = result

                res.status(200).json({ response })
            }
        })

    } catch (error) {
        console.log(error.message)
    }
}

module.exports = { blogContent, blogContentUsingId, blogByAuthor }