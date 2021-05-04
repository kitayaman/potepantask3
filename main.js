 $(document).ready(function(){
       
       
      let count = 0;
      let second = 0;
      let ten_seconds = 0;
      let minutes = 0;
      
      const timer = function() {
       count++;
       console.log("count is " + count);
       if (count < 10) {
       $(".tenth_part_area").text(count);
       
        // ↓１秒の処理
        } else if (second < 9) {
         count = 0;
         $(".tenth_part_area").text(count);
         second++;
         $(".second_area").text(second);
         
        } else if (ten_seconds < 5) { 
         count =0;
         $(".tenth_part_area").text(count);
         second = 0;
         $(".second_area").text(second);
         ten_seconds++;
         $(".ten_seconds_area").text(ten_seconds);
         
        } else {
         count =0;
         $(".tenth_part_area").text(count);
         second = 0;
         $(".second_area").text(second);
         ten_seconds = 0;
         $(".ten_seconds_area").text(ten_seconds);
         minutes++;
         $(".minutes_area").text(minutes);
         
        }
      };
      
      const stopTimer = function() {
       console.log("stopped");
       clearInterval(timer);
      };
      
      $("#start_button").click(function() {
       console.log("clicked");
       $(this).css("background-color", "grey");
       $("#stop_button").css("background-color", "red");
       $("#start_button").prop("disabled",true);
       $("#stop_button").prop("disabled",false);
       countUpTimer = setInterval(timer,100);
       
       
      });
      
      $("#stop_button").click(function() {
        console.log("stop_button is clicked");
        $("#start_button").css("background-color", "red");
        $("#stop_button").css("background-color", "grey");
        $("#reset_button").css("background-color", "red");
        $("#start_button").prop("disabled",false);
        $("#stop_button").prop("disabled",true);
        $("#reset_button").prop("disabled",false);
        clearInterval(countUpTimer);
      });
      
      
      $("#reset_button").click(function() {
        console.log("reset_button is clicked");
        $("#start_button").css("background-color","grey");
        $(".minutes_area, .ten_seconds_area, .second_area, .tenth_part_area").text(0);
        $("#stop_button").css("background-color", "grey");
        $("#reset_button").css("background-color", "grey");
        $("#start_button").css("background-color", "red");
        $("#start_button").prop("disabled",false);
        $(this).prop("disabled",true);
        count = 0;
        second = 0;
        ten_seconds = 0;
        minutes = 0;
      });
      
      
      
      
       
   
      
});