import clientPromise from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	try {
		const { name, email, message } = await req.json();

		if (!name || !email || !message) {
			return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
		}

		const client = await clientPromise;
		const db = client.db('portfolio');
		const collection = db.collection('contacts');

		await collection.insertOne({
			name,
			email,
			message,
			createdAt: new Date(),
			replied: false,
			replyMessage: '',
		});

		return NextResponse.json({ success: true }, { status: 200 });
	} catch (error) {
		console.error('Error saving contact:', error);
		return NextResponse.json(
			{ error: 'Internal Server Error' },
			{ status: 500 }
		);
	}
}
