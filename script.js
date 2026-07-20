async function trackParcel() {

    const awb = document.getElementById("awb").value.trim();

    const result = document.getElementById("result");

    if (!awb) {
        result.innerHTML = "<span style='color:red'>Please enter AWB Number</span>";
        return;
    }

    result.innerHTML = "Searching...";

    try {

        const response = await fetch("https://script.google.com/macros/s/AKfycbwOs4bKMnR-6tPvdq0eTQMW0EFCpNS9kQhoMHtRlPo2-clai-f2R8AmcgtXUOLPuQiOeQ/exec?awb=" + encodeURIComponent(awb));

        const data = await response.json();

        if (data.error) {

            result.innerHTML = "<span style='color:red'>AWB Not Found</span>";

        } else {

            result.innerHTML = `
                <div style="text-align:left;margin-top:20px">
                <b>AWB :</b> ${data.awb}<br><br>

                <b>Customer :</b> ${data.customer}<br><br>

                <b>Mobile :</b> ${data.mobile}<br><br>

                <b>Courier :</b> ${data.courier}<br><br>

                <b>Status :</b>
                <span style="color:green;font-weight:bold">
                ${data.status}
                </span><br><br>

                <b>Last Update :</b> ${data.lastUpdate}
                </div>
            `;

        }

    } catch (err) {

        result.innerHTML = "<span style='color:red'>Server Error</span>";

    }

}
