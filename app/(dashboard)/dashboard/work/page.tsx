import TableGenerator from "@/components/tableGenerator";

export default function WorkPage() {
    const works = [
        {
            id: 1,
            name: "Développeur Web",
            description: "Développement de sites web",
            date: "2024-01-01",
            status: "En cours",
            contrat: "CDI",
            salaire: "30000 €",
        },
        {
            id: 2,
            name: "Jane Smith",
            description: "Développement de sites web",
            date: "2024-01-01",
            status: "En cours",
            contrat: "CDI",
            salaire: "30000 €",
        },
        {
            id: 3,
            name: "John Doe",
            description: "Développement de sites web",
            date: "2024-01-01",
            status: "En cours",
            contrat: "CDI",
            salaire: "30000 €",
        },
    ];

    const columnsToShow = [
        { key: "name", name: "Name" },
        { key: "description", name: "Description" },
        { key: "date", name: "Date" },
        { key: "status", name: "Status" },
        { key: "contrat", name: "Contrat" },
        { key: "salaire", name: "Salaire" },
    ];

    const totalWorks = works.length;
    return (
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <TableGenerator
                    title="Liste des offres d'emploi"
                    description={`Total d'offres d'emploi : ${totalWorks}`}
                    data={works}
                    columnsToShow={columnsToShow}
                />
            </main>
        </div>
    );
}
