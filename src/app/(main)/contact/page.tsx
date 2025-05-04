'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
	const [form, setForm] = useState({ name: '', email: '', message: '' });
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setSuccess(false);

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(form),
			});

			if (res.ok) {
				setSuccess(true);
				setForm({ name: '', email: '', message: '' });
			}
		} catch (err) {
			console.error('Submit failed', err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className="w-3xl px-6 py-12">
			<h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
				Get in Touch
			</h2>

			<form
				onSubmit={handleSubmit}
				className="grid grid-cols-1 md:grid-cols-2 gap-6"
			>
				<Input
					name="name"
					value={form.name}
					onChange={handleChange}
					placeholder="Name"
				/>
				<Input
					name="email"
					value={form.email}
					onChange={handleChange}
					placeholder="Email"
				/>
				<Textarea
					name="message"
					value={form.message}
					onChange={handleChange}
					placeholder="Please write down your enquiry"
					className="md:col-span-2 min-h-[150px] resize-none"
				/>
				<Button
					type="submit"
					disabled={loading}
					className="col-span-1 md:col-span-2 dark:bg-white dark:hover:bg-gray-200 bg-black hover:bg-gray-700"
				>
					{loading ? 'Sending...' : 'Send Message'}
				</Button>
				{success && (
					<p className="text-green-500 md:col-span-2">
						Message sent successfully!
					</p>
				)}
			</form>
		</section>
	);
};

export default ContactPage;
