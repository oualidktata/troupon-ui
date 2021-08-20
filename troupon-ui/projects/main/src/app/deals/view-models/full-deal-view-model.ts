import { DealOptionViewModel } from './dealoption-view-model';

export class SimpleDealViewModel {
  /**
   *
   */
  constructor(
    public Id: string,
    public Description: string,
    public Category: string,
    public LongDescription: string,
    public SeqNo: number,
    public IconUrl: string,
    public Price: number,
    public UploadedImageUrl: string,
    public DealListIcon: string,
    public Phones: DealOptionViewModel[]
  ) {}
}
