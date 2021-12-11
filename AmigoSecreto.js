class AmigoSecreto {
    constructor(names) {
        this.names = names;
    }

    generatePairs() {
        let shuffledNames = this.shuffle([...this.names]);
        let friendNames = this.rotate([...shuffledNames], 1);
        let pairs = shuffledNames.map((el, i) => ({ name: el, friend: friendNames[i] }));
        return pairs;
    }

    shuffle(elements, shuffled = []) {
        if (elements.length < 1)
            return shuffled;

        let idx = Math.floor(Math.random() * elements.length);
        shuffled.push(elements[idx]);
        elements.splice(idx, 1);
        return this.shuffle(elements, shuffled);
    }

    rotate(elements, n) {
        if (n < 1 || n >= elements.length)
            return elements;

        let tail = elements.splice(n);
        return tail.concat(elements);
    }
}
