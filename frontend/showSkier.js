console.log("HITSHOWPAGEHIT")

const queryParams = new URLSearchParams (window.location.search)
const skierId = queryParams.get('id')

console.log(skierId)