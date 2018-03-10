describe('houses', function() {
  it ('should have the correct answers', function() {
    expect(scopeArray1).toEqual(jasmine.any(Array));
    expect(scopeArray1).toContain('street', 'neighbors', 'neighborsSecondFloor');
    expect(scopeArray2).toEqual(['firstFloor', 'secondFloor']);
    expect(scopeArray3).toEqual(['street', 'firstFloor', 'secondFloor']);
    expect(scopeArray4).toEqual(['neighbors', 'neighborsSecondFloor']);
    expect(scopeArray5).toEqual(['secondFloor']);
  })
})

describe('async', function() {
  it('should exist', function() {
    expect(async).toEqual(jasmine.any(Function))
  })

  it('should not change foo before timeout', function() {
    var changed = false;
    async();
    expect(changed).toEqual(false);
  })

  it('should return a promise', function() {
    expect(async().then).toEqual(jasmine.any(Function))
  })

  it('should change foo after promise', function(done) {
    changed = false;
    async().then(function(res) {
      expect(changed).toEqual(true);
      done();
    })
  })
})


describe('context1', function() {

  var getNum = function() {
    return Math.floor(Math.random() * 100);
  }

  it('should exist', function() {
    expect(context1).toEqual(jasmine.any(Function));
  })

  it('should correctly assign context', function() {
    var num = getNum();
    var num2 = getNum(),
    num3 = getNum();

    contextObj.number = num;

    context1(num2, num3);
    expect(contextObj.number).toEqual(num + num2 + num3);
  })
})

describe('context2', function() {
  var getNum = function() {
    return Math.floor(Math.random() * 100);
  }

  it('should exist', function() {
    expect(context2).toEqual(jasmine.any(Function));
  })

  it('should correctly assign context', function() {
    var nums = [getNum(), getNum()]
    var num = getNum();
    contextObj.number = num;

    context2(nums);

    expect(contextObj.number).toEqual(num + nums.reduce(function(a, b) {
      return a + b;
    }))
  })
})

describe('context3', function() {
  var getNum = function() {
    return Math.floor(Math.random() * 100);
  }
  it('should exist', function() {
    expect(context3).toEqual(jasmine.any(Function));
  })

  it('should return a function', function() {
    expect(context3(function() {})).toEqual(jasmine.any(Function))
  })

  it('should assign context correctly', function() {

    let num = contextObj.number = 0;

    expect(context3()(1, 2)).toEqual(3);
  })
})

describe('Sandwich', function() {
  it('should exist', function() {
    expect(Sandwich).toEqual(jasmine.any(Function));
  })
  it('should be a constructor', function() {
    expect(new Sandwich()).toEqual(jasmine.any(Object));
  })

  it('should make a good Sandwich', function() {

    function getIngredients() {
      var bread = ['wheat', 'white', 'sourdough'];
      var meat = ['chicken', 'ham', 'turkey'];
      var spread = ['lettuce', 'tomato', 'bacon'];
      var num = Math.floor(Math.random() * 3);
      return {
        bread: bread[num],
        meat: meat[num],
        spread: spread[num]
      }
    }

    var ingredients = getIngredients();

    expect(
      new Sandwich(ingredients[0], ingredients[1], ingredients[2])
    ).toEqual(jasmine.objectContaining(
      {
        bread: ingredients[0],
        meat: ingredients[1],
        spread: ingredients[2]
      }
    ))
  })
})

describe('RoadTrip', function() {
  it('should exist', function() {
    expect(RoadTrip).toEqual(jasmine.any(Function));
  })

  it('should be a constructor', function() {
    expect(new RoadTrip()).toEqual(jasmine.any(Object));
  })

  it('should have a method called eat', function() {
    expect(new RoadTrip().drive).toEqual(jasmine.any(Function));
  })

  it('should subtract from gasLeft', function() {
    var californiaRoadTrip = new RoadTrip();
    californiaRoadTrip.drive();
    californiaRoadTrip.drive();
    expect(californiaRoadTrip.gasLeft).toEqual(80);
  })
})

describe('addTwo', function () {
  it('should exist', function () {
    expect(Array.prototype.addTwo).toEqual(jasmine.any(Function))
  });

  it('should add two to each item in an array', function () {
    expect([1, 2, 3].addTwo()).toEqual([3, 4, 5]);
  });
});

describe('CoinToss', function() {
  it('should exist', function() {
    expect(CoinToss).toEqual(jasmine.any(Function));
  })
  it('should be a constructor function', function() {
    expect(new CoinToss()).toEqual(jasmine.any(Object));
  })

  it('should make a fair coin toss', function() {
    var game = new CoinToss();
    let possibles = ['tails', 'heads'];

    game.flip();
    game.flip();

    expect(game.results.length).toEqual(2);

    game.results.forEach(function(toss) {
      expect(possibles.indexOf(toss)).toBeGreaterThan(-1);
    })
  })
})

describe('animalMachine', function() {
  it('should exist', function() {
    expect(animalMachine).toEqual(jasmine.any(Function))
  })

  it('should return a function', function() {
    expect(animalMachine()).toEqual(jasmine.any(Function))
  })
  //TODO: randomize sentences
  it('should smash two animals together. *HULK SMASH!*', function() {
    expect(animalMachine('duck')('turtle')).toEqual('duckturtle');
  })
})

describe('partyTime', function() {
  beforeEach(function() {
    this.names = ['Jeremy', 'Brack', 'Brett', 'Brian', 'Jess', 'Stephen'];
    this.guests = ['Arnold', 'Stu', 'Eddie', 'Clayton'];
    this.name = this.names[Math.floor(Math.random() * this.names.length)];
    this.guest = this.guests[Math.floor(Math.random() * this.guests.length)]
    this.party = partyTime(this.name);
  })
  it('should exist', function() {
    expect(partyTime).toEqual(jasmine.any(Function));
  })

  it('should return a function', function() {
    expect(partyTime("Bretts Birthday")).toEqual(jasmine.any(Function))
  })

  it('should add guests', function() {
    var that = this;

    expect(this.party(this.guest))
      .toEqual(jasmine.objectContaining(
        {
          partyName: that.name,
          guestList: [that.guest]
        }
      ))
  })

  it('should not get parties mixed up', function() {
    var newParty = partyTime(this.names[Math.floor(Math.random() * this.names.length)])
    var originalParty = this.party(this.guest);

    expect(newParty).not.toEqual(originalParty);
  })
})

describe('compareValues', function() {
  it('should exist', function() {
    expect(compareValues).toEqual(jasmine.any(Function))
  });

  it('should find exact matches', function() {
    expect(compareValues(7, 7)).toEqual("Exact match")
  });

  it('should find different types matches', function() {
    expect(compareValues(7, "7")).toEqual("Different types")
  });

  it('should find non-matches', function() {
    expect(compareValues(7, "97")).toEqual("Different values")
  });
})
