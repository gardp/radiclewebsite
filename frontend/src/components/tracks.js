// For files in the public folder, we use process.env.PUBLIC_URL
const imgSrc = process.env.PUBLIC_URL + '/assets/images/radicleavatar.jpg';
const Big = process.env.PUBLIC_URL + '/assets/music/01 Big (feat. Gunna).mp3';
const Dreams = process.env.PUBLIC_URL + '/assets/music/GardlyRadicle- Bad Dreams Remix.mp3';

// All of these artists are at https://pixabay.com/music/search/mood/laid%20back/
export default [
  {
    title: "Big",
    artist: "Gunna",
    audioSrc: Big,
    image: imgSrc,
    color: "#00aeb0"
  },
  {
    title: "Bad Dreams",
    artist: "GardlyRadicle",
    audioSrc: Dreams,
    image: imgSrc,
    color: "#00aeb0"
  }]
