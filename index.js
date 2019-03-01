function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
    }
    else {
      var serving = katzDeliLine[0];
      katzDeliLine.shift();
      return `Currently serving ${serving}.`;
    }
}

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty.";
  } else {
    var i = 1;
    var string = `The line is currently: `;
    do {
      string = string + `${i}. ${line[i-1]} `;
      i++
    }
    while (i < line.length);
  }
  return string;
}