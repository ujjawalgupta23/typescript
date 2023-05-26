type Song = {
    title: string;
    artist: string;
    numStreams: number;
    credits: { producer: string; writer: string };
};

function calculatePayout(song: Song): number {
    return song.numStreams * 23;
}

function printSong(song: Song): void {
    console.log(`Song name is ${song.title}, is sung by ${song.artist}`);
}

const mySong: Song = {
    title: "Calm Down",
    artist: "Rema, Selena Gomez",
    numStreams: 465,
    credits: { producer: "Andre Vibez London", writer: "Rema" },
};

calculatePayout(mySong);
printSong(mySong);
