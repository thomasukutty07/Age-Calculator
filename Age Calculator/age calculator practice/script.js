document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("date");
  const submitBtn = document.getElementById("cal-submit");

  // Set max attribute of the input to today's date
  input.max = new Date().toISOString().split("T")[0];

  submitBtn.addEventListener("click", () => {
    // User input date
    let birthDate = new Date(input.value);
    let day1 = birthDate.getDate();
    let month1 = birthDate.getMonth() + 1;
    let year1 = birthDate.getFullYear();

    // Current date
    let currentDate = new Date();
    let day2 = currentDate.getDate();
    let month2 = currentDate.getMonth() + 1;
    let year2 = currentDate.getFullYear();

    let d3, m3, y3;

    // Year difference
    y3 = year2 - year1;

    // Month difference
    if (month2 >= month1) {
      m3 = month2 - month1;
    } else {
      y3--;
      m3 = 12 + month2 - month1;
    }

    // Day difference
    if (day2 >= day1) {
      d3 = day2 - day1;
    } else {
      m3--;
      if (m3 < 0) {
        m3 = 11;
        y3--;
      }
      d3 = getDaysInMonth(year2, month2 - 1) + day2 - day1;
    }

    document.getElementById("Years").innerHTML = y3;
    document.getElementById("months").innerHTML = m3;
    document.getElementById("days").innerHTML = d3;

    document.querySelector(".text").style.margin = '20px';
    document.getElementById("display").style.display = "inline";
    document.getElementById("Years").style.display = "inline";
    document.getElementById("months").style.display = "inline";
    document.getElementById("days").style.display = "inline";
  });

  function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }
});
