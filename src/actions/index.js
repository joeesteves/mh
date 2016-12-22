const CLIENT_ID = '238916020447-f9aqrt7tpdbfq6r6d4kd5kvd0gfvbgek.apps.googleusercontent.com'
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"]
const SPREADSHEET_KEY = '18ZJj73C_jX-vOSuyj2HQEpqNr5PTKEB4Ju5kQmt8vy0'
const RANGO = "Hoja 1!A:B"

let localDispatch
let gapi

export const fetchPrecios = (dispatch) => {
  localDispatch = dispatch
  gapi = window.gapi
  checkAuth()
}



function checkAuth() {
  console.log("checkAuth")
  gapi.auth.authorize(
    {
      'client_id': CLIENT_ID,
      'scope': SCOPES.join(' '),
      'immediate': true
    }, handleAuthResult);
}

function handleAuthResult(authResult) {
  console.log("handleRes")
  var authorizeDiv = document.getElementById('authorize-div');
  if (authResult && !authResult.error) {
    // Hide auth UI, then load client library.
    authorizeDiv.style.display = 'none';
    loadSheetsApi();
  } else {
    // Show auth UI, allowing the user to initiate authorization by
    // clicking authorize button.
    handleAuthClick()
  }
}

function handleAuthClick(event) {
  gapi.auth.authorize(
    {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
    handleAuthResult);
  return false;
}

function loadSheetsApi() {
  var discoveryUrl =
    'https://sheets.googleapis.com/$discovery/rest?version=v4';
  gapi.client.load(discoveryUrl).then(listMajors);
}


function listMajors() {
  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_KEY,
    range: RANGO,
  }).then(function(response) {
    let range = response.result;
    localDispatch({type:'RECEIVE_PRECIOS', data: range.values})  
  }, function(response) {
      alert('error')

  });
}