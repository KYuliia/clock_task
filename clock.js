let DataUtils = {
    date: new Date(),
    getDayString: function (number) {
        var daysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var day01 = daysName[date.getDay()];
        return day01;
    },
    getDayNumb: function (number) {
        var daynumb = date.toLocaleTimeString();
        return daynumb;
    },
    getMonthString: function (number) {
        var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var month01 = monthName[date.getMonth()];
        return month01;
    }

};

setInterval(function () {
    document.getElementById('clock').innerHTML = DataUtils.getDayString + ', ' + DataUtils.getMonthString + ' ,' + DataUtils.getDayNumb
}, 1000);


let date = window.setInterval(function getElementByString() {
    var d = new Date();
    var daysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var day01 = daysName[d.getDay()];
    var day02 = [d.getDate()];
    var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var month01 = monthName[d.getMonth()];
    document.getElementById('clock').innerHTML = month01 + ', ' + day01 + ' ' + day02 + ' ,' + d.toLocaleTimeString();
}, 1000);


console.log(date);


