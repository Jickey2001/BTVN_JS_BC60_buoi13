var btnTinhNao = document.getElementById("btnTinhNao");
btnTinhNao.onclick = function () {
    // DOM lấy value các thẻ
    var filmName = document.getElementById("filmName").value;
    var pricePeople = document.getElementById("pricePeople").value;
    var priceKid = document.getElementById("priceKid").value;
    var ticketAdult = document.getElementById("ticketAdult").value;
    var ticketKid = document.getElementById("ticketKid").value;
    var giveAway = document.getElementById("giveAway").value;
    //Xu ly
    var totalTicket = ticketAdult*1 + ticketKid*1;
    var total = (ticketAdult*pricePeople)+(ticketKid*priceKid);
    var totalGiveAway = total*(giveAway/100);
    var totalConlai = total - totalGiveAway;
    var result = "";
    result += "<p> Tên phim là: " + filmName +"</p>";
    result += "<p> Số vé đã bán là: " + totalTicket + "</p>";
    result += "<p> Doanh thu là: " + total + "VND" + "</p>";
    result += "<p> Trích từ thiện: " +giveAway + "%" + "</p>";
    result += "<p> Tổng tiền trích từ thiện là:" +totalGiveAway+"VND"+ " </p>";
    result += "<p>Tổng tiền thu được sau khi trừ: " + totalConlai +"VND"+ "</p>"
    //Daura
    var footerTip = document.getElementById("footerTip");
    footerTip.innerHTML=result;
}
