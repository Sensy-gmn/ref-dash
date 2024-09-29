import { Client, Databases, Teams } from "appwrite"; // Ensure correct imports
import { NextApiRequest } from "next";

// ----------------------------------------------------------------------
const client = new Client();

client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "")
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT || "");

const databases = new Databases(client);

// ----------------------------------------------------------------------
const apiClient = new Client(); // Use Client directly
apiClient
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "")
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT || "");

// Client that verifies whether user has access to the Users collection
const jwtClient = new Client(); // Use Client directly

jwtClient
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "")
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT || "");

// ----------------------------------------------------------------------
function getJWTClient(req: NextApiRequest) {
    const { headers } = req;
    const { authorization } = headers;

    // Get JWT from request
    const jwt = authorization?.replace("Bearer ", "") || "";
    jwtClient.setJWT(jwt);
    return jwtClient;
}

const ADMIN_TEAM_ID = process.env.NEXT_PUBLIC_ADMIN_TEAM_ID || "";

async function checkIsAdmin(req: NextApiRequest) {
    const jwtClient = getJWTClient(req);

    // Check if user belongs to admin team
    const teams = new Teams(jwtClient);

    try {
        await teams.get(ADMIN_TEAM_ID);
        return true;
    } catch (exception) {
        // User is not an admin
        return false;
    }
}

export { apiClient, checkIsAdmin, client, databases, getJWTClient };
