// Une promise (promesse):
// let promiseExample = fetch( 'https://www.boredapi.com/api/activity' )
// console.log(promiseExample)

const activity = document.createElement('h1')
document.body.appendChild(activity)

function showOneActivity() {
    // this SYNCHRONOUS code is read
    console.info("🚀 Let's go!!!")

    // This ASYNCH code is read appart and will appear aftet line 47
    fetch( 'https://www.boredapi.com/api/activity' )
        .then( response => {
            console.log( response );
        return response.json();
        // ASYNCH
        }).then( json => {
            let completeActivity = json
        console.log( completeActivity );

            let oneActivity = json.activity
        console.log( oneActivity );

        activity.innerHTML = `😃 You could 👉🏼  ${oneActivity}! 🕺🏼💡`;

        // ASYNCH
        }).catch( error => {
        console.error( error )
        })
    // This SYNCHRONOUS code will appear in the console before the fetch result
    console.info("✅ done!!")
    // alert("✅ done!!")
}



// function showBreweries() {

//     fetch('https://api.openbrewerydb.org/breweries?by_city=brighton')
//         .then(function (response) {
//             console.log(response);
//         return response.json();

//         }).then(function (json){
//         let breweries = json
//         console.log(breweries)
        
//         }).catch(function (error) {
//         console.error(error)
//         })
// }
