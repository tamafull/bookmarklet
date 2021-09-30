var time = prompt('更新間隔?(秒)','3');
if (time && !isNaN(time)) {
    var frm = '<html><frameset rows="*,0"><frame src="'+location+'"><frame></frameset></html>';
    var win = open();
    with (win.document) {
        write(frm);
        close();
    }
    var script  =
        '<html><script> function R(){'
        +    'parent.frames[0].location="'+location+'";'
        + '}setInterval("R()",'+time*1000+');'
        + '</script></html>';
    with (win.frames[1].document) {
        write(script);close();
    }
}
