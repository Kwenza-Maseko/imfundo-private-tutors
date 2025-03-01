"use client";

import { useState } from "react";
import Image from "next/image";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,

} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import Popover from "./Popover";

const JoinUs = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");

        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ firstname, lastname, email }),
            });

            const data = await res.json();
            if (res.ok) {
                setMessage("Successfully subscribed!");
                setEmail(""); // Clear input
            } else {
                setMessage(data.message || "Something went wrong.");
            }
        } catch (error) {
            setMessage("Error subscribing.");
        }
    };


    return (
        <div className=''>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="outline"
                        className='text-[#150233] font-bold px-4 py-2 rounded bg-white w-fit'>Join Our Newsletter</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <div className="flex flex-col gap-2 items-center mb-6">
                            <Image
                                src={"/assets/imfundoLogo.png"}
                                alt=""
                                width={50}
                                height={50}
                                className=""
                            />
                            <div>
                                <AlertDialogTitle className="pacifico-regular text-gray-800">Imfundo Private Tutors</AlertDialogTitle>
                                <p className="text-xs capitalize text-gray-700 text-center">combination of intelligence
                                </p>
                            </div>

                        </div>
                        <AlertDialogDescription>

                            Join our newsletter to keep up-to-date with Imfundo Private Tutors
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                        <div className="flex md:flex-row flex-col gap-2">
                            <input
                                type="text"
                                placeholder="Firstname"
                                className="p-2 border rounded w-full text-sm"
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Lastname"
                                className="p-2 border rounded w-full text-sm"
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                required
                            />

                        </div>
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-2 border rounded text-sm"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="text-sm font-bold bg-indigo-900 text-white p-2 rounded hover:bg-indigo-800 transition mt-6"
                        >
                            Join Our Newsletter
                        </button>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                    </form>
                    {message &&
                        <>
                            <Popover
                                messages={message}
                            />
                        </>
                    }
                </AlertDialogContent>
                <AlertDialogFooter>

                </AlertDialogFooter>
            </AlertDialog>
        </div>
    )
}

export default JoinUs