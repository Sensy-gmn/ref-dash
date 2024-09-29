"use client";

import { Account, Client, Databases } from "appwrite";
import React, { useState } from "react";

const client = new Client();
client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "")
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT || "");

const account = new Account(client);
const databases = new Databases(client);

export default function CreateCompany() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [siret, setSiret] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        try {
            const response = await databases.createDocument(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "",
                process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID_COMPANY || "",
                "unique()",
                {
                    name,
                    address,
                    email,
                    siret,
                    validated: false,
                }
            );
            setSuccess("Company created successfully!");
        } catch (err: any) {
            console.error("Error creating company:", err);
            setError("Failed to create company. Please try again.");
        }
    };

    return (
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <h1>Create Company</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Address:</label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>SIRET:</label>
                        <input
                            type="text"
                            value={siret}
                            onChange={(e) => setSiret(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    {success && <p style={{ color: "green" }}>{success}</p>}
                    <button type="submit">Create Company</button>
                </form>
            </main>
        </div>
    );
}
