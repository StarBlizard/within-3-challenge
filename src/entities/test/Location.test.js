const expect = require("chai").expect;

const { LocationModel } = require('../Location.ts');

describe('Entities/Location', () => {
  const db = await mongoose.connect(env.db);
  await db.connection;

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
