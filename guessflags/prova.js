var nations_list = ['Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia',
                    'Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin',
                    'Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burundi',
                    'Ivory Coast','Cabo Verde','Cambodia','Cameroon','Canada','Central African Republic','Chad','Chile','China',
                    'Colombia','Comoros','Costa Rica','Croatia','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica',
                    'Dominican Republic','North Korea','Democratic Republic of the Congo','Ecuador','Egypt','El Salvador',
                    'Equatorial Guinea','Eritrea','Estonia','Eswatini','Ethiopia','Fiji','Finland','France','Gabon','The Gambia',
                    'Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea Bissau','Guyana','Haiti',
                    'Vatican City','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel',
                    'Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati','Kuwait','Kyrgyzstan','Laos','Latvia',
                    'Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Madagascar','Malawi','Malaysia',
                    'Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia','Moldova',
                    'Monaco','Mongolia','Montenegro','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands',
                    'New Zealand','Nicaragua','Niger','Nigeria','North Macedonia','Norway','Oman','Pakistan','Palau','Panama',
                    'Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia',
                    'Rwanda','Saint Kitts and Nevis','Saint Lucia','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia',
                    'Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia',
                    'South Africa','South Korea','South Sudan','Spain','Sri Lanka','St Vincent Grenadines','Palestine','Sudan',
                    'Suriname','Sweden','Switzerland','Syria','Tajikistan','Tanzania','Thailand','Timor Leste','Togo','Tonga',
                    'Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','UAE','UK','USA','Uganda','Ukraine',
                    'Uruguay','Uzbekistan','Vanuatu','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe'];
var nations_list_shuffle = ['Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia',
                            'Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin',
                            'Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burundi',
                            'Ivory Coast','Cabo Verde','Cambodia','Cameroon','Canada','Central African Republic','Chad','Chile','China',
                            'Colombia','Comoros','Costa Rica','Croatia','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica',
                            'Dominican Republic','North Korea','Democratic Republic of the Congo','Ecuador','Egypt','El Salvador',
                            'Equatorial Guinea','Eritrea','Estonia','Eswatini','Ethiopia','Fiji','Finland','France','Gabon','The Gambia',
                            'Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea Bissau','Guyana','Haiti',
                            'Vatican City','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel',
                            'Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati','Kuwait','Kyrgyzstan','Laos','Latvia',
                            'Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Madagascar','Malawi','Malaysia',
                            'Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia','Moldova',
                            'Monaco','Mongolia','Montenegro','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands',
                            'New Zealand','Nicaragua','Niger','Nigeria','North Macedonia','Norway','Oman','Pakistan','Palau','Panama',
                            'Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia',
                            'Rwanda','Saint Kitts and Nevis','Saint Lucia','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia',
                            'Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia',
                            'South Africa','South Korea','South Sudan','Spain','Sri Lanka','St Vincent Grenadines','Palestine','Sudan',
                            'Suriname','Sweden','Switzerland','Syria','Tajikistan','Tanzania','Thailand','Timor Leste','Togo','Tonga',
                            'Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','UAE','UK','USA','Uganda','Ukraine',
                            'Uruguay','Uzbekistan','Vanuatu','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe'];
var nations_list_shuffle = shuffle(nations_list_shuffle);
var i = 0;
var score = 0;
var dict = {};
var flag = 0;

function init(){

    nations_list.forEach(e => dict[e] = 0);

    let first = nations_list_shuffle[0];
    let image_name = "flags/" + first + ".jpg";
    let image = document.getElementById("flag");
    image.src = image_name;
    image.name = first;

    let game = document.getElementById("game");
    game.style.display = "block";
    let start_button = document.getElementById("start");
    start_button.style.display = "none";
    document.getElementById("input_nation").focus();

    var countDownDate = new Date();
    countDownDate.setSeconds(countDownDate.getSeconds() + (18 * 60));

    // Update the count down every 1 second
    var x = setInterval(function() {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="time"
        document.getElementById("time").innerHTML = minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance <= 0 && flag == 0) {
          clearInterval(x);
          result();
        }
    }, 1000);
}


function check(e){

    var naz = document.getElementById("input_nation").value;
    let image = document.getElementById("flag");
    let nation_name = image.name;

    if (naz.toLowerCase() == nation_name.toLowerCase()){
        document.getElementById("input_nation").value = '';
        score = score + 1;
        let score_num = document.getElementById("score");
        score_num.textContent = score;
        dict[nation_name] = 1;
        next();
    }

}

function prev(){
    i = i - 1;
    if (i <= 0){
        i = 193;
    }
    let first = nations_list_shuffle[i];
    if (dict[first] == 0){
        let image_name = "flags/" + first + ".jpg";
        let image = document.getElementById("flag");
        image.src = image_name;
        image.name = first;
    }
    else{
        prev();
    }
}

function next(){

    i = i + 1;
    if (score < 194){
        if (i >= 194){
            i = 0;
        }
        let first = nations_list_shuffle[i];
        if (dict[first] == 0){
            let image_name = "flags/" + first + ".jpg";
            let image = document.getElementById("flag");
            image.src = image_name;
            image.name = first;
        }
        else{
            next();
        }
    }
    else {
        result();
    }
}

function result(){
    flag = 1;
    //display elements
    let content = document.getElementById("content");
    content.style.display = "none";
    let results = document.getElementById("results");
    results.style.display = "flex";
    let sect = document.getElementById("sect");
    sect.classList.remove("sect");
    sect.classList.add("sect-result");
    let score_num = document.getElementById("score_2");
    score_num.textContent = score;
    table = document.getElementById("table_results");
    let x = 0;
    var row = table.insertRow();
    nations_list.forEach(elem => {
        let cell = row.insertCell();
        let image = document.createElement("img");
        let image_name = "flags/" + elem + ".jpg";
        image.src = image_name;
        cell.appendChild(image);
        let name = document.createElement("p");
        name.textContent = elem;
        if (dict[elem] == 0) {
            image.style.filter = "grayscale(100%)";
            image.setAttribute("onmouseover","changeColor_1(this)")
            image.setAttribute("onmouseout","changeColor_2(this)")
        }
        cell.append(name);
        x = x + 1;
        if (x % 5 == 0){
            row = table.insertRow();
        }
    })
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function changeColor_1(elem){
    elem.style.filter = "grayscale(0%)";
}

function changeColor_2(elem){
    elem.style.filter = "grayscale(100%)";
}
