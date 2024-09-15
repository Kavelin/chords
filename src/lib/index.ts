export interface Chord {
	root: number; //semitones 0 - 11, 0 being C
	inversion?: number; // 1 - 11, distance relative to root in semitones
	quality: 'm' | 'M' | '+' | 'o'; // minor, Major, augmented, diminished
	extension?: 7 | 9 | 11 | 13;
	alterations?: {
		alter: number; // not in semitones!
		direction: -1 | 0 | 1; // sharp or flat
	}[];
} /* example of alterations:  [{alter: 9, direction: -1 }] would be a b9      */

let randNum = (min: number, max: number) => Math.round(Math.random() * (max - min) + min);

export function randomChord(hold?: Partial<Chord>): Chord {
	let chord = <Chord>{
        root: randNum(0, 11),
        inversion: randNum(1, 11),
        quality: 'mM+o'[randNum(0, 3)],
        extension: [7, 9, 11, 13][randNum(0, 4)],
		alterations: []
    };

    for (let key in hold) {
		// @ts-ignore
		chord[key] = hold[key];
	}

	return <Chord>chord;
}


export let semitonesFromCToNote = (semitones:number, flatSharp:boolean): string => flatSharp? ['C', 'Db', 'D', 'Eb', 'Fb', 'F', 'G', 'Gb', 'A', 'Ab', 'B', 'Cb'][semitones] : ['B#', 'C#', 'D', 'D#', 'E', 'E#', 'F#', 'G', 'G#', 'A', 'A#', 'B'][semitones]
