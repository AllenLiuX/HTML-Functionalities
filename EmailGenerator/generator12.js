// let i = 0;
// let rev = 0;

// function on(){
//     optId = setInterval(reverse, 4);
// }

function reset(){
    $("#company").val('');
    $("#name").val('');
    $("#e9").html('asdf');
    $(".mail").html('');
}

function generate(){
    let name, company;
    $("#yout").css('display', 'block');
    $("#sponsor").css('display', 'block');
    if($("#name").val() == ''){
        // alert('Please enter the email company name, ie. google.com');
        // return;
        name = 'Jay Chou';
    }
    else{
        name = $("#name").val();
    }
    if($("#company").val() == ''){
        // alert('Please enter your full name, ie. George Washington');
        // return;
        company = 'http://jvrmusic.com/'.replace(/(https|http|www\.|:|\/)/g,'').toLowerCase();
    }
    else{
        company = $("#company").val().replace(/(https|http|www\.|:|\/)/g,'').toLowerCase();
    }

    // let name = $("#name").val();
    // let company = $("#company").val().replace(/(https|http|www\.|:|\/)/g,'');

    let name_list = name.split(' ');
    if(name_list.length == 1){
        alert('Please enter your full name with first name and last name seperated by space, ie. George Washington')
        return;
    }
    let first = name_list[0].toLowerCase();
    let last = name_list[1].toLowerCase();
    let mails = [
        first+last+'@'+company, first+'.'+last+'@'+company, first+'_'+last+'@'+company,
        first+'@'+company, last+'@'+company, first[0]+last+'@'+company,
        first+last[0]+'@'+company, last+first[0]+'@'+company, first+'-'+last+'@'+company,
        first[0]+'.'+last+'@'+company, first+'.'+last[0]+'@'+company
    ];
    let allmails = '';
    for(let i=0; i<mails.length-1; i++){
        allmails += mails[i] + ', ';
    }
    allmails += mails[mails.length-1];
    $("#all").html(allmails);
    $("#e1").html(first+last+'@'+company);
    $("#e2").html(first+'.'+last+'@'+company);
    $("#e3").html(first+'_'+last+'@'+company);
    $("#e4").html(first+'@'+company);
    $("#e5").html(last+'@'+company);
    $("#e6").html(first[0]+last+'@'+company);
    $("#e7").html(first+last[0]+'@'+company);
    $("#e8").html(last+first[0]+'@'+company);
    $("#e9").html(first+'-'+last+'@'+company);
    $("#e10").html(first[0]+'.'+last+'@'+company);
    $("#e11").html(first+'.'+last[0]+'@'+company);
}

// function change(){
//     if(rev===1){
//         if($("#text").val() !== ''){
//             $("#content").html("I am Groot!");
//             $("#yout").css('display', 'block')
//         }
//     }
//     else{
//         if($("#text").val() !== ''){
//             $("#content").html(tex[i])
//             $("#yout").css('display', 'block')
//             if(i==0){
//                 $("#yout").attr('src', 'https://www.youtube.com/embed/eo813WVXqk8');
//             }
//             else if(i==1){
//                 $("#yout").attr('src', 'https://www.youtube.com/embed/BEPbXYzE5_Y');
//             }
//             i = (i+1)%tex.length;
//             // i= Math.floor(Math.random() * 2);
//             // document.getElementById('test').value='';
//         }
//     }
//     $("#text").val('');
// }
//
// function reverse(){
//     if($('#cmn-toggle-4').prop('checked')){
//         rev = 1;
//     }
//     else{
//         rev = 0;
//     }
// }