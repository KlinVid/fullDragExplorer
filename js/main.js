document.body.addEventListener("dragover", function (e) {
    e.preventDefault();
});

document.body.addEventListener("drop", function (e) { 
    e.preventDefault();

    // получаем информацию из файла
    let file = e.dataTransfer.files[0];
    let reader = new FileReader();
    
    // проверяем расширение для отображения картинки
    if (file.type.match('image.*')) {
        
        if (document.getElementById('dropbox')) {
            document.getElementById('dropbox').remove();
        }
        
        reader.onload = function (event) { 
            
            // создаем элемент для отображения картинки
            let img = document.createElement('img');
            img.src = event.target.result;
            img.setAttribute('id', 'dropbox');
            document.getElementById('box').append(img);

            document.getElementById('text').innerHTML = '';
            document.getElementById('box').style.border = 0;
        };
    
        // считываем вод файла
        reader.readAsDataURL(file);

    }    
});