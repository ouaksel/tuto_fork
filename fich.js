
function getPonyFullName(pony){
    if(pony.isChampion){
        let name = 'champion' + pony.name; 
        return name;
    }
    return pony.name;
}