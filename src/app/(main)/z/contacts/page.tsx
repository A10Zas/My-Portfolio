'use client';

import { useEffect, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import axios from 'axios';

type Contact = {
	_id: string;
	name: string;
	email: string;
	message: string;
	replied: boolean;
	replyMessage: string;
	createdAt: string;
};

const ContactsPage = () => {
	const [contacts, setContacts] = useState<Contact[]>([]);
	const [replies, setReplies] = useState<{ [key: string]: string }>({});

	useEffect(() => {
		const fetchContacts = async () => {
			const res = await fetch('/api/contacts');

			const data = await res.json();
			setContacts(data);
		};
		fetchContacts();
	}, []);

	const handleReply = async (id: string) => {
		const reply = replies[id];
		await axios.post('/api/contacts', { id, reply });
		setContacts((prev) =>
			prev.map((c) =>
				c._id === id ? { ...c, replied: true, replyMessage: reply } : c
			)
		);
	};

	return (
		<div className="w-full max-w-3xl mx-auto p-4 sm:p-8">
			<h2 className="text-2xl font-semibold mb-6 text-center sm:text-left agbalumo-regular ">
				All Contact Messages
			</h2>
			<div className="space-y-6">
				{contacts.map((contact) => (
					<div
						key={contact._id}
						className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 shadow-sm"
					>
						<p className="font-bold text-lg sm:text-xl">
							{contact.name} ({contact.email})
						</p>
						<p className="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">
							Message: {contact.message}
						</p>
						{contact.replied ? (
							<div className="mt-3">
								<p className="text-sm text-green-600">Replied</p>
								<p className="text-sm italic">{contact.replyMessage}</p>
							</div>
						) : (
							<div className="mt-3 space-y-4">
								<Textarea
									placeholder="Type your reply..."
									value={replies[contact._id] || ''}
									onChange={(e) =>
										setReplies({ ...replies, [contact._id]: e.target.value })
									}
									className="resize-none h-[20rem] sm:h-[15rem] text-sm sm:text-base"
								/>
								<Button
									onClick={() => handleReply(contact._id)}
									className="w-full dark:bg-white dark:hover:bg-gray-200 bg-black hover:bg-gray-700"
								>
									Send Reply
								</Button>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default ContactsPage;
