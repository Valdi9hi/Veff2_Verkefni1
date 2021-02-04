/**
 * Tekur inn tíma í sekúndum og skilar fallegum tíma ... TODO
 * @param  {int} time Tími í sekúndum
 * @return {string}   Fallegur tími
 */
export function videoLength(time) {
    const hours = Math.floor(time / 3600) > 0 ? `${Math.floor(time / 3600)}:` : '';
    let minutes;
    if (Math.floor((time % 3600) / 60) > 0 && Math.floor((time % 3600) / 60) < 10) {
      minutes = `${Math.floor((time % 3600) / 60)}:`;
    } else if (Math.floor((time % 3600) / 60) > 0) {
      minutes = `0${Math.floor((time % 3600) / 60)}:`;
    } else {
      minutes = '00:';
    }
    const seconds = time % 60 > 10 ? time % 60 : `0${time % 60}`;
    return (hours + minutes + seconds);
  }