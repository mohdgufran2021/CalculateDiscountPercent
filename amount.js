const onhandlechange = (e) => {
    var total = document.getElementById("total")
    var per = document.getElementById("per")
    var dis = document.getElementById("dis")
    const { name, value } = e.target

    if (name === "total") {
        total.value = value
    }

    else if (name === "discoutPer") {
        per.value = parseFloat(value)
        if(parseFloat(value) > 100)
            {
                alert("Only Type between 1 to 100")
                return
            }
           else{
             dis.value = (value / 100) * total.value
            console.log("Discount amount", dis.value)
           }
    }
    else if (name === "discountRs") {
        dis.value = value
        per.value = (value * 100) / total.value
        console.log("Discount Percentage(%)", per.value)
    }
}