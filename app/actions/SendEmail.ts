'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const contactInfo = formData.get('contactInfo') as string; // Email or Mobile
  const company = formData.get('company') as string;
  const message = formData.get('message') as string;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', 
      to: 'walferlab@gmail.com', 
      subject: `New Inquiry from ${name} at ${company || 'Unknown Company'}`,
      replyTo: contactInfo.includes('@') ? contactInfo : undefined, 
      text: `Name: ${name}\nContact: ${contactInfo}\nCompany: ${company}\n\nMessage:\n${message}`,
    });

    if (error) {
      return { success: false, error: error.message };
    }
    
    return { success: true, data };
  } catch (error) {
    return { success: false, error: 'Failed to send message' };
  }
}