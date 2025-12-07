# Email Setup Instructions

The service inquiry form on the Services page uses Resend to send emails automatically to hello@stackplus.sg.

## Setup Steps:

### 1. Create a Resend Account
- Go to [https://resend.com](https://resend.com)
- Sign up for a free account (no credit card required)
- Free tier includes 3,000 emails per month and 100 emails per day

### 2. Get Your API Key
- After signing in, go to [https://resend.com/api-keys](https://resend.com/api-keys)
- Click "Create API Key"
- Give it a name (e.g., "StackPlus Production")
- Copy the API key (it starts with `re_`)

### 3. Add API Key to Your Project
- Open the `.env.local` file in the project root
- Add your API key:
  ```
  RESEND_API_KEY=re_your_actual_api_key_here
  ```

### 4. Restart the Development Server
- Stop the current dev server (Ctrl+C)
- Run `npm run dev` again
- The email functionality should now work!

### 5. (Optional) Verify Your Domain
For production use, you should verify your domain:
- In Resend dashboard, go to "Domains"
- Add your domain (e.g., stackplus.sg)
- Follow the DNS verification steps
- Once verified, update the `from` field in `/app/api/send-email/route.ts`:
  ```typescript
  from: 'StackPlus <noreply@stackplus.sg>'
  ```

## Testing

1. Go to http://localhost:3000/discover
2. Click any "Select", "Get a Quote", or "Get Started" button
3. Fill out the form
4. Click "Send"
5. Check hello@stackplus.sg inbox for the email

## How It Works

- User fills out the form
- Form submits to `/api/send-email` API route
- API route uses Resend to send a beautifully formatted email
- Email is delivered to hello@stackplus.sg with:
  - Customer's name and email
  - Selected service
  - Their description/requirements
  - Reply-to address set to customer's email

## Troubleshooting

**"Email service not configured" error:**
- Make sure you've added the RESEND_API_KEY to `.env.local`
- Restart your dev server after adding the environment variable

**Emails not arriving:**
- Check your Resend dashboard for delivery status
- Verify the API key is correct
- Check spam/junk folder in hello@stackplus.sg

**Need help?**
- Resend Documentation: https://resend.com/docs
- Resend Support: support@resend.com
