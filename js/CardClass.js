import { songs } from "./data"

class Card {
  constructor(title, artist, duration, lyrics) {
    this.title = title
    this.artist = artist
    this.duration = duration
    this.lyrics = lyrics
  }

  createCard() {
    this.liEl = document.createElement('li')
    this.liEl.classList.add('music_item')

    this.liEl.innerHTML = `
          <div class="music_card">
            <div class="music_card-top">
              <svg class="music_card-icon" width="50"height="50" aria-hidden="true">
                <use href="./img/sprite.svg#web-logo"></use>
              </svg>
              <div class="music_card-descrb">
                <span class="music_card-title">${this.title}</span>
                <span class="music_card-name">${this.artist}</span>
              </div>
            </div>
            <p class="music_card-lyric">
                ${this.lyrics}
            </p>
             <svg class="music_card-quot" width="50"height="50" aria-hidden="true">
                <use href="./img/sprite.svg#quatation-icon"></use>
              </svg>
          </div>
    `
  }

}

export function renderCards() {
   const ulEL =  document.querySelector('.music_list')

   songs.f
}

