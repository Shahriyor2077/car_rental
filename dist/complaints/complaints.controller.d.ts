import { ComplaintsService } from './complaints.service';
import { CreateComplaintsDto } from './dto/create-complaint.dto';
import { UpdateComplaintsDto } from './dto/update-complaint.dto';
export declare class ComplaintsController {
    private readonly complaintsService;
    constructor(complaintsService: ComplaintsService);
    create(createComplaintDto: CreateComplaintsDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateComplaintDto: UpdateComplaintsDto): string;
    remove(id: string): string;
}
