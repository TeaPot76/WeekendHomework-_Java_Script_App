document.addEventListener('DOMContentLoaded', () => {

  const newPlaylistform = document.querySelector('#new-playlist-form');
  newPlaylistform.addEventListener('submit', handleNewPlaylistFormSubmit);

  // const newPlaylistform = document.querySelector('#new-playlist-form');
  // newPlaylistform.addEventListener('submit', handleNewPlaylistFormSubmit);


  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
});


const handleNewPlaylistFormSubmit = function(evt) {
  evt.preventDefault();

  const playlistItem = createPlaylistItem(event.target);
  const playlist = document.querySelector('#playlist');
  playlist.appendChild(playlistItem);

  //
  const playlistTimeItem = createPlaylistTimeItem(event.target);
  const playlistTime = document.querySelector('#playlist-time');
  playlistTime.appendChild(playlistTimeItem);

  event.target.reset();
}


const createPlaylistItem = function(form) {
  const playlistItem = document.createElement('ul');
  playlistItem.classList.add('playlist-item');

  const song = document.createElement('li');
  song.textContent = form.song.value;
  playlistItem.appendChild(song);

  const band = document.createElement('li');
  band.textContent = form.band.value;
  playlistItem.appendChild(band);

  const length = document.createElement('li');
  length.className = 'song-length'
  length.textContent = form.length.value;
  playlistItem.appendChild(length);


  const style = document.createElement('p');
  style.textContent = form.style.value;
  playlistItem.appendChild(style);


  return playlistItem;
}

const createPlaylistTimeItem = function(form) {

  var i;
  var sum = 0; // initialize the sum
  let p = document.getElementsByClassName('song-length');
  for (i = 0; i < p.length; i++) {
    if (!isNaN(Number(p[i].innerHTML))) {
      sum = Number(sum + Number(p[i].innerHTML));
      // p[i].innerHTML gives you the value
    }

  }



  const playlistTimeItem = document.createElement('p');
  playlistTimeItem.classList.add('playlist-item');
    event.target.reset();
  const totalTime = document.createElement('p');
  playlistTimeItem.textContent = sum
  playlistTimeItem.appendChild(totalTime);
  return playlistTimeItem;
}


//
//  let playlistLength = (input) => {
//  let result = input.map((length) =>
//  {  return lengths;
//  });
// return time = lengths.reduce((sum, length)=>
//  { return sum+=length });
//   return time;
//
//  }


// }




const handleDeleteAllClick = function(event) {
  const playlist = document.querySelector('#playlist');
  playlist.innerHTML = '';
}

// handleNewPlaylistSubmit.textContent = `Song:
// ${evt.target.song.value}
// Band: ${evt.target.band.value}
// Style: ${evt.target.style.value}` ;
// console.log(handleNewPlaylistSubmit); }
