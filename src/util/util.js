export function sortByProp(propName){
    return (a,b) => {
        return a[propName] - b[propName];
    }
}






