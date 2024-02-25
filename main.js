const getNumber = async (service, api) => {
    const url = `https://sms-activate.org/stubs/handler_api.php?api_key=${api}&action=getNumber&service=${service}&country=0`

    try {
        const data = await fetch(url)
        const number = await data.text()
        if (number.includes('BAD_KEY') || number.includes('NO_BALANCE')) {
            return console.log('Bad key or no balance')
        }
        if (number.includes('NO_NUMBERS')) {
            console.log('No numbers')
            getNumber(service, api)
        } else {
            return console.log(number)
        }
    } catch (e) {
        console.log(e)
    }
}

const main = async (count, service, api) => {
    for (let i = 0; i < count; i++) {
        await getNumber(service, api)
    }
}

const API = ''
const service = {
    banks: 'md',
    instagram: 'ig',
}
const countNumbers = 2

main(countNumbers, service.banks, API)
