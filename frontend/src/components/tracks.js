// import React from 'react';
import '../styles/Tracks.css';

// For files in the public folder, we use process.env.PUBLIC_URL
const imgSrc = process.env.PUBLIC_URL + '/assets/images/';
const Big = process.env.PUBLIC_URL + '/assets/music/';
const Dreams = process.env.PUBLIC_URL + '/assets/music/GardlyRadicle- Bad Dreams Remi.mp3';

const tracksData = [
  {
    id: 1,
    title: "Big",
    artist: "Gunna",
    audioSrc: Big,
    image: `${imgSrc}radicleavatar.jpg`,
    links:{
      streamLink: "https://www.youtube.com/watch?v=ZBTb_xJBh5c",
      buyLink: "https://www.youtube.com/watch?v=ZBTb_xJBh5c",
      downloadLink: "https://www.youtube.com/watch?v=ZBTb_xJBh5c"
    },
    color: "#00aeb0",
    musicType: "Featured",
    genre: "Rap",
    bpm: 120,  
  },
  {
    id: 2,
    title: "Bad Dreams",
    artist: "GardlyRadicle",
    audioSrc: Dreams,
    image: `${imgSrc}radicleavatar.jpg`,
    links:{
      streamLink: "https://www.youtube.com/watch?v=ZBTb_xJBh5c",
      buyLink: "https://www.youtube.com/watch?v=ZBTb_xJBh5c",
      downloadLink: "https://www.youtube.com/watch?v=ZBTb_xJBh5c"
    },
    color: "#00aeb0",
    musicType: "Featured",
    genre: "Rap",
    bpm: 120,
  },
  {
    id: 3,
    title: "Bidffgg",   
    artist: "Gudfgfdgnna",
    audioSrc: Big,
    image: `${imgSrc}radicleavatar.jpg`,
    links:{
      streamLink: "https://www.youtube.com/watch?v=ZBTb_xJBh5c",
      buyLink: "https://www.youtube.com/watch?v=ZBTb_xJBh5c",
      downloadLink: "https://www.youtube.com/watch?v=ZBTb_xJBh5c"
    },
    color: "#00aeb0",
    musicType: "Remix",
    genre: "Rap",
    bpm: 120,
  },
  {
    id: 3,
    title: "Bidffgg",   
    artist: "Gudfgfdgnna",
    audioSrc: Big,
    image: `${imgSrc}radicleavatar.jpg`,
    links:{
      streamLink: "https://www.youtube.com/watch?v=ZBTb_xJBh5c",
      buyLink: "https://www.youtube.com/watch?v=ZBTb_xJBh5c",
      downloadLink: "https://www.youtube.com/watch?v=ZBTb_xJBh5c"
    },
    color: "#00aeb0",
    musicType: "Remix",
    genre: "Rap",
    bpm: 120,
  },
] ;

const tracksData2 = [
  {
    id: 1,
    title: "Big",
    artist: "Gunna",
    audioSrc: Big,
    image: `${imgSrc}radicleavatar.jpg`,
    links:{
      streamLink: "https://www.youtube.com/watch?v=ZBTb_xJBh5c",
      buyLink: "https://www.youtube.com/watch?v=ZBTb_xJBh5c",
      downloadLink: "https://www.youtube.com/watch?v=ZBTb_xJBh5c"
    },
    color: "#00aeb0",
    musicType: "Featured",
    genre: "Rap",
    bpm: 120,  
  },
  {
    id: 2,
    title: "Bad Dreams",
    artist: "GardlyRadicle",
    audioSrc: Dreams,
    image: `${imgSrc}radicleavatar.jpg`,
    links:{
      streamLink: "https://www.youtube.com/watch?v=ZBTb_xJBh5c",
      buyLink: "https://www.youtube.com/watch?v=ZBTb_xJBh5c",
      downloadLink: "https://www.youtube.com/watch?v=ZBTb_xJBh5c"
    },
    color: "#00aeb0",
    musicType: "Featured",
    genre: "Rap",
    bpm: 120,
  },
  {
    id: 3,
    title: "Bidffgg",   
    artist: "Gudfgfdgnna",
    audioSrc: Big,
    image: `${imgSrc}radicleavatar.jpg`,
    links:{
      streamLink: "https://www.youtube.com/watch?v=ZBTb_xJBh5c",
      buyLink: "https://www.youtube.com/watch?v=ZBTb_xJBh5c",
      downloadLink: "https://www.youtube.com/watch?v=ZBTb_xJBh5c"
    },
    color: "#00aeb0",
    musicType: "Remix",
    genre: "Rap",
    bpm: 120,
  },
  {
    id: 4,
    title: "Bidffgg",
    artist: "Gudfgfdgnna",
    audioSrc: Big,
    image: `${imgSrc}radicleavatar.jpg`,
    link: "https://www.youtube.com/watch?v=ZBTb_xJBh5c",
    color: "#00aeb0",
    musicType: "Remix",
    genre: "Rap",
    bpm: 120,
  },
  {
    id: 5,
    title: "Bidffgg",
    artist: "Gudfgfdgnna",
    audioSrc: Big,
    image: `${imgSrc}radicleavatar.jpg`,
    link: "https://www.youtube.com/watch?v=ZBTb_xJBh5c",
    color: "#00aeb0",
    musicType: "Remix",
    genre: "Rap",
    bpm: 120,
    action: ["Stream Song"],
  },
  {
    id: 6,
    title: "Bidffgg",     
    artist: "Gudfgfdgnna",
    audioSrc: Big,
    image: `${imgSrc}radicleavatar.jpg`,
    link: "https://www.youtube.com/watch?v=ZBTb_xJBh5c",
    color: "#00aeb0",
    musicType: "Instrumental",
    genre: "Rap",
    bpm: 120,
  },
  {
    id: 7,
    title: "Bidffgg",
    artist: "Gudfgfdgnna",
    audioSrc: Big,
    image: `${imgSrc}radicleavatar.jpg`,
    link: "https://www.youtube.com/watch?v=ZBTb_xJBh5c",
    color: "#00aeb0",
    musicType: "Instrumental",
    genre: "Rap",
    bpm: 120,
  }, 
  {
    id: 8,
    title: "Bidffgg",
    artist: "Gudfgfdgnna",
    audioSrc: Big,
    image: `${imgSrc}radicleavatar.jpg`,
    links:{
      streamLink: "https://www.youtube.com/watch?v=ZBTb_xJBh5c",
      buyLink: "https://www.youtube.com/watch?v=ZBTb_xJBh5c",
      downloadLink: "https://www.youtube.com/watch?v=ZBTb_xJBh5c"
    },
    color: "#00aeb0",     
    musicType: "Instrumental",
    genre: "Rap",
    bpm: 120,
  },    
] ;

export default tracksData;
