var ls = document.getElementById('ls');
var rs = document.getElementById('rs');
var ws = document.getElementById('ws');
var ss = document.getElementById('ss');
var ov = 5;
sc = document.getElementById('sc');

function lplus(){
    if(ls.innerHTML > 0 && ls.innerHTML < 9 || ls.innerHTML == 0 ) {
        ls.innerHTML = parseFloat(ls.innerHTML) + 0.5;
    }       
}
function rplus(){
    if(rs.innerHTML > 0 && rs.innerHTML < 9 || rs.innerHTML == 0 ) {
        rs.innerHTML = parseFloat(rs.innerHTML) + 0.5;
    }      

}  
function wplus(){
    if(ws.innerHTML > 0 && ws.innerHTML < 9 || ws.innerHTML == 0 ) {
        ws.innerHTML = parseFloat(ws.innerHTML) + 0.5;
    }      

}  
function splus(){
    if(ss.innerHTML > 0 && ss.innerHTML < 9 || ss.innerHTML == 0 ) {
        ss.innerHTML = parseFloat(ss.innerHTML) + 0.5;
    }      

}  
function lmin(){
    if(ls.innerHTML > 0 && ls.innerHTML < 9 || ls.innerHTML == 9) {
        ls.innerHTML = parseFloat(ls.innerHTML) - 0.5;
    }      

}  
function rmin(){
    if(rs.innerHTML > 0 && rs.innerHTML < 9 || rs.innerHTML == 9) {
        rs.innerHTML = parseFloat(rs.innerHTML) - 0.5;
    }      

}  
function wmin(){
    if(ws.innerHTML > 0 && ws.innerHTML < 9 || ws.innerHTML == 9) {
        ws.innerHTML = parseFloat(ws.innerHTML) - 0.5;
    }      

}  
function smin(){
    if(ss.innerHTML > 0 && ss.innerHTML < 9 || ss.innerHTML == 9) {
        ss.innerHTML = parseFloat(ss.innerHTML) - 0.5;
    }      

}


function cl(){
    ov = (parseFloat(ls.innerHTML) + parseFloat(rs.innerHTML) + parseFloat(ws.innerHTML) + parseFloat(ss.innerHTML)) / 4;
    ov = Math.round(ov * 2) / 2;
    sc.innerHTML = ov;
}
