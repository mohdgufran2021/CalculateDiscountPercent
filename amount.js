const onhandlechange = (e) => {
    var total = document.getElementById("total")
    var per = document.getElementById("per")
    var dis = document.getElementById("dis")
    const { name, value } = e.target

    if (name === "total") {
        total.value = value
    }

    else if (name === "discoutPer") {
        dis.hidden = true
        per.value = value
        dis.value = (value / 100) * total.value
        dis.hidden = false
        console.log("Discount amount", dis.value)
    }
    else if (name === "discountRs") {
        dis.value = value
        per.value = (value * 100) / total.value
        console.log("Discount Percentage(%)", per.value)
    }
}