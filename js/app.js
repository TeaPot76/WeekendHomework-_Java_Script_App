document.addEventListener('DOMContentLoaded', () => {

  const newPlaylistform = document.querySelector('#new-playlist-form');
  newPlaylistform.addEventListener('submit', handleNewPlaylistFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
});


    const handleNewPlaylistFormSubmit = function (evt) {
    evt.preventDefault();

    const playlistItem = createPlaylistItem(event.target);
    const playlist = document.querySelector('#playlist');
    playlist.appendChild(playlistItem);

    event.target.reset();
  }


  const createPlaylistItem = function (form) {
    const playlistItem = document.createElement('ul');
    playlistItem.classList.add('playlist-item');

    const song = document.createElement('li');
    song.textContent = form.song.value;
    playlistItem.appendChild(song);

    const band = document.createElement('li');
    band.textContent = form.band.value;
    playlistItem.appendChild(band);

    const style = document.createElement('li');
    style.textContent = form.style.value;
    playlistItem.appendChild(style);
    return playlistItem;
  }

  const handleDeleteAllClick = function (event) {
    const playlist = document.querySelector('#playlist');
    playlist.innerHTML = '';
  }

    // handleNewPlaylistSubmit.textContent = `Song:
    // ${evt.target.song.value}
    // Band: ${evt.target.band.value}
    // Style: ${evt.target.style.value}` ;
    // console.log(handleNewPlaylistSubmit); }
