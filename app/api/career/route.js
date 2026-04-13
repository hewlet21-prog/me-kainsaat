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

    const requiredFields = [
      'fullName',
      'address',
      'experience',
      'position',
      'machines',
      'technicalDetails',
      'documents',
      'criminalRecord',
      'maritalStatus',
      'licenseClasses',
      'age',
      'previousEmployers',
      'about',
    ]

    const missingField = requiredFields.find((field) => !required(body[field]))

    if (missingField) {
      return Response.json(
        { error: 'Lutfen tum zorunlu alanlari doldurun.' },
        { status: 400 }
      )
    }

    const transporter = createTransporter()

    const lines = [
      `Ad Soyad: ${body.fullName}`,
      `Adres: ${body.address}`,
      `Deneyim: ${body.experience}`,
      `Basvuru Alani: ${body.position}`,
      `Kullanilan Makine / Cihazlar: ${body.machines}`,
      `Teknik Detaylar: ${body.technicalDetails}`,
      `Belgeler: ${body.documents}`,
      `Sicil Durumu: ${body.criminalRecord}`,
      `Medeni Durum: ${body.maritalStatus}`,
      `Surucu Belgeleri: ${body.licenseClasses}`,
      `Yas: ${body.age}`,
      `Onceki Is Yerleri: ${body.previousEmployers}`,
      `Kendinizden Bahsedin: ${body.about}`,
      `Gonderim Tarihi: ${new Date().toLocaleString('tr-TR')}`,
    ]

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER || 'kariyer@mekainsaat.local',
      to: siteConfig.careerEmail,
      subject: `Yeni Kariyer Basvurusu - ${body.fullName}`,
      text: lines.join('\n'),
      html: `
        <h2>Yeni Kariyer Basvurusu</h2>
        <p><strong>Ad Soyad:</strong> ${body.fullName}</p>
        <p><strong>Adres:</strong> ${body.address}</p>
        <p><strong>Deneyim:</strong> ${body.experience}</p>
        <p><strong>Basvuru Alani:</strong> ${body.position}</p>
        <p><strong>Kullanilan Makine / Cihazlar:</strong> ${body.machines}</p>
        <p><strong>Teknik Detaylar:</strong> ${body.technicalDetails}</p>
        <p><strong>Belgeler:</strong> ${body.documents}</p>
        <p><strong>Sicil Durumu:</strong> ${body.criminalRecord}</p>
        <p><strong>Medeni Durum:</strong> ${body.maritalStatus}</p>
        <p><strong>Surucu Belgeleri:</strong> ${body.licenseClasses}</p>
        <p><strong>Yas:</strong> ${body.age}</p>
        <p><strong>Onceki Is Yerleri:</strong> ${body.previousEmployers}</p>
        <p><strong>Kendinizden Bahsedin:</strong> ${body.about}</p>
      `,
    })

    return Response.json(
      { message: 'Basvurunuz basariyla alindi.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Kariyer basvuru hatasi:', error)
    return Response.json(
      { error: 'Basvuru gonderilirken bir hata olustu.' },
      { status: 500 }
    )
  }
}
