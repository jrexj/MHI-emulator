// orchestrator for MHI-emulator

class EmulatorOrchestrator {
    constructor() {
        this.instances = [];
    }

    createInstance(rom) {
        const instance = new EmulatorInstance(rom);
        this.instances.push(instance);
        return instance;
    }

    loadROM(instance, rom) {
        instance.load(rom);
    }

    startAll() {
        this.instances.forEach(instance => instance.start());
    }

    stopAll() {
        this.instances.forEach(instance => instance.stop());
    }
}

class EmulatorInstance {
    constructor(rom) {
        this.rom = rom;
        this.running = false;
    }

    load(rom) {
        this.rom = rom;
    }

    start() {
        this.running = true;
        console.log(`Emulator instance started with ROM: ${this.rom}`);
    }

    stop() {
        this.running = false;
        console.log(`Emulator instance stopped.`);
    }
}

module.exports = EmulatorOrchestrator;