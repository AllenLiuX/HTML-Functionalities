let i = 0;
let tex = ["Hiiiii Jenni,<br><br>" +
"I am Groot.<br><br>" +
"We are on  a mission to deliver you this gift. It’s the Walkman that grew up with Peter Quill the “Star Lord”. This Walkman has been traveling with him, all over the universe. As you may know, this mixtape is his source of comfort, to energy and the inspiration of his dance moves.<br><br>" +
"He overheard that there is a girl in Downtown who also enjoys 70s music and loves to dance.<br><br>" +
"So put on the headphone and dance with us!<br><br>" +
"FYI, here’s the track listing:<br><br>" +
"A:<br>" +
"1. Hooked on a Feeling- Blue Swede<br>" +
"2. Go All the Way - Raspberries<br>" +
"3. Spirit in the Sky- Norman Greenbaum<br>" +
"4. Moonage Daydream - David Bowie<br>" +
"5. Fooled Around and Fell In Love - Elvin Bishop<br><br>" +
"B:<br>" +
"6. I'm Not in Love - 10cc<br>" +
"7. I Want You Back - Jackson 5<br>" +
"8. Come and Get Your Love - Redbone<br>" +
"9. Cherry Bomb - The Runaways<br>" +
"10. Escape (The Piña Colada Song) - Rupert Holmes<br>" +
"11. O-O-H Child - The Five Stairsteps<br>" +
"12. Ain't No Mountain High Enough - Marvin Gaye & Tammi Terrell<br><br>" +
"-Groot", "There are two types of beings in the universe, those who dance, and those who do not.<br><br>" +
"I Want You Back by Jackson 5 is my jam. What’s yours?"]
let rev = 0;

function on(){
    optId = setInterval(reverse, 4);
}

function change(){
    if(rev===1){
        if($("#text").val() !== ''){
            $("#content").html("I am Groot!");
            $("#yout").css('display', 'block')
        }
    }
    else{
        if($("#text").val() !== ''){
            $("#content").html(tex[i])
            $("#yout").css('display', 'block')
            if(i==0){
                $("#yout").attr('src', 'https://www.youtube.com/embed/eo813WVXqk8');
            }
            else if(i==1){
                $("#yout").attr('src', 'https://www.youtube.com/embed/BEPbXYzE5_Y');
            }
            i = (i+1)%tex.length;
            // i= Math.floor(Math.random() * 2);
            // document.getElementById('test').value='';
        }
    }
    $("#text").val('');
}

function reverse(){
    if($('#cmn-toggle-4').prop('checked')){
        rev = 1;
    }
    else{
        rev = 0;
    }
}