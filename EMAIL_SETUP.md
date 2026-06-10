## Email Functionality Setup

This portfolio includes professional email functionality using **EmailJS**. All emails sent through the contact form are delivered to `ihsanokz912@gmail.com`.

### Configuration Files

The email system uses the following professional architecture:

#### 1. **`src/config/emailConfig.js`**
- Stores all EmailJS credentials (Service ID, Template ID, Public Key)
- Defines validation rules for form fields
- Manages email template parameters

#### 2. **`src/services/emailService.js`**
- Initializes EmailJS when app loads
- Validates form data before submission
- Sends emails with proper error handling
- Formats error messages for user feedback

#### 3. **`src/components/EmailInput.jsx`**
- Reusable `TextInput` and `TextArea` components
- Shows validation errors in real-time
- Handles focus/blur styling

#### 4. **`src/components/Contact.jsx`**
- Uses modern React hooks (useState) for state management
- Implements real-time validation feedback
- Shows loading states during submission
- Displays success/error notifications
- Auto-clears success message after 5 seconds

### Features Implemented

✅ **Form Validation**
- Name: 2-100 characters, letters only
- Email: Valid email format
- Subject: 3-150 characters
- Message: 10-5000 characters

✅ **User Experience**
- Real-time error messages as user types
- Loading spinner during submission ("⟳ Sending...")
- Success confirmation with auto-dismiss
- Error notifications with helpful messages
- Disabled submit button while loading

✅ **Professional Error Handling**
- Validation errors are caught before sending
- Network errors are handled gracefully
- User receives clear feedback on all scenarios

### Testing the Email Functionality

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Navigate to the Contact section** and fill out the form:
   - **Name**: John Doe
   - **Email**: john@example.com
   - **Subject**: Test Message
   - **Message**: This is a test message from my portfolio.

3. **Submit the form** - You should see:
   - Loading spinner while sending
   - Success message: "Message sent successfully! I will get back to you soon."
   - Form clears automatically
   - Success message dismisses after 5 seconds

4. **Test validation** - Leave fields empty or enter invalid data:
   - Error messages appear next to each invalid field
   - Submit button remains disabled until form is valid

### EmailJS Configuration

**Current Configuration:**
- **Service ID**: service_83s2qwd
- **Template ID**: template_46z9elf
- **Public Key**: ha6knODZ9Y9gImOpj
- **Recipient Email**: ihsanokz912@gmail.com

### Security Notes

⚠️ **Important**: The public key is safely embedded in the client-side code. EmailJS public keys are designed to be public and cannot access sensitive data on the server. Never embed service or API secret keys in frontend code.

### How to Customize

To change the recipient email or EmailJS configuration:

1. Open `src/config/emailConfig.js`
2. Update the `EMAILJS_CONFIG` object:
   ```javascript
   export const EMAILJS_CONFIG = {
     SERVICE_ID: 'your_service_id',
     TEMPLATE_ID: 'your_template_id',
     PUBLIC_KEY: 'your_public_key',
   }
   ```
3. Update the recipient email in the same file

### Email Template in EmailJS

The template should include these variables:
- `user_name`: Sender's name
- `user_email`: Sender's email
- `subject`: Email subject
- `message`: Email message body
- `timestamp`: When the email was sent

---

**Built with professional standards** ✓
- Form validation on client-side
- Async/await error handling
- Reusable components
- Real-time user feedback
- Security best practices
