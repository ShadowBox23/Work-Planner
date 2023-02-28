
  //Uses dayjs advanced format to provide the correct date
  let currentDate = moment().format("dddd, MMMM Do YYYY");
  $("#currentDay").html(currentDate);


  // Button function to clear local storage and clear contents
  $("#clearBtn").click(function (event) {
    event.preventDefault;
    $(".description").val("");
    localStorage.clear();
  })

  //Saves the text of each time block to local storage
 $(document).ready(function () {
  // save button click event
  $(".saveBtn").on("click", function () {
    let eventText = $(this).siblings(".description").val();
    let timeKey = $(this).parent().attr("id");

    //save to local storage
    localStorage.setItem(timeKey, eventText);
  })
  
  //Sets the color of the time blocks based on the current hour
  function timeTracker() {
    //get current number of hours.
    var timeNow = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        // To check the time and add the classes for background indicators
        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })
}
  //Loads the textarea from local storage if it exists
    // Get item from local storage if any
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
})
