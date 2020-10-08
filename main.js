// let _template = require('./lib/template')

// _template.html();

console.log('main.js start');
function input_video() {
    // return fetch('data/data.json')
    //     .then(response => response.json())
    //     .then(json => json.items);
}

function load_video_data() {
    return fetch('data/data.json')
        .then(response => response.json())
        .then(json => json.videos);
}

function display_video(videos) {
    // console.log(videos[0].view_count);
}

function video_count() {

}
// function on_video_click() {
//     event.target.
// }

function setEventListeners() {
    const logo = document.querySelector('.logo');
    const video_container = document.querySelector('videoc');

    video_container.addEventListener('click', (event) => on_video_click(event));
}


let videos_value; // json에서 로드된 데이터, 웹에서 실제로 사용할 데이터 변수

load_video_data()//
    .then(videos => {
        videos_value = videos;
    })
    .then(videos => {
        display_video(videos);
    });
    // .then(console.log('success'))
    // .catch(console.log('fail'));