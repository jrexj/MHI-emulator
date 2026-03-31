// src/rom-loader.js

class RomLoader {
    constructor() {
        this.roms = [];
    }

    loadRom(file) {
        if (!file) {
            throw new Error('No ROM file provided.');
        }

        // Assuming file is a valid ROM file
        this.roms.push(file);
        console.log(`Loaded ROM file: ${file.name}`);
    }

    getRoms() {
        return this.roms;
    }
}

module.exports = RomLoader;