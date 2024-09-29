"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Account, Client, Storage } from "appwrite";
import { Check, Edit } from "lucide-react";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const client = new Client();
client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "")
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT || "");

const account = new Account(client);
const storage = new Storage(client);

interface User {
    $id: string;
    name: string;
    email: string;
    profileImageUrl?: string;
}

export default function Profil() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [file, setFile] = useState<File | null>(null);
    const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);
    const router = useRouter();

    const logout = async () => {
        await account.deleteSession("current");

        window.dispatchEvent(new Event("authChange"));
        router.push("/login");
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const uploadFile = async () => {
        if (!file) {
            console.error("No file selected");
            return;
        }

        try {
            const response = await storage.createFile(
                process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID || "",
                "unique()",
                file
            );
            const fileId = response.$id;
            const fileUrl = storage.getFilePreview(response.bucketId, fileId);
            setProfileImageUrl(fileUrl.toString());

            await account.updatePrefs({ profileImageUrl: fileUrl.toString() });

            setUser((prevUser) =>
                prevUser
                    ? { ...prevUser, profileImageUrl: fileUrl.toString() }
                    : null
            );
        } catch (err) {
            console.error("File upload error:", err);
        }
    };

    useEffect(() => {
        const getUser = async () => {
            try {
                const user = await account.get();
                console.log("user ->", user);

                setUser(user);

                setProfileImageUrl(user.prefs.profileImageUrl || null);
            } catch (err) {
                router.push("/login");
            } finally {
                setLoading(false);
            }
        };

        getUser();
    }, [router]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!user) {
        return <p>User not logged in.</p>;
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <Card>
                <CardHeader>
                    <CardTitle className="flex gap-5 items-center">
                        <p className="text-2xl font-bold">Profil</p>
                        <Avatar>
                            <AvatarImage src={profileImageUrl || ""} />
                            <AvatarFallback>
                                {user.name.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                    </CardTitle>
                    <CardDescription>
                        Vos informations personnelles
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-row space-y-1.5 items-center justify-between">
                            <div className="flex flex-col space-y-1.5">
                                <p className="font-bold">Photo de profil</p>
                                <div className="text-sm text-muted-foreground flex">
                                    <input
                                        type="file"
                                        onChange={handleFileChange}
                                        className="flex flex-col"
                                    />
                                </div>
                            </div>
                            <Button variant="ghost" onClick={uploadFile}>
                                <Check size={16} />
                            </Button>
                        </div>

                        <div className="flex flex-row space-y-1.5 items-center justify-between">
                            <div className="flex flex-col space-y-1.5">
                                <p className="font-bold">Nom</p>
                                <p className="text-sm text-muted-foreground">
                                    {user.name}
                                </p>
                            </div>
                            <Button variant="ghost">
                                <Edit size={16} />
                            </Button>
                        </div>

                        <div className="flex flex-row space-y-1.5 items-center justify-between">
                            <div className="flex flex-col space-y-1.5">
                                <p className="font-bold">Email</p>
                                <p className="text-sm text-muted-foreground">
                                    {user.email}
                                </p>
                            </div>
                            <Button variant="ghost">
                                <Edit size={16} />
                            </Button>
                        </div>
                        <Button variant={"outline"} onClick={logout}>
                            Logout
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
