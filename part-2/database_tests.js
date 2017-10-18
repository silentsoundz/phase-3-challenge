const assert = require('chai').assert;
const{
  getItemsBySection,
  getOrderByShopperId,
  getRealShoppers
} = require('./database')

describe('getItemsBySection', () => {
  it('returns the items "Flour", "Pasta", and "Rice"', () => {
    return getItemsBySection("bulk")
      .then(bulkItems => {
        assert.deepEqual(bulkItems[0]['name'], "Flour")
        assert.deepEqual(bulkItems[1]['name'], "Pasta")
        assert.deepEqual(bulkItems[2]['name'], "Rice")
      })
  })
})

describe('getOrderByShopperId(id)', ()=> {
  it('test the database function for the command `shopper-orders`', ()=> {
    return getOrderByShopperId('2')
    .then(results => {
      assert(results[0]["order_id"], '2')
      assert(results[1]["order_id"], '7')
      assert(results[0]["total_cost"], '10.62')
      assert(results[1]["total_cost"], '7.89')
    })
  })
})

describe('getRealShoppers()', () => {
  it('test the database function for the command `real-shoppers`', () => {
    return getRealShoppers()
    .then(results => {
      assert(results[0]["first_name"], 'Tyrion')
      assert(results[0]["count"], '2')
      assert(results[2]["first_name"], 'Arya')
      assert(results[2]["count"], '2')
      assert(results[4]["first_name"], 'Daenerys')
      assert(results[4]["count"], '2')
    })
  })
})



