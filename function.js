


const imgSrc = [
    "https://upload.wikimedia.org/wikipedia/commons/6/60/Earth_from_Space.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b2/Venus_2_Approach_Image.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/5/58/Mars_23_aug_2003_hubble.jpg",
  ];
  
  const alt = ["Earth", "Neptune", "Sun", "Moon", "Venus", "Mars"]
  for (i = 0; i < imgSrc.length; i++) {
    const img = document.createElement("img");
    img.setAttribute("class", "preview");
    img.setAttribute("alt", "" + alt[i] + "");
    img.setAttribute("src", "" + imgSrc[i] + "");
    img.setAttribute("onmouseover", "upDate(this)");
    img.setAttribute("onmouseout", "unDo()");
    document.body.appendChild(img);
  }
  
  const images = document.getElementsByClassName("preview");
  for (i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "" + i + "");
    images[i].setAttribute("onfocus", "upDate(this)");
    images[i].setAttribute("onblur", "unDo()");
  }
  
  function upDate(previewPic) {

    document.getElementById('image').style.backgroundImage="url('" + previewPic.src + "')"; 
    document.getElementById('image').innerHTML=previewPic.alt;
  }
  
  function unDo() {
   
    X = document.getElementById('image');
    X.style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Hover over an image below to display here";
    
  }