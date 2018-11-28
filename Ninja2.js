function Ninja(ninjaName){
  this.name = ninjaName;
  this.health = 100;
  var speed = 3;
  var strength = 100;

  this.getSpeed = function(){
    return speed;
    }
  this.getStrength = function(){
    return strength;
  }
  };
  Ninja.prototype.sayName = function() {
    console.log("My name is "+ this.name);
  }
  Ninja.prototype.showStats = function() {
    console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.getSpeed() + ", Strength: " + this.getStrength());
  }
  Ninja.prototype.drinkSake = function() {
    this.health += 10;
  }
  Ninja.prototype.punch = function(ninjaName){
      if(ninjaName instanceof Ninja){
      this.punchedNinja = ninjaName;
      ninjaName.health -= 5;
      console.log("You punched " + this.punchedNinja.name );
    }else{
      console.log("That is not a ninja!")
    }
  }
  Ninja.prototype.kick = function(ninjaName){
    if(ninjaName instanceof Ninja){
      this.kickedNinja = ninjaName;
      ninjaName.health -= 15;
      console.log("You kicked " + this.kickedNinja.name);
    }else{
      console.log("This is not a ninja!")
    }
  }
  var ninja1 = new Ninja("Hyabusa");
  var ninja2 = new Ninja("Kyle");
  ninja1.punch(ninja2);
  ninja1.kick(ninja2)
  ninja2.showStats();
