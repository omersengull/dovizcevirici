document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("amount").addEventListener("input", exchange);
    const smenu1 = document.querySelector("#smenu1");
    const smenu2 = document.querySelector("#smenu2");

    function exchange() {
        fetch("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_qD2i5F3SAmIDYB4dwok1Pw1atG21xDGjDoZnfpnO", {
            method: "GET",
        })
        .then(value => value.json())
        .then(data => {
            const param1 = data.data[smenu1.value];
            const param2 = data.data[smenu2.value];
            
            //miktar x çevrilcek para biriminin dolar karşılığı/baz alınan para birimininin dolar karşılığı
            const result = (parseFloat(document.getElementById("amount").value) * param2) / param1;
            // 1 euro 34,46 TL
            // 1 dolar 0,92 euro
            // 1 dolar 31,72 dolar
            // 1 x 31,72 / 0,92 = 34,46 1 euro 34,46 tl

            
            document.getElementById("result").value = result.toFixed(2);
        })
        .catch(err => alert(err.message));
    }
});

//  1 EURO 34,46 TL
//  1*31,72/0,92