export default function Home() {
 return (
 <div className="p-10 text-white bg-black min-h-screen">
 <h1 className="text-3xl font-bold">
 ASEP Engineering Cloud
 </h1>
    <p className="mt-4 text-gray-400">
 Turn ideas into production GitHub PRs using autonomous AI workflows.
 </p>
 <a
 href="/dashboard"
 className="mt-6 inline-block bg-blue-600 px-4 py-2 rounded"
 >
 Open Dashboard
 </a>
 </div>
 );
}
"use client";
import { useEffect, useState } from "react";
export default function Dashboard() {
 const [projects, setProjects] = useState([]);
 useEffect(() => {
 fetch("/api/projects")
 .then((r) => r.json())
 .then(setProjects);
 }, []);
  return (
 <div className="p-8">
 <h2 className="text-xl font-bold">Projects</h2>
 {projects.map((p: any) => (
 <div key={p.id} className="p-4 border mt-2">
 <p>{p.name}</p>
 <p>Status: {p.status}</p>
   /div>
