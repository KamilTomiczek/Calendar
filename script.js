var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var d = new Date()
var nav = d.getMonth()

function getDays(year, month) {
    return new Date(year, month, 0).getDate();
}

function createCalendar(){
    let calendar = "<tr><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th></tr>"

    let f = true
    let l = 0

    let daysNumber = getDays(d.getFullYear(), d.getMonth() + 1);

    for(let j = 1; j <= daysNumber; j){

        calendar += "<tr>"

        if(f){
            for(let i = 1; i < new Date(d.getFullYear(), d.getMonth(), 1).getDay(); i++){
                calendar += "<td></td>"
                l++
            }

            f = false
        }
        
        for(let i = 0; i < 7 - l; i++){
            if(j != d.getDate()){
                if(j <= daysNumber){
                    calendar += '<td><input type="radio" name="day" value="' + j + '">' + j + '<span class="checkmark"></td>'
                    j++
                }
                else{
                    break
                }
            }
            else{
                calendar += '<td><input type="radio" name="day" checked value="' + j + '">' + j + '<span class="checkmark"></td>'
                j++
            }
        }

        l = 0

        calendar += "</tr>"
    }    

    document.querySelector(".calendar").innerHTML = calendar
    document.querySelector(".month").innerHTML = months[d.getMonth()] + " " + d.getFullYear()
}

function changeDate(i){

    if(i != 0){
        if(nav == 0 && i < 0){
            d.setMonth(nav = 11)
            d.setFullYear(d.getFullYear() - 1)
            d.setDate(1)
        }
        else if(nav == 11 && i > 0){
            d.setMonth(nav = 0)
            d.setFullYear(d.getFullYear() + 1)
            d.setDate(1)
        }
        else {
            d.setMonth(nav += i)
            d.setDate(1)
        }
    }
    else{
        let _now = new Date(Date.now())

        d.setFullYear(_now.getFullYear())
        d.setMonth(_now.getMonth())
        d.setDate(_now.getDate())

        nav = _now.getMonth()
    }
    
    createCalendar()
}

createCalendar()

// Clock

var options = { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"}
const datetimeItem = document.querySelector(".datetime p")

setInterval( () => {
    var now = new Date(Date.now())
    datetimeItem.innerHTML = now.toLocaleString("en-US", options)
}, 1000)