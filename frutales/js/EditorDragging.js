export function EditorDragging() {

    const editor = document.getElementById('editor');
    const dragHandle = editor.querySelector('.drag-handle');


    let isDragging = false;
    let offsetX, offsetY;

 
    dragHandle.addEventListener('mousedown', function (e) {
        if (e)
            e.preventDefault();
        isDragging = true;
 
        offsetX = e.clientX - editor.getBoundingClientRect().left;
        offsetY = e.clientY - editor.getBoundingClientRect().top;
 
        document.body.style.cursor = 'grabbing';
        editor.style.cursor = 'grabbing';
        editor.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.9)';
        editor.style.opacity = '0.95';
    });
 
    document.addEventListener('mousemove', function (e) {
        if (isDragging) {
         
            e.preventDefault();

   
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;


            const maxX = window.innerWidth - editor.offsetWidth * 0.2;
            const maxY = window.innerHeight - editor.offsetHeight * 0.2;

            editor.style.left = Math.max(0, Math.min(x, maxX)) + 'px';
            editor.style.top = Math.max(0, Math.min(y, maxY)) + 'px';


        }
    });
 
    document.addEventListener('mouseup', function () {
        if (isDragging) {
            isDragging = false;
 
            document.body.style.cursor = '';
            editor.style.cursor = 'move';
            editor.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.7)';
            editor.style.opacity = '1';
        }
    });


}
