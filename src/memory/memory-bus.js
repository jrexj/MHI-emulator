// MemoryBus.js - Memory management system

class MemoryBus {
    constructor() {
        this.memory = new Map(); // To hold memory addresses and their values
    }

    // Method to write to memory
    write(address, value) {
        this.memory.set(address, value);
    }

    // Method to read from memory
    read(address) {
        return this.memory.get(address);
    }

    // Method to clear memory
    clear() {
        this.memory.clear();
    }
}

// Export the MemoryBus class
module.exports = MemoryBus;