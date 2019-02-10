



var hots=document.getElementById("hot_showing_list")
var coms=document.getElementById("coming_soon_list")
var cajax=new XMLHttpRequest;
cajax.open("get","php/case1.php",true);
cajax.send(null);
cajax.onreadystatechange=function(){
    if(cajax.readyState===4&&cajax.status===200){
        var cdata=JSON.parse(cajax.responseText);
        var cstr="";
        var mstr="";
        for(var casei=0;casei<cdata.length;casei++){
            cstr+=`
                <dl>
                            <dt>
                                <a href=""><img src="${cdata[casei].imgurl}" alt=""></a>
                                <div class="hotM_p">
                                </div>
                                <p class="word">${cdata[casei].cont}</p>
                                <em>${cdata[casei].pingfen}</em>
                            </dt>
                            <dd>
                                <a href="">购票</a>
                            </dd>
                        </dl>
                
            `
        }
        hots.innerHTML=cstr;
    }
}