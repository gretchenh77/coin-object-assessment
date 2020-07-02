const bodyElement = document.querySelector('body')

const mainElement = document.createElement('main')
bodyElement.append(mainElement)

const imgElement = document.createElement('img')
imgElement.className = 'image'
imgElement.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.eBfdUdje49J-uEcElFG-wgHaHS%26pid%3DApi&f=1'
mainElement.append(imgElement)






let coin = {
    state: 0,
    flip: function() {
         this.state = Math.round(Math.random())
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    
        },
    
    toString: function() {
        coin.flip()
        if (this.state === 1) {
            return "Heads "
        } else{
            return "Tails "
        }
        
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        coin.flip()
        let image = document.createElement('img');
        if (this.state) {
            image.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.eBfdUdje49J-uEcElFG-wgHaHS%26pid%3DApi&f=1'
        } else {
            image.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.bdIH4efSZv0__msK5PbtcwAAAA%26pid%3DApi&f=1'
        }
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
       document.body.append(image);
    }
    
};

function display20Flips() {
   for(let index = 0; index < 20; index +=1) {
      document.body.append(coin.toString()) 
   } 
}
display20Flips()

function display20Images() {
    for(let index = 0; index < 20; index +=1) {
     coin.toHTML()
    }
}
display20Images()