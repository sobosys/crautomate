export class Greeter {
  public constructor(public greeting: string) {}
  public start(container: HTMLElement | null): void {
    if (!container) {
      throw new Error('no container');
    }
    const h1 = document.createElement('h1');
    h1.textContent = `Welcome to ${this.greeting}!`;
    container.classList.add('greeter');
    container.appendChild(h1);
  }
}
