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
        data.lastUpdate = data.lastUpdate ? data.lastUpdate.split("T")[0] : "";
data.expectedDelivery = data.expectedDelivery ? data.expectedDelivery.split("T")[0] : "";

        if (data.error) {

            result.innerHTML = "<span style='color:red'>AWB Not Found</span>";

        } else {

            result.innerHTML = `
                <div style="text-align:left;margin-top:20px">
                <div class="tracking-card">

<h2>📦 SS Herbal India Tracking</h2>

<table class="tracking-table">

<tr><td><b>AWB</b></td><td>${data.awb}</td></tr>

<tr><td><b>Order ID</b></td><td>${data.orderId}</td></tr>

<tr><td><b>Customer Name</b></td><td>${data.customer}</td></tr>

<tr><td><b>Mobile</b></td><td>${data.mobile}</td></tr>

<tr><td><b>Product Name</b></td><td>${data.product}</td></tr>

<tr><td><b>Amount</b></td><td>₹ ${data.amount}</td></tr>

<tr><td><b>Payment Mode</b></td><td>${data.payment}</td></tr>

<tr>
<td><b>Status</b></td>
<td><span class="status-badge">${data.status}</span></td>
</tr>

<tr><td><b>Last Update</b></td><td>${data.lastUpdate}</td></tr>

<tr><td><b>Expected Delivery</b></td><td>${data.expectedDelivery}</td></tr>

</table>

</div>
            `;

        }

    } catch (err) {

        result.innerHTML = "<span style='color:red'>Server Error</span>";

    }

}
