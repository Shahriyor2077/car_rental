import { CreateDocumentsDto } from './dto/create-document.dto';
import { UpdateDocumentsDto } from './dto/update-document.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class DocumentsService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
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
    findOne(id: number): import("generated/prisma").Prisma.PrismaPromise<{
        id: bigint;
        created_at: Date;
        user_id: bigint;
        deliver_license: string;
    }[]>;
    update(id: number, updateDocumentDto: UpdateDocumentsDto): import("generated/prisma").Prisma.Prisma__documentsClient<{
        id: bigint;
        created_at: Date;
        user_id: bigint;
        deliver_license: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: number): import("generated/prisma").Prisma.Prisma__documentsClient<{
        id: bigint;
        created_at: Date;
        user_id: bigint;
        deliver_license: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
