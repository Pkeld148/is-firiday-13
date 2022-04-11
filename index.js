function isFriday13() {
  const dayOfWeek = new Date().toLocaleString("default", { weekday: "long" });

  const dateOfWeek = new Date().getDate();

  if (dayOfWeek === "Friday" && dateOfWeek === 13) {
    return "IT'S FRIDAY THE 13TH! AYYYYYYYYYYYYYYY!";
  } else {
    return "Sorry, it is not Friday the 13th.  Please try again tomorrow!";
  }
}

module.exports = isFriday13