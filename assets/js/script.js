const SECRET_KEY = "$2a$10$T6v.crtYb3o1FBUBf3dsg.ly66bbc3B7Z8N7B/4UB6kjbBMCt.MDS"
const BIN_KEY = "654e07090574da7622c4a11a"

let adressesJSON;
const urlApi = "https://api.jsonbin.io/v3";
await getDataFetch();
console.log(adressesJSON)
async function getDataFetch () {
    const res = await fetch(urlApi + "/b/" + BIN_KEY, {
        method:'GET',
        headers: {
            "X-Master-Key":SECRET_KEY
        }
    })
    adressesJSON = await res.json();
}