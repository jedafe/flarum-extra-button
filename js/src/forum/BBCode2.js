export default function insertAtCursor2() {
    if (app.forum.attribute('zerosonesfun-bbcode-button.code2')) {
        (async () => {
    
            let input = document.querySelector('textarea.FormControl');
            
            let pos = input.selectionStart
            let front = (input.value).substring(0, pos);  
            let back = (input.value).substring(pos, input.value.length); 
            let middle = app.forum.attribute('zerosonesfun-bbcode-button.code2');
            
            input.value = front+middle+back;
            pos = pos + 999999;
            
            input.selectionStart = pos;
              input.selectionEnd = pos;
              input.focus();
          
            })()
    }
    if (app.forum.attribute('zerosonesfun-bbcode-button.code2') === '') {
        (async () => {
    
            let input = document.querySelector('textarea.FormControl');
            
            let pos = input.selectionStart
            let front = (input.value).substring(0, pos);  
            let back = (input.value).substring(pos, input.value.length); 
            let middle = "[][/]";
            
            input.value = front+middle+back;
            pos = pos + 1;
            
            input.selectionStart = pos;
              input.selectionEnd = pos;
              input.focus();
          
            })()
    }
}