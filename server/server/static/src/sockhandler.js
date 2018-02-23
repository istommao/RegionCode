$(function() {
    var conn = null;

    function sockConnect() {
        if (conn == null) {
            var url = 'http://127.0.0.1:8080/notice/';
            connect(url);
        } else {
            disconnect();
        }
    }

    sockConnect();

    function connect(url) {
        disconnect();
        conn = new SockJS(url);
        conn.onopen = function() {
        };

        conn.onmessage = function(event) {
            showMsg(event.data)
        };
        conn.onclose = function() {
            conn = null;
        };
    }

    function disconnect() {
        if (conn != null) {
            conn.close();
            conn = null;
        }
    }

    function showMsg(message) {
      layer.alert(
        message, {
          title: '消息通知',
          icon: 1,
          closeBtn: 0,
          top: '10px',
          time: 2000
        }
      );
    }

});