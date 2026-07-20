async function trackParcel() {

    const awb = document.getElementById("awb").value.trim();
    const result = document.getElementById("result");

    if (!awb) {
        result.innerHTML = `
       result.innerHTML = `
<div class="tracking-card">

<h2>📦 Tracking Details</h2>

<table style="width:100%;border-collapse:collapse;">

<tr><td><b>AWB</b></td><td>${data.awb}</td></tr>

<tr><td><b>Order ID</b></td><td>${data.orderId}</td></tr>

<tr><td><b>Customer</b></td><td>${data.customer}</td></tr>

<tr><td><b>Mobile</b></td><td>${data.mobile}</td></tr>

<tr><td><b>Product</b></td><td>${data.product}</td></tr>

<tr><td><b>Qty</b></td><td>${data.qty}</td></tr>

<tr><td><b>Amount</b></td><td>₹ ${data.amount}</td></tr>

<tr><td><b>Payment</b></td><td>${data.payment}</td></tr>

<tr><td><b>Courier</b></td><td>${data.courier}</td></tr>

<tr><td><b>Current Location</b></td><td>${data.location}</td></tr>

<tr><td><b>Booking Date</b></td><td>${data.bookingDate}</td></tr>

<tr><td><b>Last Update</b></td><td>${data.lastUpdate}</td></tr>

<tr><td><b>Expected Delivery</b></td><td>${data.expectedDelivery}</td></tr>

<tr><td><b>Delivery Date</b></td><td>${data.deliveryDate}</td></tr>

<tr><td><b>City</b></td><td>${data.city}</td></tr>

<tr><td><b>State</b></td><td>${data.state}</td></tr>

<tr><td><b>Status</b></td>
<td>
<span style="background:#16a34a;color:#fff;padding:6px 12px;border-radius:20px;">
${data.status}
</span>
</td>
</tr>

<tr><td><b>Remark</b></td><td>${data.remark}</td></tr>

</table>

</div>
`;
