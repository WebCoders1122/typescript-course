// Original JS code
// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear

//best approach
// const year = document.getElementById("year") as HTMLSpanElement;
// const thisYear = new Date().getFullYear().toString();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;

//alternative approach
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
if (year) {
  year.setAttribute("datetime", thisYear);
  year.textContent = thisYear;
}
