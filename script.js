const weather = "https://api.openweathermap.org/data/2.5/weather?zip=85201,us&units=imperial&appid=15976d84b292c4206f0104225b002459"
const myURL = ""


$.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?zip=" + name + ",us&units=imperial&appid=15976d84b292c4206f0104225b002459",
    method: "GET"
}).then(function (response) {
    console.log(response)
    console.log(response.name)
    console.log(response.main.temp)
    console.log(response.wind.speed)
    console.log(response.main.humidity)
    


    const name = response.name
    console.log("This is the " + name)

    const temp = response.main.temp
    console.log("This is the " + temp)

    const humidity = response.main.humidity
    console.log("The relative humidity is currently " + humidity + "%")

    const winds = response.wind.speed
    console.log("The wind is blowing like you mom at " + winds + " MPH")

    $(".city").append(name + "<br>");
    $(".temp").append("It's currently " + temp + "% " + "<br>");
    $(".humid").append("Current humidity " + humidity + "% " + "<br>");
    $(".winds").append("Current wind speed" + winds) + "<br>";
});