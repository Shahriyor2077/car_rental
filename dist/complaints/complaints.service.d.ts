import { CreateComplaintsDto } from './dto/create-complaint.dto';
import { UpdateComplaintsDto } from './dto/update-complaint.dto';
export declare class ComplaintsService {
    create(createComplaintDto: CreateComplaintsDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateComplaintDto: UpdateComplaintsDto): string;
    remove(id: number): string;
}
