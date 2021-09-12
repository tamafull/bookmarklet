function save_strage(text){
    save_text = text + "\n";

    strage_text = localStorage.getItem('save_text');
    if (file == null) {
        localStorage.setItem('save_text', save_text);
    } else {
        save_text = file + save_text;
        localStorage.setItem('save_text', save_text);
    }

    return save_text;
};

function copy(text){
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
};

function open(url){
    var a = document.createElement('a');
    a.href = url;
    a.setAttribute('download', '(filename)');
    a.click();
};

file_name = document.querySelectorAll("[class^='MuiTypography-root jss']")[1].textContent;
url = document.querySelector("[src$='.mp4']").src;
text = save_strage(file_name);
copy(text);
open(url);
