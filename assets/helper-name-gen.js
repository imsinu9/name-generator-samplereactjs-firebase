function toTitleCase(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function getPrefix(q) {
    return q.substring(0, Math.floor((q.length)*(0.6)));             
}

function getSuffix(q,c){
   return q.substring(c);
}
