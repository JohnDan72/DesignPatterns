Object.prototype.log = function() {
    console.log(this)
}

const x = {
    a: 1
}

x.log();



if(!String.prototype.trim){
    String.prototype.trim = function(){
        try {
            return this.replace(/^\s+\s+$/g,'')
        } catch (e) {
            return this
        }
    }
}

const y = "           lalalala   sdsd         "

console.log(y.trim())