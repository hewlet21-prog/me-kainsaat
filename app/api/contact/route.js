import nodemailer from 'nodemailer'
import { siteConfig } from '@/lib/site'

function createTransporter() {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  }

  return nodemailer.createTransport({
    direct: true,
    name: 'mekainsaat.local',
  })
}

function required(value) {
  return typeof value === 'string' && value.trim().length > 0
}

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, phone, message } = body

    if (!required(name) || !required(phone) || !required(message)) {
      return Response.json({ error: 'Lutfen tum alanlari doldurun.' }, { status: 400 })
    }

    const transporter = createTransporter()
    const recipient = process.env.CONTACT_TO || siteConfig.careerEmail

    const lines = [
      `Ad Soyad: ${name}`,
      `Telefon: ${phone}`,
      `Mesaj: ${message}`,
      `Gonderim Tarihi: ${new Date().toLocaleString('tr-TR')}`,
    ]

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER || 'iletisim@mekainsaat.local',
      to: recipient,
      subject: `Yeni Iletisim Formu - ${name}`,
      text: lines.join('\n'),
      html: `
        <h2>Yeni Iletisim Formu</h2>
        <p><strong>Ad Soyad:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Mesaj:</strong> ${message}</p>
        <p><strong>Gonderim Tarihi:</strong> ${new Date().toLocaleString('tr-TR')}</p>
      `,
    })

    return Response.json({ message: 'Mesajiniz basariyla gonderildi.' }, { status: 200 })
  } catch (error) {
    console.error('Iletisim formu hatasi:', error)
    return Response.json(
      { error: 'Mesaj gonderilirken bir hata olustu. Lutfen daha sonra tekrar deneyin.' },
      { status: 500 }
    )
  }
}
