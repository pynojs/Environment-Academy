window.onload = function() {
    //通过ajax发送请求
    var xhr;
    if(window.XMLHttpRequest) {
        xhr = new this.XMLHttpRequest();
    } else {
        xhr = new this.ActiveXObject('Microsoft.XMLHTTP');
    }
    //监听查询时间
    document.getElementById('query').addEventListener('click',function() {
        CAS = document.getElementById('CAS').value;
        //给出请求地址
        var url;
        xhr.open('GET',url);
        xhr.send();
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById('result').innerText = xhr.responseText;
            }
        }
    })
}