console.log("Welcome to spotify");
// Initialize the variable
let songIndex = 0;
let audioElement = new Audio("music/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems =  Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {songName: "Let me Love You", filePath: "music/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Teri Mitti", filePath: "music/2.mp3", coverPath: "cover/2.jpg"},
    {songName: "Isq Risk - Rahat Fateh Ali ", filePath: "music/3.mp3", coverPath: "cover/3.jpg"},
    {songName: "Designer - Yo Yo Honey Singh", filePath: "music/4.mp3", coverPath: "cover/4.jpg"},
    {songName: "Kachiyaan Kachiyaan - Jubin Nautiyal", filePath: "music/5.mp3", coverPath: "cover/5.jpg"},
    {songName: "Chura Liya Hai Tumne Jo Dil Ko", filePath: "music/6.mp3", coverPath: "cover/6.jpg"},
    {songName: "Apna Har Din Aise Jiyo", filePath: "music/7.mp3", coverPath: "cover/7.jpg"},
]

songItems.forEach((element, i)=>{

   element.getElementsByClassName("covers")[0].src =  songs[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


//audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
if(audioElement.paused || audioElement.currentTime<=0 ){
   audioElement.play(); 
    document.getElementById("masterPlay").src = "image/pause.jpg";
  gif.style.opacity = 1;

}else{
    audioElement.pause();
    document.getElementById("masterPlay").src = "image/play.jpg";
    gif.style.opacity = 0;
}
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Upadte SeekBar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value = progress;

})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
      
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
       
    
        })
    
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click', (e)=> {
     makeAllPlays();
     songIndex = parseInt(e.target.id);
     e.target.classList.remove("fa-circle-play");
     e.target.classList.add("fa-circle-pause");
     masterSongName.innerText = songs[songIndex].songName;
     audioElement.src = `music/${songIndex+1}.mp3`;
     audioElement.currentTime = 0;
     audioElement.play();
     gif.style.opacity = 1;
     document.getElementById("masterPlay").src = "image/pause.jpg";
    })
})
document.getElementById("next").addEventListener('click', ()=>{
    if(songIndex >= 6){
        songIndex = 0; 
    }else{
        songIndex += 1;
    }
    audioElement.src = `music/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     gif.style.opacity = 1;
     document.getElementById("masterPlay").src = "image/pause.jpg";
   
})


document.getElementById("previous").addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex = 0; 
    }else{
        songIndex -= 1;
    }
    audioElement.src = `music/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     gif.style.opacity = 1;
     document.getElementById("masterPlay").src = "image/pause.jpg";
   
})