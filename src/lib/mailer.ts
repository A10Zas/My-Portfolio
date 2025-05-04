import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

type MailOptions = {
	to: string;
	subject: string;
	text: string;
	html?: string;
};

export const sendMail = async ({ to, subject, text, html }: MailOptions) => {
	await transporter.sendMail({
		from: `<${process.env.EMAIL_USER}>`,
		to,
		subject,
		text,
		html,
	});
};
