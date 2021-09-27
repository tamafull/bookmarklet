const e=document.createElement('input');
e.value=`[${document.title}](${location.href})`;
document.querySelector('body').append(e);
e.select();
document.execCommand('copy');
e.remove();
