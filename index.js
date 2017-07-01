"use strict";

function untranspose(data, emptyValue)
{
  emptyValue = emptyValue || undefined;
  var fields = Object.keys(data);
  var output = new Array(data[fields[0]].length);
  for (let i = 0; i < output.length; i++)
  {
    var out = {};
    for (var f = 0; f < fields.length; f++)
    {
      var field = fields[f];
      var value = data[field][i];
      if (value !== emptyValue)
      {
        out[field] = value;
      }
    }
    output[i] = out;
  }
  return output;
}

module.exports = untranspose;
