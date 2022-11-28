var meatType = "";

const btn_b = document.getElementById('b');
$("#b").click(function() {
    $("#b").toggleClass("active");
    if($("#b").hasClass("active")){
        btn_b.style.backgroundColor = 'red';
        btn_b.style.border = '3px dashed yellow';
        btn_b.style.color = 'white';
        console.log("button clicked");
        meatType = $(this).attr("id");
        console.log(meatType);
    }else{
        btn_b.style.backgroundColor = 'yellow';
        btn_b.style.border = '3px dashed red';
        btn_b.style.color = 'black';
        console.log("button unclicked");
    }
})


const btn_c = document.getElementById('c');
$("#c").click(function() {
    $("#c").toggleClass("active");
    if($("#c").hasClass("active")){
        btn_c.style.backgroundColor = 'red';
        btn_c.style.border = '3px dashed yellow';
        btn_c.style.color = 'white';
        console.log("button clicked");
        meatType = $(this).attr("id");
        console.log(meatType);
    }else{
        btn_c.style.backgroundColor = 'yellow';
        btn_c.style.border = '3px dashed red';
        btn_c.style.color = 'black';
        console.log("button unclicked");
    }
})


const btn_p = document.getElementById('p');
$("#p").click(function() {
    $("#p").toggleClass("active");
    if($("#p").hasClass("active")){
        btn_p.style.backgroundColor = 'red';
        btn_p.style.border = '3px dashed yellow';
        btn_p.style.color = 'white';
        console.log("button clicked");
        meatType = $(this).attr("id");
        console.log(meatType);
    }else{
        btn_p.style.backgroundColor = 'yellow';
        btn_p.style.border = '3px dashed red';
        btn_p.style.color = 'black';
        console.log("button unclicked");
    }
})

// $("#emailBtn").click(function() {
//     console.log("email");
//         Email.send({
//           Host: "smtp.gmail.com",
//           Username: "Eat.WWE.Good.Food.Now@gmail.com",
//           Password: "funFood123",
//           To: 'prjunjulas@gmail.com',
//           From: "Eat.WWE.Good.Food.Now@gmail.com",
//           Subject: "Sending Email using javascript",
//           Body: "Well that was easy!!",
//         })
//           .then(function (message) {
//             alert("mail sent successfully")
//           })
//           .catch(error => console.error(error))
// })

var m_count = 0;
const btn_m = document.getElementById('mexican');
btn_m.addEventListener('click', function onClick() {
    if (m_count == 0){
        btn_m.style.backgroundColor = 'red';
        btn_m.style.border = '3px dashed yellow';
        btn_m.style.color = 'white';
        m_count = 1;
        //could possibly set the value for db querry here as well 
    }
    else{
        btn_m.style.backgroundColor = 'yellow';
        btn_m.style.border = '3px dashed red';
        btn_m.style.color = 'black';
        m_count = 0;
    }
});

var i_count = 0;
const btn_i = document.getElementById('italian');
btn_i.addEventListener('click', function onClick() {
    if (i_count == 0){
        btn_i.style.backgroundColor = 'red';
        btn_i.style.border = '3px dashed yellow';
        btn_i.style.color = 'white';
        i_count = 1;
        //could possibly set the value for db querry here as well 
    }
    else{
        btn_i.style.backgroundColor = 'yellow';
        btn_i.style.border = '3px dashed red';
        btn_i.style.color = 'black';
        i_count = 0;
    }
});

var a_count = 0;
const btn_a = document.getElementById('american');
btn_a.addEventListener('click', function onClick() {
    if (a_count == 0){
        btn_a.style.backgroundColor = 'red';
        btn_a.style.border = '3px dashed yellow';
        btn_a.style.color = 'white';
        a_count = 1;
        //could possibly set the value for db querry here as well 
    }
    else{
        btn_a.style.backgroundColor = 'yellow';
        btn_a.style.border = '3px dashed red';
        btn_a.style.color = 'black';
        a_count = 0;
    }
});

var as_count = 0;
const btn_as = document.getElementById('asian');
btn_as.addEventListener('click', function onClick() {
    if (as_count == 0){
        btn_as.style.backgroundColor = 'red';
        btn_as.style.border = '3px dashed yellow';
        btn_as.style.color = 'white';
        as_count = 1;
        //could possibly set the value for db querry here as well 
    }
    else{
        btn_as.style.backgroundColor = 'yellow';
        btn_as.style.border = '3px dashed red';
        btn_as.style.color = 'black';
        as_count = 0;
    }
});

var one_count = 0;
const btn_one = document.getElementById('1dollar');
btn_one.addEventListener('click', function onClick() {
    if (one_count == 0){
        btn_one.style.backgroundColor = 'red';
        btn_one.style.border = '3px dashed yellow';
        btn_one.style.color = 'white';
        one_count = 1;
        //could possibly set the value for db querry here as well 
    }
    else{
        btn_one.style.backgroundColor = 'yellow';
        btn_one.style.border = '3px dashed red';
        btn_one.style.color = 'black';
        one_count = 0;
    }
});

var two_count = 0;
const btn_two = document.getElementById('2dollar');
btn_two.addEventListener('click', function onClick() {
    if (two_count == 0){
        btn_two.style.backgroundColor = 'red';
        btn_two.style.border = '3px dashed yellow';
        btn_two.style.color = 'white';
        two_count = 1;
        //could possibly set the value for db querry here as well 
    }
    else{
        btn_two.style.backgroundColor = 'yellow';
        btn_two.style.border = '3px dashed red';
        btn_two.style.color = 'black';
        two_count = 0;
    }
});

var three_count = 0;
const btn_three = document.getElementById('3dollar');
btn_three.addEventListener('click', function onClick() {
    if (three_count == 0){
        btn_three.style.backgroundColor = 'red';
        btn_three.style.border = '3px dashed yellow';
        btn_three.style.color = 'white';
        three_count = 1;
        //could possibly set the value for db querry here as well 
    }
    else{
        btn_three.style.backgroundColor = 'yellow';
        btn_three.style.border = '3px dashed red';
        btn_three.style.color = 'black';
        three_count = 0;
    }
});

var m_one_count = 0;
const btn_m_one = document.getElementById('1m');
btn_m_one.addEventListener('click', function onClick() {
    if (m_one_count == 0){
        btn_m_one.style.backgroundColor = 'red';
        btn_m_one.style.border = '3px dashed yellow';
        btn_m_one.style.color = 'white';
        m_one_count = 1;
        //could possibly set the value for db querry here as well 
    }
    else{
        btn_m_one.style.backgroundColor = 'yellow';
        btn_m_one.style.border = '3px dashed red';
        btn_m_one.style.color = 'black';
        m_one_count = 0;
    }
});

var m_three_count = 0;
const btn_m_three = document.getElementById('3m');
btn_m_three.addEventListener('click', function onClick() {
    if (m_three_count == 0){
        btn_m_three.style.backgroundColor = 'red';
        btn_m_three.style.border = '3px dashed yellow';
        btn_m_three.style.color = 'white';
        m_three_count = 1;
        //could possibly set the value for db querry here as well 
    }
    else{
        btn_m_three.style.backgroundColor = 'yellow';
        btn_m_three.style.border = '3px dashed red';
        btn_m_three.style.color = 'black';
        m_three_count = 0;
    }
});

var m_five_count = 0;
const btn_m_five = document.getElementById('5m');
btn_m_five.addEventListener('click', function onClick() {
    if (m_five_count == 0){
        btn_m_five.style.backgroundColor = 'red';
        btn_m_five.style.border = '3px dashed yellow';
        btn_m_five.style.color = 'white';
        m_five_count = 1;
        //could possibly set the value for db querry here as well 
    }
    else{
        btn_m_five.style.backgroundColor = 'yellow';
        btn_m_five.style.border = '3px dashed red';
        btn_m_five.style.color = 'black';
        m_five_count = 0;
    }
});

var m_ten_count = 0;
const btn_m_ten = document.getElementById('10m');
btn_m_ten.addEventListener('click', function onClick() {
    if (m_ten_count == 0){
        btn_m_ten.style.backgroundColor = 'red';
        btn_m_ten.style.border = '3px dashed yellow';
        btn_m_ten.style.color = 'white';
        m_ten_count = 1;
        //could possibly set the value for db querry here as well 
    }
    else{
        btn_m_ten.style.backgroundColor = 'yellow';
        btn_m_ten.style.border = '3px dashed red';
        btn_m_ten.style.color = 'black';
        m_ten_count = 0;
    }
});