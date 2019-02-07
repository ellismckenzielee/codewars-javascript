function regex_matches(regex) {
  /*
    Code to complete regex_matches kata
  */
  reg_string = regex.toString();
  new_regex = /((?<=\/)(?=\|))|([a-z0-9]+)/g;
  new_string = reg_string.match(new_regex);
  new_string.join("\',");
  return new_string;

}