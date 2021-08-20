export interface DealDto {
  Id: string;
  Description: string;
  LongDescription: string;
  SeqNo: number;
  IconUrl: string;
  Price: number;
  UploadedImageUrl: string;
  DealListIcon: string;
  Category: string;
  LessonsCount: number;
}

export function sortDealsBySeqNo(c1: DealDto, c2: DealDto) {
  return c1.SeqNo - c2.SeqNo;
}
