import { DocumentsService } from './documents.service';
import { CreateDocumentsDto } from './dto/create-document.dto';
import { UpdateDocumentsDto } from './dto/update-document.dto';
export declare class DocumentsController {
    private readonly documentsService;
    constructor(documentsService: DocumentsService);
    create(createDocumentDto: CreateDocumentsDto): import("generated/prisma").Prisma.Prisma__documentsClient<{
        id: bigint;
        created_at: Date;
        user_id: bigint;
        deliver_license: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        id: bigint;
        created_at: Date;
        user_id: bigint;
        deliver_license: string;
    }[]>;
    findOne(id: string): import("generated/prisma").Prisma.PrismaPromise<{
        id: bigint;
        created_at: Date;
        user_id: bigint;
        deliver_license: string;
    }[]>;
    update(id: string, updateDocumentDto: UpdateDocumentsDto): import("generated/prisma").Prisma.Prisma__documentsClient<{
        id: bigint;
        created_at: Date;
        user_id: bigint;
        deliver_license: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: string): import("generated/prisma").Prisma.Prisma__documentsClient<{
        id: bigint;
        created_at: Date;
        user_id: bigint;
        deliver_license: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
