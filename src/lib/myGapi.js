import store from '../store'
import {receivePrecios} from '../actions'

const CLIENT_ID = '238916020447-f9aqrt7tpdbfq6r6d4kd5kvd0gfvbgek.apps.googleusercontent.com'
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"]
const SPREADSHEET_KEY = '1t5tumNgzh-1SnT8dhf8tLn-h5cFqU6ItjnsGWixhsUQ'
const RANGO = "Data!A:J"
let gapi


export function checkAuth() {
  if(!window.gapi){ 

    window.onload = () => {
      authorize()
      gapi = window.gapi
    }
  } else {
    gapi = window.gapi
    if (!gapi.client.sheets){
      authorize()

    } else {
      console.log("getting data from sheets")
     getDataFromSheets() 
    }
  }
}
function authorize(){
  gapi.auth.authorize({
      'client_id': CLIENT_ID,
      'scope': SCOPES.join(' '),
      'immediate': true
    }, handleAuthResult)
}
function handleAuthResult(authResult) {
  let authorizeDiv = document.getElementById('authorize-div')
  if (authResult && !authResult.error) {
    // Hide auth UI, then load client library.
    authorizeDiv.style.display = 'none'
    loadSheetsApi()
  } else {
    // Show auth UI, allowing the user to initiate authorization by
    // clicking authorize button.
    askAuth()
  }
}

function askAuth(event) {
  gapi.auth.authorize(
    { client_id: CLIENT_ID, scope: SCOPES, immediate: false },
    handleAuthResult)
  return false
}

function loadSheetsApi() {
  let discoveryUrl =
    'https://sheets.googleapis.com/$discovery/rest?version=v4';
  gapi.client.load(discoveryUrl).then(getDataFromSheets);
}

function getDataFromSheets() {
  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_KEY,
    range: RANGO,
  })
    .then((response) => {
      let range = response.result
      store.dispatch(receivePrecios(mapData(range.values)))
    }, (response) => alert('error'))
}

function mapData(rawData){
    return rawData.map(row => {
        return {
          codigo: row[0],
          nombre: row[1], 
          unidad: row[3],
          precioSinIva: row[6],
          precioEnvio: row[7],
          iva: row[8],
          precioFinal: row[9]
         }
      }).filter(row => row.nombre).slice(2)
}