// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array;
}

// Desafio 4
function concatName(stringsArray) {
  let lastString = stringsArray[stringsArray.length - 1];
  let preString = [lastString + ", " + stringsArray[0]];
  let string = preString.join(", ");
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosWins = wins * 3;
  let pontosTies = ties * 1;
  let points = pontosTies + pontosWins;
  return points;
}

// Desafio 6
function highestCount(array) {
  let maiorAteAgora = 0;
  let contador = 0;
  let numeroAbsoluto = 0;
  for(let num = 0; num < array.length; num +=1) {
    numeroAbsoluto = Math.abs(array[num]);
    if(numeroAbsoluto > maiorAteAgora) {
        maiorAteAgora = array[num];
    }
  }

  for(let i in array) {
    if(maiorAteAgora === array[i]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(cat1 - mouse);
  let distancia2 = Math.abs(cat2 - mouse);
  let resultado = "";
  if(distancia1 < distancia2) {
    resultado = 'cat1';
  }else if(distancia1 > distancia2) {
    resultado = 'cat2';
  }else if(distancia1 == distancia2) {
    resultado = 'os gatos trombam e o rato foge';
  }
  return resultado;
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
    resultado.push("fizzBuzz");
    } else if (array[i] % 3 === 0) {
        resultado.push("fizz");
    } else if (array[i] % 5 == 0) {
      resultado.push("buzz");
    } else {
      resultado.push("bug!");
    }
  }
  return resultado;
}

// Desafio 9
function encode(string) {
  let encoded = string;
  encoded = encoded.replace(/e/gi, '2');
  encoded = encoded.replace(/a/gi, '1');
  encoded = encoded.replace(/i/gi, '3');
  encoded = encoded.replace(/o/gi, '4');
  encoded = encoded.replace(/u/gi, '5');
  return encoded;
}

function decode(string) {
  let encoded = string;
  encoded = encoded.replace(/2/gi, 'e');
  encoded = encoded.replace(/1/gi, 'a');
  encoded = encoded.replace(/3/gi, 'i');
  encoded = encoded.replace(/4/gi, 'o');
  encoded = encoded.replace(/5/gi, 'u');
  return encoded;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
