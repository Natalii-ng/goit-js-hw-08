import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);
player.setCurrentTime(localStorage.getItem('setCurrentTime(|)') || 0);
player.on('timeupdate', throttle(onPlay, 500));

function onPlay({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
}

