function generateRandomNum() {
    return Math.floor(Math.random() * 100) + 1;
}

function celciusFahr(celcius) {
    return (celcius * 9) / 5 + 32;
}

module.exports ={ 
    celciusFahr,
    generateRandomNum,
}