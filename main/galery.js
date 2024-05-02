const container = document.querySelector('.image--container');
for( let i = 1 ; i <= 28; i++){
    const para = document.createElement("img");
    para.setAttribute('src',`/assets/gallery/${i}.jpg`)
    container.appendChild(para)
}
