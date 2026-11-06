const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017/statsdb')

client.connect()
    .then(() => {
        //const db = client.db('statsdb');
        //console.log('Connected to statsdb successfully!');
        //return client.close();

        var dbo = client.db('statsdb');
        /*dbo.createCollection('uscensus').then(function() {
            console.log('Collection created successfully!');
            client.close();
        })*/

        /*var stats =[
            {
                'city': 'San Juan', 
                'zip': '00926', 
                'state': 'PR', 
                'income': '34781',
                'age': '44'
            },
            {
                'city': 'Corona', 
                'zip': '11368', 
                'state': 'NY', 
                'income': '50797',
                'age': '32'
            },
            {
                'city': 'Chicago', 
                'zip': '60629', 
                'state': 'IL', 
                'income': '42019',
                'age': '31'
            },
            {
                'city': 'El Paso', 
                'zip': '79936', 
                'state': 'TX', 
                'income': '54692',
                'age': '31'
            },
            {
                'city': 'Los Angeles', 
                'zip': '90011', 
                'state': 'CA', 
                'income': '36954',
                'age': '28'
            },
            {
                'city': 'Norwalk', 
                'zip': '90650', 
                'state': 'CA', 
                'income': '66453',
                'age': '35'
            }
        ];*/

        /*var newstats =[
            {
                'city': 'Pacoima', 
                'zip': '91331', 
                'state': 'CA', 
                'income': '60360',
                'age': '33'
            },
            {
                'city': 'Ketchikan',
                'zip': '99950',
                'state': 'AK',
                'income': '00000',
                'age': '00'
            }
        ];

    dbo.collection('uscensus').insertMany(newstats).then(function(res) {
        console.log("Number of documents inserted: " + res.insertedCount);
    });*/

    /*dbo.collection('uscensus').findOne({city: 'Corona', state: 'NY'}).then(function(res) {
            console.log(res.zip);
            client.close();
        })*/

    /*var query = {state: 'CA'}
    dbo.collection('uscensus').find(query)
    .toArray()
    .then(items => {
        console.log(items);
        client.close();
    })*/

    /*var query = {state: 'AK'}
    var newvalues = {$set: {income: '38910', age: '46'}}
    dbo.collection('uscensus').updateOne(query, newvalues)
    .then(res => {
        console.log(res.modifiedCount + " document(s) updated");
        client.close();
    })*/

    var mysort = {state: 1}
    dbo.collection('uscensus').find()
    .sort(mysort)
    .toArray()
    .then(items => {
        console.log('Sorted by state:');
        console.log(items);
        client.close();
    })

})

    .catch(error => console.log('Failed to connect', error));