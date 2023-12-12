function getData(connection, query) {
    return new Promise((resolve, reject) => {
        connection.query(query, (error, result) => {
            if (error) {
                console.log('Error in getData:', error.message);
                reject(error);
            } else {
                const data = result;
                // console.log('Data from getData:', data);
                resolve(data);
            }
        });
    });
}

// home --> contains blogs/cards
const home = async (req, res) => {

    try {

        const connection = req.conn
        const medicinesQuery = `SELECT Id, drugName FROM Medicines`

        const medicines = await getData(connection, medicinesQuery)

        // console.log(medicines, category)

        // console.log(medicines, category)
        res.render('home', { medicines: medicines })


    } catch (error) {

        console.log(error.message)
    }

}

// about
const about = (req, res) => {

    res.render('about')
}

// contact
const contact = (req, res) => {

    res.render('contact')
}

// send email 
const sendEmail = (req, res) => {

    const { name, email, message } = req.body
}

module.exports = {
    home,
    about,
    contact, sendEmail
}