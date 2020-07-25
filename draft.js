function circle_control(circle)
{
    rotate_1 = circle;
    $("#background_image").animate({opacity:"0"},1000,function(){$(this).css("background-image","url('image/top/"+circle+".jpg')")});
    for(var i=1;i<7;i++)
    {
        if(i==circle)
        {
            $("#circle_"+i)[0].style.backgroundColor="#bad8d5";
        }
        else
        {
            $("#circle_"+i)[0].style.backgroundColor="gray";
        }
    }
    $("#background_image").animate({opacity:"1"},1000);
    rotate_1--;
    if(rotate_1==0)
    {
        rotate_1=6;
    }
    setTimeout("circle_control("+rotate_1+")",1000);
}
