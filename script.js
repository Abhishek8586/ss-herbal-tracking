function trackParcel(){

    let awb = document.getElementById("awb").value;

    let result = document.getElementById("result");

    if(awb=="45993612345678"){

        result.innerHTML=`
        <br>
        <b>Customer :</b> Rahul Sharma<br><br>

        <b>Courier :</b> Delhivery<br><br>

        <b>Status :</b>
        <span style="color:green;">In Transit</span>
        `;

    }else{

        result.innerHTML="<span style='color:red'>AWB Not Found</span>";

    }

}
