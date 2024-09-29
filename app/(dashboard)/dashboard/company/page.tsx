import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function CompanyPage() {
    const workByCompany = [
        {
            title: "poste 1",
            contract: "CDI",
            createdAt: "2023-06-23",
            location: "Paris",
        },
    ];
    const companies = [
        {
            id: 1,
            name: "entreprise 1",
            email: "email@email.com",
            status: "fulfilled",
            createdAt: "2023-06-23",
            siret: "1234567890",
        },
        {
            id: 2,
            name: "entreprise 2",
            email: "email@email.com",
            status: "fulfilled",
            createdAt: "2023-06-23",
            siret: "1234567890",
        },
        {
            id: 3,
            name: "entreprise 3",
            email: "email@email.com",
            status: "fulfilled",
            createdAt: "2023-06-23",
            siret: "1234567890",
        },
        {
            id: 4,
            name: "entreprise 4",
            email: "email@email.com",
            status: "fulfilled",
            createdAt: "2023-06-23",
            siret: "1234567890",
        },
        {
            id: 5,
            name: "entreprise 5",
            email: "email@email.com",
            status: "fulfilled",
            createdAt: "2023-06-23",
            siret: "1234567890",
        },
        {
            id: 6,
            name: "entreprise 6",
            email: "email@email.com",
            status: "fulfilled",
            createdAt: "2023-06-23",
            siret: "1234567890",
        },
        {
            id: 7,
            name: "entreprise 7",
            email: "email@email.com",
            status: "fulfilled",
            createdAt: "2023-06-23",
            siret: "1234567890",
        },
    ];

    return (
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card>
                    <CardHeader className="px-7">
                        <CardTitle>liste des entreprises</CardTitle>
                        <CardDescription>
                            total des entreprises : {companies.length}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>
                                        Nom de l&apos;entreprise
                                    </TableHead>
                                    <TableHead className="hidden sm:table-cell">
                                        Adresse
                                    </TableHead>
                                    <TableHead className="hidden sm:table-cell">
                                        Statut
                                    </TableHead>
                                    <TableHead className="hidden md:table-cell">
                                        Date de création
                                    </TableHead>
                                    <TableHead className="text-right">
                                        N° Siret
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {companies.map((company) => (
                                    <TableRow key={company.id}>
                                        <TableCell>
                                            <div className="font-medium">
                                                {company.name}
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                {company.email}
                                            </div>
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell">
                                            {company.email}
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell">
                                            <Badge
                                                className="text-xs"
                                                variant="secondary"
                                            >
                                                {workByCompany.length} offres
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            {company.createdAt}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            {company.siret}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
