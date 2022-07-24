// Desafio 10
function techList(arrayTechs, nomeEstudante) {
  let resultado = [];
  let array = arrayTechs.sort();
  for (let tech in arrayTechs) {
    resultado.push({ tech: array[tech], name: nomeEstudante });
  }

  if (resultado.length === 0) {
    resultado = 'Vazio!';
  }
  return resultado;
}

// Desafio 11
function checkPhoneLength(array) {
  let saidaCheckLength = false;
  if (array.length !== 11) {
    saidaCheckLength = false;
  } else {
    saidaCheckLength = true;
  }
  return saidaCheckLength;
}

function checkPhoneNumberRepeat(array) {
  let saidaCheckRepeat = true;
  let contador = 0;
  for (let num in array) {
    contador = 0;
    for (let k in array) {
      if (array[num] === array[k]) {
        contador += 1;
      }
    } if (contador >= 3) {
      saidaCheckRepeat = false;
    }
  }

  return saidaCheckRepeat;
}

function checkPhoneNumber(array) {
  let saidaCheck = true;
  for (let num in array) {
    if (array[num] < 0 || array[num] > 9) {
      saidaCheck = false;
    }
  }
  return saidaCheck;
}

function generatePhoneNumber(array) {
  let retorna = '';
  let numeroFinal = ['('];

  if (checkPhoneLength(array) !== true) {
    retorna = 'Array com tamanho incorreto.';
  } else if (checkPhoneNumber(array) !== true) {
    retorna = 'não é possível gerar um número de telefone com esses valores';
  } else if (checkPhoneNumberRepeat(array) !== true) {
    retorna = 'não é possível gerar um número de telefone com esses valores';
  } else {
    for (let i = 0; i <= array.length + 1; i += 1) {
      if (i < 2) {
        numeroFinal.push(array[i]);
      } else if (i === 2) {
        numeroFinal.push(') ');
      } else if (i >= 3 && i <= 7) {
        numeroFinal.push(array[i - 1]);
      } else if (i === 8) {
        numeroFinal.push('-');
      } else {
        numeroFinal.push(array[i - 2]);
      }
      retorna = numeroFinal.join('');
    }
  }
  return retorna;
}

// Desafio 12
function checkLineLengthMenor(lineA, lineB, lineC) {
  let linhaA = Math.abs(lineA);
  let linhaB = Math.abs(lineB);
  let linhaC = Math.abs(lineC);
  let retorna = '';
  if (linhaA < (linhaB + linhaC)) {
    retorna = 'lineA <';
  } else if (linhaB < (linhaA + linhaC)) {
    retorna = 'lineB <';
  } else if (linhaC < (linhaA + linhaB)) {
    retorna = 'lineC <';
  } else {
    retorna = false;
  }
  return retorna;
}
function checkLineMaior(lineA, lineB, lineC) {
  let linhaA = Math.abs(lineA);
  let linhaB = Math.abs(lineB);
  let linhaC = Math.abs(lineC);
  let retorna = '';

  if (linhaA > (linhaB + linhaC)) {
    retorna = false;
  } else if (linhaB > (linhaA + linhaC)) {
    retorna = false;
  } else if (linhaC > (linhaA + linhaB)) {
    retorna = false;
  } else {
    retorna = true;
  }
  return retorna;
}

function checkLineDiff(lineA, lineB, lineC) {
  let linhaA = Math.abs(lineA);
  let linhaB = Math.abs(lineB);
  let linhaC = Math.abs(lineC);
  let retorna = '';
  if (linhaA > (linhaB - linhaC)) {
    retorna = 'lineA <';
  } else if (linhaB > (linhaA - linhaC)) {
    retorna = 'lineB <';
  } else if (linhaC > (linhaA - linhaB)) {
    retorna = 'lineC <';
  } else {
    retorna = false;
  }
  return retorna;
}

function triangleCheck(lineA, lineB, lineC) {
  if (checkLineLengthMenor(lineA, lineB, lineC) === false) {
    return false;
  }
  if (checkLineMaior(lineA, lineB, lineC) === false) {
    return false;
  }
  if (checkLineDiff(lineA, lineB, lineC) === false) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  let matches = string.match(/[1-9]/g);
  let coposDeAgua = 0;
  let frase = ' copo de água';
  for (let index in matches) {
    coposDeAgua += parseInt(matches[index]);
  }
  if (coposDeAgua > 1) {
    frase = ' copos de água';
  }
  let resposta = coposDeAgua + frase;
  return resposta;
}

console.log(hydrate("3 perros, 2 patos"));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
