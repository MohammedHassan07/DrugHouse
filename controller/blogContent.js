const blogContent = (req, res) => {

    const conn = req.conn
    const title = req.query.q
    console.log(title)

    const query = `SELECT * FROM Medicines WHERE category = "${title}"`;

    conn.query(query, (error, result) => {

        if (error) console.log(error.message)

        else {

            const response = result[0]
            console.log(response)
            res.render('blog', { response })
        }
    })

}

const blogContentUsingId = (req, res) => {

    const id = req.query.id
    const conn = req.conn

    const query = `SELECT * FROM Medicines WHERE Id = "${id}"`

    conn.query(query, (error, result) => {

        if (error) res.status(500).json({ message: 'Internal Server Error' })
        else {

            res.status(200).send({ result: result[0] })

        }
    })
}

const blogByAuthor = (req, res) => {

    try {

        let query = `SELECT * FROM Medicines`
        const author = req.query.author

        if (author === 'Select') query = `SELECT * FROM Medicines`
        else query = `SELECT * FROM Medicines WHERE category = "${author}"`

        console.log(author)

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