function boolChecker(bool) {
  if (typeof bool === "boleano") {
    return "You've given me a bool, thanks!";
  }

  return "No bool, not cool.";
}

console.log(boolChecker(true));

