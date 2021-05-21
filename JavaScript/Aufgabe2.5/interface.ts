namespace Aufgabe2_5 {

    export interface Junge {
        image: string;
        origin: string;
      }
    
    export interface AllParts {
        heads: Junge[];
        torsos: Junge[];
        legs: Junge[];
      }
}