
nes(1)(2)(3)(4);
function nes(x){
     return function (y){
        return function (z){
            return function (a){
                console.log(x,y,z,a);
            }
        }

    }
}