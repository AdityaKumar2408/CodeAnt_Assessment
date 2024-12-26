import React from "react";
import repositories from "../assets/data/repositories.json";
import { Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';

const languageColors = {
    React: "text-blue-500",
    Javascript: "text-yellow-500",
    Python: "text-green-500",
    Swift: "text-orange-500",
    Java: "text-red-500",
    "HTML/CSS": "text-purple-500",
    
};
const Details = () => {
    return (
        <div>
            {repositories.map((repo, index) => (
                <div key={repo.name} className="hover:bg-gray-100 hover:cursor-pointer">
                    <Card className="mb-4">
                        <CardHeader className="px-4 py-2">
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">{repo.name}</span>
                                        <span
                                            className={`rounded-full text-xs px-2 py-1 ${repo.visibility === "Public"
                                                ? "bg-blue-100 text-blue-800"
                                                : "bg-gray-100 text-gray-600"
                                            }`}
                                        >
                                            {repo.visibility}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-8 text-sm text-gray-500">
                                        <span className="flex items-center gap-1.5">
                                            <span>{repo.language}</span>
                                            <div className="bg-blue-500 rounded-full w-2 h-2"></div>
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Database className="text-black h-4 w-4" />
                                            {repo.size} KB
                                        </span>
                                        <span>Updated {repo.updatedAt}</span>
                                    </div>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                        </CardContent>
                    </Card>
                    {index !== repositories.length - 1 && (
                        <hr className="border-t-2 border-gray-200 my-4" />
                    )}
                </div>
            ))}
        </div>
    );
};

export default Details;
