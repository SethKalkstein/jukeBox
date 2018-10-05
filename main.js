var listOfSongs = ["02 Radiohead - Paranoid Android.mp3","03 Locomotion.mp3","01 Good Times Roll.mp3","01 21st Century Schizoid Man-Mirrors.mp3","10 - Locomotive Breath.mp3", "01 - Magic Man.mp3","01 - Ned's Atomic Dustbin - Kill Your Television.mp3","01 - The Song Remains The Same.mp3"]

var songObjectArray = [];

for(let i = 0;i<listOfSongs.length;i++){
    var x = new Audio("musicFiles/"+listOfSongs[i]);
    songObjectArray.push(x);
}


var play = document.getElementById("play");
var pause = document.getElementById("pause");
var forward = document.getElementById("forward");
var reverse = document.getElementById("reverse");


class JukeBox{
    constructor(songList){
        this.songList=songList;
        console.log(this.songList);
        this.songCount = 0;
    }
    player() {
        console.log(this.songList[this.songCount]);
        console.log("player is playing")
        console.log(this.songCount);
        // this.songCount++;
        // console.log(songObjectArray);
        this.songList[this.songCount].play();
    }
    pauser() {
        this.songList[this.songCount].pause();
        console.log(this.songList[this.songCount].duration);
        // this.songList[this.songCount].getStartDate();
    }
    forwarder(){
        // this.pauser();
        this.songList[this.songCount].load();
        if(this.songCount==this.songList.length-1){
            this.songCount=0;
        } else {
           this.songCount++; 
        }
        this.player();
    }
    reverser(){
        this.songList[this.songCount].load();
        if(this.songCount==0){
            this.songCount=this.songList.length-1;
        } else{
            this.songCount--;
        }
        this.player();
    }
}


var juke = new JukeBox(songObjectArray);

play.addEventListener("click", function()
    {juke.player()});
pause.addEventListener("click", function()
    {juke.pauser()});
forward.addEventListener("click", function()
    {juke.forwarder()});
reverse.addEventListener("click", function()
    {juke.reverser()});

// const testFolder = "./musicFiles"
// const fs = require('fs');
// console.log(fs);
// fs.readdirSync(testFolder).forEach(file => {
//   console.log(file);
// })

// '01 - Choral I.   Allegro Ma Non Troppo, Un Poco Maestoso.mp3'
// '01 - Magic Man.mp3'
// "01 - Ned's Atomic Dustbin - Kill Your Television.mp3"
// '01 - Rush - Subdivisions.flac'
// '01 - The Song Remains The Same.mp3'
// '01 21st Century Schizoid Man-Mirrors.mp3'
// '01 For Your Love.mp3'
// '01 Good Times Roll.mp3'
// '01 I Can Learn.mp3'
// '01 One of These Days.mp3'
// '01 Soul To Squeeze.mp3'
// '01 Tell All The People.MP3'
// "01. Baba O' Riley.mp3"
// "01. Concerto No. 1 In E, Rv 269 'spring' - I Allegro.mp3"
// '02 - Borderline.mp3'
// '02 Radiohead - Paranoid Android.mp3'
// '02. So Lonely.mp3'
// '03 - Motorbreath.mp3'
// '03 Blue in Green.mp3'
// '03 Locomotion.mp3'
// '03 Roulette Dares (The Haunt Of).mp3'
// '03. Moose The Mooche.mp3'
// '04 terminally chill.mp3'
// '06 - Hand of Doom.mp3'
// '07 - Long Division.mp3'
// '07 - The Cinema Show.mp3'
// '07 Orange Crush.mp3'
// '07. 1952 Vincent Black Lightning.mp3'
// '10 - Beautiful Girls.mp3'
// '10 - Locomotive Breath.mp3'
// '12 Polythene Pam.mp3'
// 'B0012QOZQQ_(disc_1)_01_-_Roundabout_(Remastered_Version).mp3'
// 'Europe - The final countdown -01- The final countdown.mp3'
// 'James Brown - Funky Side Of Town.mp3'
// 'Neil Young - Everybody Knows This Is Nowhere - 04 - Down By The River.mp3'
// 'Pantera - Far Beyond Driven - 02 - Becoming.mp3'
// 'The Jimi Hendrix Experience - Axis- Bold As Love - 13 - Bold As Love.mp3'
// 'The Melvins - Houdini - Going Blind.mp3'
// 'Tool - Aenima.mp3'
