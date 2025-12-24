import {navFunc, doSongPage, createfavoriteList} from "./handleButtonEvenets.js"


document.addEventListener('DOMContentLoaded', () => {

    navFunc("songs")
    doSongPage()
    createfavoriteList()
})