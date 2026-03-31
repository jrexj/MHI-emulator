// src/input-manager.js

class InputManager {
    constructor() {
        this.keys = {};
        this.controllers = {};
        this.initKeyboard();
        this.initControllers();
    }

    initKeyboard() {
        window.addEventListener('keydown', (event) => {
            this.keys[event.code] = true;
        });
        window.addEventListener('keyup', (event) => {
            this.keys[event.code] = false;
        });
    }

    initControllers() {
        // Add controller handling logic here (using Gamepad API)
        window.addEventListener('gamepadconnected', (event) => {
            this.controllers[event.gamepad.index] = event.gamepad;
            console.log('Controller connected:', event.gamepad);
        });
        window.addEventListener('gamepaddisconnected', (event) => {
            delete this.controllers[event.gamepad.index];
            console.log('Controller disconnected:', event.gamepad);
        });
    }

    update() {
        // Update input states
        for (let i = 0; i < navigator.getGamepads().length; i++) {
            const gamepad = navigator.getGamepads()[i];
            if (gamepad) {
                this.controllers[i] = gamepad;
            }
        }
    }

    isKeyPressed(key) {
        return this.keys[key] || false;
    }

    isControllerButtonPressed(controllerIndex, buttonIndex) {
        const controller = this.controllers[controllerIndex];
        return controller && controller.buttons[buttonIndex].pressed;
    }
}

export default InputManager;