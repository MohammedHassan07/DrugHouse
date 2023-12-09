console.log('home.js')


const row = document.getElementById('row')

row.addEventListener('click', async (e) => {

    const card = e.target.closest('.card')

    if (card) {
        const title = card.querySelector('p').innerText

        // console.log('clicked', title)

        const url = `http://localhost:3000/blog-content?q=${title}`

        const res = await getData(url)

        // console.log(typeof res)
        // console.log(res)


        const detailBox = document.getElementById('drug-detail-box')
        
        const drugName = document.getElementById('drugName')
        drugName.innerHTML = res.drugName

        const img = document.getElementById('drugImg').setAttribute('src', `${res.strucutural_Formula_URL}`)
        const iupacName = document.getElementById('iupacName').innerHTML = res.IUPAC_Name
        const contraindication = document.getElementById('contraindication').innerHTML = res.IUPAC_Name
        const adverseEffect = document.getElementById('adverse-effect').innerHTML = res.adverse_Effect
        const dosing = document.getElementById('dosing').innerHTML = res.adverse_Effect

        detailBox.style.display = 'block'
        const closeBox = document.getElementById('close-box').addEventListener('click', (e) => {

            e.preventDefault()

            console.log('closed')
            detailBox.style.display = 'none'
        })
    }
})


const author = document.getElementById('author')

author.addEventListener('change', async () => {


    row.innerHTML = ''
    const authorName = author.value

    const url = `http://localhost:3000/author/blog-content?author=${authorName}`
    const res = await getData(url)
    // console.log(res)


    res.response.forEach(element => {

        const card = document.createElement('div')
        card.classList.add('card')

        card.innerHTML = `

            <div class="drug-name">
                <p>${element.Category}</p>
            </div>

            <div>
                <img id="card-img" src="${element.strucutural_Formula_URL}" alt="Images">
            </div>
 
        `
        row.appendChild(card)

    })
})

// drug-detail-box

async function getData(url) {


    const response = await fetch(url, {

        method: 'GET',

    })

    const res = await response.json()
    return res
}
