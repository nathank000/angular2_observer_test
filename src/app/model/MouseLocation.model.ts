export class MouseLocation {
    mouseX: number;
    mouseY: number;
    container: HTMLElement;

    constructor(coords: Array<number>, incomingContainer: HTMLElement = null) {
        // console.log('new coords');
        this.mouseX = coords[0];
        this.mouseY = coords[1];

        if (incomingContainer != null) {
            this.container = incomingContainer;
        }
        else {
            this.container = document.body;
        }

    }
}
