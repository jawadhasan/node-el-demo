
async function makeQuery(q) {
    try {
      const response = await client.search({q: q})
      console.log(response)
    } catch (err) {
      console.error(err)
    }
  }
  
  makeQuery('*')

  //node searchExample