
const Mbutton = document.querySelectorAll("._meme_button");
const Mimage = document.querySelector("#memeBody img");
const Mtitle = document.getElementById("_meme_title");



const fetchMeme = async () => {
    let response = await fetch("https://meme-api.com/gimme/memes");
    let a = await response.json();
    return a;
}
let p = async () => {
    try{
        UpdateMeme('Logo.png',"Loading Meme ...")
        let b  = await fetchMeme();
        console.log(b.url);
        UpdateMeme(b.url,b.title);
    }
    catch(error){
console.log(error);
    }
};
const UpdateMeme = (url,title)=>{
   Mimage.setAttribute("src",url);
    Mtitle.innerHTML = title;
    
}

Mbutton[ 1].addEventListener("click",p);
Mbutton[0].addEventListener("click",p);
p();
