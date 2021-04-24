function gramophone(bandName,album,songName){
    bandName = bandName.toString();
    album = album.toString();
    songName = songName.toString();
    let duration = (album.length * bandName.length) * songName.length /2;
    let result = duration / 2.5;
    console.log(`The plate was rotated ${Math.ceil(result)} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs'); 