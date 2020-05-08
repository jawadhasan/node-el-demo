var client = require('./connection.js');


client.cluster.health({},function(err,resp,status) {  
    console.log("-- Client Health --",resp);
  });

//Throws error
// try {
//     const response = await client.cluster.health({});
//     console.log(response)
//   } catch (error) {
//     console.trace(error.message)
//   }


//async way
async function checkHealth(q) {
    try {
      const response = await client.cluster.health({});
      console.log(response)
    } catch (err) {
      console.error(err)
    }
  }
  checkHealth();




//node infoasybc