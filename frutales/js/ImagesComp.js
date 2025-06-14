

let template=`
<div class="galeria">

    <div class="images">
        <div class="image">
            <img src="[SRC]">
            <span class="delete-btn">×</span>
        </div>
    </div>

    <button class="upload-btn">nueva foto</button>
    <input type="file" accept="image/*" style="display: none;">

</div>


`;



export function ImagesComp(divElement, obj,saveFn) {
    // Ensure fotos array exists
    if (!obj.fotos) obj.fotos = [];
    
    // Create main elements
    const imagesContainer = document.createElement('div');
    imagesContainer.className = 'images';
    
    const uploadBtn = document.createElement('button');
    uploadBtn.textContent = 'agregar foto';
    uploadBtn.className = 'upload-btn';
    
    // File input (hidden)
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';
    
    // Render images
    function renderImages() {
        imagesContainer.innerHTML = '';
        obj.fotos.forEach((foto, index) => {
            const imgDiv = document.createElement('div');
            imgDiv.className = 'image';
            
            const img = document.createElement('img');
            img.src = foto;
            
            const deleteBtn = document.createElement('span');
            deleteBtn.innerHTML = '&times;';
            deleteBtn.className = 'delete-btn';
            deleteBtn.addEventListener('click', () => deleteImage(index,foto));
            
            imgDiv.appendChild(img);
            imgDiv.appendChild(deleteBtn);
            imagesContainer.appendChild(imgDiv);
        });
    }
    
    // Delete image
    function deleteImage(index,filetodel) {
        let con=confirm("borrar "+filetodel+" ???");
        if(!con)return;
        obj.fotos.splice(index, 1);
        renderImages();
        if(saveFn)saveFn();

if(filetodel) borrarArchivo(filetodel)

    }
    function borrarArchivo(filetodel){
        const formData = new FormData();
        formData.append('filetodel', filetodel);
                fetch('upload.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json()).then(jsn=>console.log(jsn)).catch(e=>console.log(e));


    }
    // Handle file selection
    function handleFileSelect(e) {
        const file = e.target.files[0];
        if (!file) return;
      
        const reader = new FileReader();
        reader.onload = (event) => {
            // Create preview container
            const previewContainer = document.createElement('div');
            previewContainer.className = 'upload-preview';
            
            // Create preview image
            const previewImg = document.createElement('img');
            previewImg.src = event.target.result;
            
            // Create OK button
            const okBtn = document.createElement('button');
            okBtn.textContent = 'subir esta imagen';
            okBtn.className = 'confirm-upload';
            okBtn.addEventListener('click', () =>{ 
            
                setLoading(true);
                setTimeout(()=>{
                uploadImage(file);},400);
            });
            
            // Create cancel button
            const cancelBtn = document.createElement('button');
            cancelBtn.textContent = 'cancelar';
            cancelBtn.className = 'cancel-upload';
            cancelBtn.addEventListener('click', () => previewContainer.remove());
            
            // Append elements
            previewContainer.appendChild(previewImg);
            previewContainer.appendChild(okBtn);
            previewContainer.appendChild(cancelBtn);
            divElement.appendChild(previewContainer);
        
        };
        reader.readAsDataURL(file);
   
    }
    
    // Upload image
    function uploadImage(file) {
        const formData = new FormData();
        formData.append('image', file);
        
        fetch('upload.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
          
            if (data.success) {
                obj.fotos.push(data.filePath);
                renderImages();
                if(saveFn)saveFn();

                setLoading(false);
                // Remove preview container
                document.querySelector('.upload-preview')?.remove();

            } else {
                alert('Error uploading image: ' + data.error);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error uploading image');
            setLoading(false);
        });
    }
    
    // Set up event listeners
    uploadBtn.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', handleFileSelect);
    
    // Initial render
    renderImages();
    
    // Append elements to container
    divElement.innerHTML = '';
    divElement.appendChild(imagesContainer);
    divElement.appendChild(uploadBtn);
    divElement.appendChild(fileInput);
    
  
    // Return API if needed
    return {
        refresh: renderImages,
        getImages: () => obj.fotos
    };
}


function setLoading(bol){
    let ld=document.querySelector('.LOADING');
    if(bol){

if(ld){} else{ 
ld=document.createElement('div');
ld.innerHTML="<h2>subiendo imagen...</h2>"
ld.classList.add('LOADING');
document.body.appendChild(ld)
}
ld.style.display="block";
} else {
if(ld){document.body.removeChild(ld);}
}


}