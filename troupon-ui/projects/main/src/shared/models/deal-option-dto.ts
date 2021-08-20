export interface DealOptionDto {
  id: string;
  description: string;
  longDescription: string;
  seqNo: number;
  iconUrl: string;
  price: number;
  uploadedImageUrl: string;
  DealListIcon: string;
  category: string;
  lessonsCount: number;
}

export function sortDealsBySeqNo(c1: DealOptionDto, c2: DealOptionDto) {
  return c1.seqNo - c2.seqNo;
}
