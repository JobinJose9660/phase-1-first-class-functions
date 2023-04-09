function receivesAFunction(spy){
    return spy()

}
receivesAFunction(spy())

function returnsANamedFunction(){
    return function jobin(){}
    
}
returnsANamedFunction()
function returnsAnAnonymousFunction(){
    return function(){}
}
returnsAnAnonymousFunction()

