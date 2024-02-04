export class PageRef {
  private frozenScrollPosition: number = 0;
  private previousTopMargin: string = "";

  constructor(private page: HTMLDivElement) {}

  public freezeAtCurrentPosition() {
    this.frozenScrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    this.previousTopMargin = this.page.style.marginTop;

    this.page.style.marginTop = `-${this.frozenScrollPosition}px`;
    this.page.style.position = "fixed";
  }

  public unfreeze() {
    this.page.style.position = "absolute";
    this.page.style.marginTop = this.previousTopMargin;
    document.documentElement.scrollTop = document.body.scrollTop =
      this.frozenScrollPosition;
  }
}
