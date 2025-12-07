import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, service, description } = body

    // Validate required fields
    if (!name || !email || !service || !description) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Send email using Resend
    try {
      const data = await resend.emails.send({
        from: 'StackPlus <onboarding@resend.dev>', // Use your verified domain in production
        to: ['mehtazhaque02@gmail.com'],
        replyTo: email,
        subject: `Service Inquiry: ${service}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(to right, #f89b29, #ff0f7b); padding: 20px; color: white; border-radius: 8px 8px 0 0; }
                .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
                .field { margin-bottom: 20px; }
                .label { font-weight: bold; color: #555; }
                .value { margin-top: 5px; }
                .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #777; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0;">New Service Inquiry</h1>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">Name:</div>
                    <div class="value">${name}</div>
                  </div>
                  <div class="field">
                    <div class="label">Email:</div>
                    <div class="value">${email}</div>
                  </div>
                  <div class="field">
                    <div class="label">Service Requested:</div>
                    <div class="value"><strong>${service}</strong></div>
                  </div>
                  <div class="field">
                    <div class="label">Description:</div>
                    <div class="value">${description.replace(/\n/g, '<br>')}</div>
                  </div>
                  <div class="footer">
                    This inquiry was submitted from the StackPlus Services page.
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
      })

      console.log('Email sent successfully:', data)

      return NextResponse.json({
        success: true,
        message: 'Inquiry sent successfully! We will get back to you soon.',
      })
    } catch (emailError: any) {
      console.error('Error sending email:', emailError)

      // If Resend fails (e.g., API key not configured), return a helpful message
      return NextResponse.json({
        error: 'Email service not configured. Please set up RESEND_API_KEY in your environment variables.',
        details: emailError.message
      }, { status: 500 })
    }

  } catch (error) {
    console.error('Error processing inquiry:', error)
    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    )
  }
}
