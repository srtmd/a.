const trackCover= document.querySelector("#track_cover");
const trackArtist= document.querySelector("#track_artist");
const trackTitle= document.querySelector("#track_title");
const currentMins= document.querySelector("#current_time_mins");
const currentSecs= document.querySelector("#current_time_secs");
const trackmins= document.querySelector("#track_mins");
const tracksecs= document.querySelector("#track_secs");
const prevBtn=document.querySelector("#prev");
const playPause=document.querySelector("#play_pause");
const nextBtn= document.querySelector("#next");
const trackRange=document.querySelector("#range");
const vol=document.querySelector("#vol");
const currentTrack= document.createElement("audio");
const container= document.querySelector("#container");

let isPlaying= false;
let trackIndex= 4;

const songs=[
    {
        artistName: "Juice WRLD, Lil Uzi Vert",
        songName:"Wasted",
        img:"images/wasted.jpg",
        music:"musics/wasted.mp3"
    },
    {
        artistName: "SCXR SOUL, Sx1nxwy",
        songName:"DEMONS IN MY SOUL",
        img:"images/demons.jpg",
        music:"musics/demons.mp3"
    },
    {
        artistName: "Clams Casino, Imogen Heap",
        songName:"I'm God",
        img:"images/imgod.jpg",
        music:"musics/imgod.mp3"
    },
    {
        artistName: "Crim3s",
        songName:"Stay Ugly",
        img:"images/ugly.jpg",
        music:"musics/ugly.mp3"
    },
    {
        artistName: "BLESSED MANE",
        songName:"Mental Disease",
        img:"images/mental.jpg",
        music:"musics/mental.mp3"
    },
    {
        artistName: "Frank Ocean",
        songName:"In My Room",
        img:"images/frank.jpg",
        music:"musics/frank.mp3"
    },
    {
        artistName: "AZTEK",
        songName:"Out Like A Light",
        img:"images/aztek.jpg",
        music:"musics/aztek.mp3"
    },
];

loadTrack(trackIndex);
setInterval(fulltime, 1000);


function loadTrack(trackIndex){
    currentTrack.src= songs[trackIndex].music;
    currentTrack.load();

    trackCover.src= songs[trackIndex].img;
    trackArtist.textContent= songs[trackIndex].artistName;
    trackTitle.textContent= songs[trackIndex].songName;
    //container.style.backgroundImage= "url("+songs[trackIndex].img+")";
    volume();
};
function next(){
    if(trackIndex>=songs.length-1){
        trackIndex=0;
    }else{
        trackIndex++
    }
    loadTrack(trackIndex);
    play();
};
function prev(){
    if(trackIndex<=0){
        trackIndex=songs.length-1;
    }else{
        trackIndex--
    }
    loadTrack(trackIndex);
    play();
};
function play_pause(){
    isPlaying? pause() : play();
};
function play(){
    isPlaying= true;
    currentTrack.play();
    playPause.classList.remove("bi-play-fill");
    playPause.classList.add("bi-pause-fill");
};
function pause(){
    isPlaying= false;
    currentTrack.pause();
    playPause.classList.remove("bi-pause-fill");
    playPause.classList.add("bi-play-fill");
};
function fulltime(){
    const mins=String(Math.floor((currentTrack.duration)/60)).padStart(2,"0");
    const secs=String(Math.floor(currentTrack.duration-(mins*60))).padStart(2,"0");

    const currMins=String(Math.floor((currentTrack.currentTime)/60)).padStart(2,"0");
    const currSecs=String(Math.abs(Math.floor((currMins*60)-currentTrack.currentTime))).padStart(2,"0");

    trackmins.textContent=mins;
    tracksecs.textContent=secs;
    currentMins.textContent= currMins;
    currentSecs.textContent=currSecs;
    


    trackRange.value=currentTrack.currentTime;
    trackRange.max= currentTrack.duration;


    if(currentTrack.ended){
        next();
    };
};
function volume(){
    currentTrack.volume=vol.value/110;
};
function seek(){
    currentTrack.currentTime=trackRange.value;
};