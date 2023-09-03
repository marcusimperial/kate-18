const evalString = (value) => {
    let string = value.replace(/\s/g,'');
    if (string.startsWith(`0`)) string = string.slice(1, string.length);
    else if (string.startsWith(`63`)) string = string.slice(2, string.length);
    else if (string.startsWith(`+63`)) string = string.slice(3, string.length);
    return string;
};

console.log(evalString('6391789 9200'))