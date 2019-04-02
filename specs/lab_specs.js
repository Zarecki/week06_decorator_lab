const assert = require('assert')
const Paint = require('../paint.js')
const Decorator = require('../decorator.js')
const Room = require('../room.js')


describe("Room", function(){

  let room;

  beforeEach(function(){
    room = new Room(25, false);
  });

  it("should have an area", function(){
    const actual = room.area;
    assert.strictEqual(actual, 25);
  });

  it("should start not painted", function(){
    const actual = room.painted;
    assert.strictEqual(actual, false);
  });

  // it("should be able to be painted", function(){
  //   const actual = room.painted;
  //   assert.strictEqual(actual, true);
  // });

    describe("Paint", function(){

      let paint;

      beforeEach(function(){
        paint = new Paint();
      });

      it("should have a number of litres", function(){
        const actual = paint.litres;
        assert.strictEqual(actual, 5);
      });

      it("should be able to check if it is empty", function(){
        const actual = paint.checkIfEmpty()
        assert.strictEqual(actual, false);
      });

    });


});
