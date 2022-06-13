const expect = require("chai").expect;

const { LocationModel } = require('../Location.ts');

describe('Entities/Location', () => {
  it('should be invalid if name is empty', function(done) {
    const location = new LocationModel({ county: {} });

    location.validate(function(err) {
      expect(err.errors.county).to.exist;
      done();
    });
  });
  
  it('should be invalid if name is empty', function(done) {
    const location = new LocationModel({
      city: 'test',
      county: 'testc',
      zipcode: '10012',
    });

    location.validate(function(err) {
      expect(err).to.not.exist;
      done();
    });
  });
});
