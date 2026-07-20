async function trackParcel() {

    const awb = document.getElementById("awb").value.trim();
    const result = document.getElementById("result");

    if (!awb) {
        result.innerHTML = `
        <div style="text-align:center;color:red;">
            Please enter AWB Number
        </div>`;
        return;
    }

    result.innerHTML = `
    <div style="text-align:center;padding:20px;">
        🔄 Searching...
    </div>`;

    try {

        const response = await fetch("https://script.google.com/macros/s/AKfycbwOs4bKMnR-6tPvdq0eTQMW0EFCpNS9kQhoMHtRlPo2-clai-f2R8AmcgtXUOLPuQiOeQ/exec?awb=" + encodeURIComponent(awb));

        const data = await response.json();

        if (data.error) {

            result.innerHTML = `
            <div style="text-align:center;color:red;">
                ❌ AWB Not Found
            </div>`;

            return;
        }

        const statusColor = data.status === "Delivered"
            ? "#16a34a"
            : data.status === "Out for Delivery"
            ? "#2563eb"
            : "#f59e0b";

        result.innerHTML = `
        <h2 style="color:#0f9d58;text-align:center;margin-bottom:20px;">
            📦 Tracking Details
        </h2>

        <table style="width:100%;border-collapse:collapse;">
            <tr>
                <td><b>AWB</b></td>
                <td>${data.awb}</td>
            </tr>
            <tr>
                <td><b>Customer</b></td>
                <td>${data.customer}</td>
            </tr>
            <tr>
                <td><b>Mobile</b></td>
                <td>${data.mobile}</td>
            </tr>
            <tr>
                <td><b>Courier</b></td>
                <td>${data.courier}</td>
            </tr>
            <tr>
                <td><b>Last Update</b></td>
                <td>${data.lastUpdate}</td>
            </tr>
            <tr>
                <td><b>Status</b></td>
                <td>
                    <span style="
                        background:${statusColor};
                        color:white;
                        padding:6px 12px;
                        border-radius:20px;
                        font-size:14px;">
                        ${data.status}
                    </span>
                </td>
            </tr>
        </table>
        `;

    } catch (e) {

        result.innerHTML = `
        <div style="text-align:center;color:red;">
            ⚠ Server Error
        </div>`;

    }

}
