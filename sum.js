const fs = require("fs");

(function sum() {
  var input = require("./input.json");
  var output = [];
  var final = {
    ratio: [],
    value: [],
    code: [],
  };
  for (var i = 0; i < input.code.length; i++) {
    var flag = false;
    for (var j = 0; j < output.length; j++) {
      if (
        input.code[i] === output[j].code &&
        input.ratio[i] === output[j].ratio
      ) {
        output[j].value += input.value[i];
        flag = true;
      }
    }
    if (flag === false) {
      output.push({
        ratio: input.ratio[i],
        value: input.value[i],
        code: input.code[i],
      });
    }
  }
  for (var i = 0; i < output.length; i++) {
    final.ratio.push(output[i].ratio);
    final.value.push(output[i].value);
    final.code.push(output[i].code);
  }
  fs.writeFileSync("./output.json", JSON.stringify(final));
  console.table(input);
  console.table(final);
})();
