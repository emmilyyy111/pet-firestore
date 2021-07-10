// Connect to Firestore
const admin = require("firebase-admin") //bringing in a library called admin
const creds = require("./credentials.json") 

admin.initializeApp({
  credential: admin.credential.cert(creds) //connected
})

// Now here we are connected to all of the services in our firebase project
const db = admin.firestore() //connect to firestore creating a shortcut and call it db

// Create a customer object
const newCustomer = {
    firstName: 'Noah',
    lastName: 'Albert',
    tel: '561-413-7707',
    email: 'no.albert113@gmail.com',
    dob: '2003-11-03',
    pets: [{
        name: 'Cindy',
        type: 'dog',
        size: 'Medium',
        age: 3
    }, {
        name: 'Dragon',
        type: 'salamander',
        size: 'small',
        age: 5
    }]
}
db.collection('customers').add(newCustomer) //db which is firestore, add noah
    .then(doc => console.log('Created customer', doc.id)) // if comes back create customer w id
    .catch(err => console.error('Error adding customer:', err)) // if comes back with error than returns err

// Get all customers
db.collection('customers').get() // go to customers section and get all docs from customers
    .then(collection => {
        //console.log results
        const allCustomers = Collection.docs.map(doc => doc.data()) // grab doc data save into an array and console.log the array
        console.log(allCustomers)
    })
    .catch(err => console.error('Error getting customers:', err))

// console.log results