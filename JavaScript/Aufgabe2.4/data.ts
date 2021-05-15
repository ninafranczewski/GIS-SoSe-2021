namespace Aufgabe2_4 {
export interface junge {
    image: string;
    origin: string;
  }

export interface AllParts {
    heads: junge[];
    torsos: junge[];
    legs: junge[];
  }


export interface Selection {
    head: junge;
    torso: junge;
    leg: junge;
  }


export let parts: AllParts = {
    heads: [
      { image: "./img/Kopf1.jpg", origin: "Kopf 1" },
      { image: "./img/Kopf2.jpg", origin: "Kopf 2" },
      { image: "./img/Kopf3.jpg", origin: "Kopf 3" }
    ],
    torsos: [
      { image: "./img/Körper1.jpg", origin: "Körper 1" },
      { image: "./img/Körper2.jpg", origin: "Körper 2" },
      { image: "./img/Körper3.jpg", origin: "Körper 3" }
    ],
    legs: [
      { image: "./img/Fuß1.jpg", origin: "Beine 1" },
      { image: "./img/Fuß2.jpg", origin: "Beine 2" },
      { image: "./img/Fuß3.jpg", origin: "Beine 3" }
    ]
  };
}