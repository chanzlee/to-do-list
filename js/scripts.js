// business logic
function Task(task, specific1, specific2, specific3, date, completed) {
  this.task = task;
  this.specific1 = specific1;
  this.specific2 = specific2;
  this.specific3 = specific3;
  this.date = date;
  this.completed = completed;
}

Task.prototype.valid = function() {
  if (this.completed) {
    return "Completed";
  } else {
    return "Incomplete";
  }
}

Task.prototype.specifics = function() {
    return this.specific1 +", "+ this.specific2+ ", " + this.specific3;
  }

var index = 0;
function AddCompleteButton() {
    var r=$('<input/>').attr({
        type: "button",
        id: "button",
        value: 'Complete'
    });
    $(".completed").append(r);
  }
// user logic
$(document).ready(function() {
  $("form#add-list").submit(function(event) {
    event.preventDefault();

    var inputTask = $("#task").val();
    var inputSpecific1 = $("#specific1").val();
    var inputSpecific2 = $("#specific2").val();
    var inputSpecific3 = $("#specific3").val();
    var inputDate = $("#date").val();
    var newTask = new Task(inputTask, inputSpecific1, inputSpecific2, inputSpecific3, inputDate, 0);

    $("ul#lists").append(`<li><span class='eachList' id='${newTask.task}'> ${newTask.task} </span></li>`);


      // "<li><span class='eachList'" + id="" ">" + newTask.task + "</span></li>");

    $(".eachList").last().click(function(){
      // $("ul#lists").last().click(function(){
        $("#show-list").hide();
        $("#show-list").slideDown();
        $("#show-list h2").text(newTask.task);
        $(".task").text(newTask.task);
        $(".specifics").text(newTask.specifics());
        $(".date").text(newTask.date);
        $(".completed").text(newTask.valid());
        AddCompleteButton();
        $("#button").last().click(function() {
          // var x = document.getElementByTagName("li")
          // x[].remove();
          // $("ul#lists").closest('.li').remove();
          alert(`#${newTask.task}`);
          $(`#${newTask.task}`).remove();
        });


      });

    var inputs = ["task", "specific1", "specific2", "specific3", "date", "completed"];
    inputs.forEach(function(input) {
      $('input#' + input).val("");
    });
  });
});
