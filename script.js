var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

createCalendar(new Date())

function getDays(year, month) {
    return new Date(year, month, 0).getDate();
};

function createCalendar(d){
    let st = new Date(d.getFullYear() + "-" + (d.getMonth() + 1) + "-1")

    let calendar = "<tr><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th></tr>"

    f = true
    let l = 0

    let daysNumber = getDays(d.getFullYear(), d.getMonth() + 1);

    for(let j = 1; j <= daysNumber; j){

        calendar += "<tr>"

        if(f){
            for(let i = 1; i < st.getDay(); i++){
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