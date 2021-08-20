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
    public CountOptions: Number,
    public Price: number,
    public IconUrl?: string,
    public UploadedImageUrl?: string,
    public DealListIcon?: string
  ) {}
}
