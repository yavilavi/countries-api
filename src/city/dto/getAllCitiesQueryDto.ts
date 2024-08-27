import { IsOptional } from 'class-validator';

export class GetAllCitiesQueryDto {
  @IsOptional()
  select?: string;

  @IsOptional()
  asFile?: string;

  @IsOptional()
  take?: string;
}
