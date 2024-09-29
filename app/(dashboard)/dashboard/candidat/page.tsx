import { apiClient, checkIsAdmin } from "@/appwrite/config";
import TableGenerator from "@/components/tableGenerator";
import { NextApiRequest, NextApiResponse } from "next";
import sdk from "node-appwrite";

export default async function getUsers(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const isAdmin = await checkIsAdmin(req);

    if (!isAdmin) {
        res.status(401).json({ message: "Unauthorized" });
        return;
    }

    // User belongs to admin team. They should have access to all users
    const users = new sdk.Users(apiClient);

    let mappedUsersList: any[] = [];
    const columnsToShow = [
        { key: "id", name: "ID" },
        { key: "name", name: "Nom" },
        { key: "email", name: "Email" },
    ];
    try {
        const userList = await users.list();

        mappedUsersList = userList.users.map((user) => ({
            id: user.$id,
            name: user.name,
            email: user.email,
        }));

        res.status(200).json({ users: mappedUsersList });
    } catch (exception) {
        console.error("Error on getUsers", exception);
    }
    return (
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <TableGenerator
                    title="Liste des Candidats"
                    description={`Total des candidats : ${mappedUsersList.length}`}
                    data={mappedUsersList}
                    columnsToShow={columnsToShow}
                />
            </main>
        </div>
    );
}
