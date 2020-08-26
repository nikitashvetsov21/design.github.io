function countdown(dateEnd) {
    let timer, days, hours, minutes, seconds;
   
    dateEnd = new Date(dateEnd);
    dateEnd = dateEnd.getTime();
   
    if ( isNaN(dateEnd) ) {
      return;
    }
   
    timer = setInterval(calculate, 1000);
   
    function calculate() {
      var dateStart = new Date();
      var dateStart = new Date(dateStart.getUTCFullYear(),
                               dateStart.getUTCMonth(),
                               dateStart.getUTCDate(),
                               dateStart.getUTCHours(),
                               dateStart.getUTCMinutes(),
                               dateStart.getUTCSeconds());
      let timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)
   
      if ( timeRemaining >= 0 ) {
        days    = parseInt(timeRemaining / 86400);
        timeRemaining   = (timeRemaining % 86400);
        hours   = parseInt(timeRemaining / 3600);
        timeRemaining   = (timeRemaining % 3600);
        minutes = parseInt(timeRemaining / 60);
        timeRemaining   = (timeRemaining % 60);
        seconds = parseInt(timeRemaining);
   
        document.getElementById("days").innerHTML    = parseInt(days, 10);
        document.getElementById("hours").innerHTML   = ("0" + hours).slice(-2);
        document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
        document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
      } else {
        return;
      }
    }
   
    function display(days, hours, minutes, seconds) {}
  }
   
   
   
countdown('01/01/2021 00:00:00 AM');
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb3VudGRvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY291bnRkb3duKGRhdGVFbmQpIHtcclxuICAgIGxldCB0aW1lciwgZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHM7XHJcbiAgIFxyXG4gICAgZGF0ZUVuZCA9IG5ldyBEYXRlKGRhdGVFbmQpO1xyXG4gICAgZGF0ZUVuZCA9IGRhdGVFbmQuZ2V0VGltZSgpO1xyXG4gICBcclxuICAgIGlmICggaXNOYU4oZGF0ZUVuZCkgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgXHJcbiAgICB0aW1lciA9IHNldEludGVydmFsKGNhbGN1bGF0ZSwgMTAwMCk7XHJcbiAgIFxyXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlKCkge1xyXG4gICAgICB2YXIgZGF0ZVN0YXJ0ID0gbmV3IERhdGUoKTtcclxuICAgICAgdmFyIGRhdGVTdGFydCA9IG5ldyBEYXRlKGRhdGVTdGFydC5nZXRVVENGdWxsWWVhcigpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVN0YXJ0LmdldFVUQ01vbnRoKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlU3RhcnQuZ2V0VVRDRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVN0YXJ0LmdldFVUQ0hvdXJzKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlU3RhcnQuZ2V0VVRDTWludXRlcygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVN0YXJ0LmdldFVUQ1NlY29uZHMoKSk7XHJcbiAgICAgIGxldCB0aW1lUmVtYWluaW5nID0gcGFyc2VJbnQoKGRhdGVFbmQgLSBkYXRlU3RhcnQuZ2V0VGltZSgpKSAvIDEwMDApXHJcbiAgIFxyXG4gICAgICBpZiAoIHRpbWVSZW1haW5pbmcgPj0gMCApIHtcclxuICAgICAgICBkYXlzICAgID0gcGFyc2VJbnQodGltZVJlbWFpbmluZyAvIDg2NDAwKTtcclxuICAgICAgICB0aW1lUmVtYWluaW5nICAgPSAodGltZVJlbWFpbmluZyAlIDg2NDAwKTtcclxuICAgICAgICBob3VycyAgID0gcGFyc2VJbnQodGltZVJlbWFpbmluZyAvIDM2MDApO1xyXG4gICAgICAgIHRpbWVSZW1haW5pbmcgICA9ICh0aW1lUmVtYWluaW5nICUgMzYwMCk7XHJcbiAgICAgICAgbWludXRlcyA9IHBhcnNlSW50KHRpbWVSZW1haW5pbmcgLyA2MCk7XHJcbiAgICAgICAgdGltZVJlbWFpbmluZyAgID0gKHRpbWVSZW1haW5pbmcgJSA2MCk7XHJcbiAgICAgICAgc2Vjb25kcyA9IHBhcnNlSW50KHRpbWVSZW1haW5pbmcpO1xyXG4gICBcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRheXNcIikuaW5uZXJIVE1MICAgID0gcGFyc2VJbnQoZGF5cywgMTApO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG91cnNcIikuaW5uZXJIVE1MICAgPSAoXCIwXCIgKyBob3Vycykuc2xpY2UoLTIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWludXRlc1wiKS5pbm5lckhUTUwgPSAoXCIwXCIgKyBtaW51dGVzKS5zbGljZSgtMik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWNvbmRzXCIpLmlubmVySFRNTCA9IChcIjBcIiArIHNlY29uZHMpLnNsaWNlKC0yKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5KGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7fVxyXG4gIH1cclxuICAgXHJcbiAgIFxyXG4gICBcclxuY291bnRkb3duKCcwMS8wMS8yMDIxIDAwOjAwOjAwIEFNJyk7Il0sImZpbGUiOiJjb3VudGRvd24uanMifQ==
