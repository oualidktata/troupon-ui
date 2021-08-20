export class PhoneViewModel {
  /**
   *
   */
  constructor(
    public Area: string,
    public Prefix: string,
    public Line: string,
    public Country?: string
  ) {}
}
