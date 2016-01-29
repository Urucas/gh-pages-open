import url from '../lib/index.js'
import chai from 'chai'
import validUrl from 'valid-url'

let should = chai.should(),
  expect = chai.expect

describe("Test url parser", () => {
  
  it("Test parser generates a correct url", (done) => {
    url(process.cwd(), (err, url) => {
      expect(err).to.equal(null)
      validUrl.isUri(url).should.not.equal(undefined)
      expect(url).to.contain('.github.io')
      done()
    })
  })
})
