  class Character{
    constructor(name, age, favoritesong){
      this.name = name;
      this.age = age;
      this.favoritesong = favoritesong;
    }
       getName(){
         return this.name +" " + this.favoritesong;
       }
      }
    }

let myCharacter = new Character("Tim","17", "We Are Young");
let anotherCharacter = new Character("Ronda","28", "My Heart Will Go On");
let anotherCharacter = new Character("Emma","21","Thriller");
let anotherCharacter = new Character("James","25","Teardrops on my Guitar");

console.log(myCharacter);
