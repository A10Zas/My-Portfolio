import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { sendMail } from '@/lib/mailer';

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { id, reply } = body;

		if (!id || !reply) {
			return NextResponse.json({ message: 'Invalid data' }, { status: 400 });
		}

		console.log('body');

		const client = await clientPromise;
		const db = client.db('portfolio'); // <-- Replace with your DB name
		const collection = db.collection('contacts');

		const contact = await collection.findOne({ _id: new ObjectId(id) });

		if (!contact) {
			return NextResponse.json(
				{ message: 'Contact not found' },
				{ status: 404 }
			);
		}

		// Update the contact with reply
		await collection.updateOne(
			{ _id: new ObjectId(id) },
			{ $set: { replied: true, replyMessage: reply } }
		);

		console.log('mail');

		// Send Email using Nodemailer
		await sendMail({
			to: contact.email,
			subject: 'Reply to your message',
			text: reply,
			html: `<p>${reply}</p>`,
		});

		return NextResponse.json(
			{ message: 'Reply sent successfully' },
			{ status: 200 }
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ message: 'Internal Server Error' },
			{ status: 500 }
		);
	}
}

export async function GET() {
	try {
		const client = await clientPromise;
		const db = client.db('portfolio'); // Replace with your DB name
		const collection = db.collection('contacts');

		const contacts = await collection
			.find({})
			.sort({ createdAt: -1 }) // newest first
			.toArray();

		return NextResponse.json(contacts, { status: 200 });
	} catch (error) {
		console.error('Error fetching contacts:', error);
		return NextResponse.json(
			{ message: 'Failed to fetch contacts' },
			{ status: 500 }
		);
	}
}
