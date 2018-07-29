var Letter = function(ltr) {
    // property to store 
      this.letter = ltr;
    // property/boolean 
      this.appear = false;
    
      this.letterRender = function() {
        if(this.letter == ' '){ 
          this.appear = true;
          return '  ';
        }if(this.appear === false){ 
          return ' _ ';
        } else{ 
          return this.letter;
        }
    
      };
    };
    
    // export to use in word.js
    module.exports = Letter;