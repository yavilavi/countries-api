import { IsEnum, IsOptional } from 'class-validator';
import { CitiesFieldsEnum } from '../enums/cities-fields.enum';

export class GetAllCitiesQueryDto {
  @IsOptional()
  @IsEnum(CitiesFieldsEnum)
  select?: string;

  @IsOptional()
  asFile?: string;

  @IsOptional()
  take?: string;
}
