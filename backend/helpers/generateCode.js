exports.generateCode = (length) => {
  let code = "";
  let schema = "0123456789";
  for (let i = 0; i < length; i++) {
    code += schema.charAt(Math.floor(Math.random() * length));
  }
  return code;
};
