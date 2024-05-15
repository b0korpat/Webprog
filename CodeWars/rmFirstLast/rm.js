function array(input) {
    return input.split(",").slice(1,-1).join(" ") || null;
  }