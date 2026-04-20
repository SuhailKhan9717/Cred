import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2, MessageSquare, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';

interface ContactProps{
  onNavigate: (page: string) => void;
}

const ContactPage: React.FC<ContactProps> = ({onNavigate}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [termsAccepts, setTermsAccepts] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    else if (!/^[a-zA-Z\s]{2,}$/.test(formData.name.trim())) newErrors.name = 'Please enter a valid name';
    
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    if (!termsAccepts) {
      alert('Please accepts terms and condition')
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Clear the success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);

    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91-9560730417',
      subtext: 'Toll Free (Mon-Sat, 9AM-6PM)'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'Rajatgupta@credgrow.in',
      subtext: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '2nd Floor, 110, BLOCK A, Udyog Marg, Hyundai Nimbus Hyundai, Sector 5, Noida, Gautambuddha Nagar, Uttar Pradesh',
      subtext: 'India - 201301'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon - Sat',
      subtext: '9:00 AM - 6:00 PM IST'
    }
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' }
  ];

  return (
    <section className="py-8 md:py-16 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <MessageSquare className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="text-sm font-medium text-primary">Contact Us</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card"
          >
            <h2 className="text-xl font-bold text-foreground mb-6">Send us a Message</h2>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-success/10 border border-success/30 rounded-lg p-4 flex items-center gap-3 mb-6"
                role="alert"
              >
                <CheckCircle className="w-5 h-5 text-success shrink-0" aria-hidden="true" />
                <span className="text-success font-medium">Thank you! We'll respond within 24 hours.</span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 flex items-center gap-3 mb-6"
                role="alert"
              >
                <AlertCircle className="w-5 h-5 text-destructive shrink-0" aria-hidden="true" />
                <span className="text-destructive font-medium">Failed to send message. Please try again later.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="name" className="mb-2 block">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className={errors.name ? 'border-destructive' : ''}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" aria-hidden="true" />
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email" className="mb-2 block">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className={errors.email ? 'border-destructive' : ''}
                    placeholder="your@email.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" aria-hidden="true" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="subject" className="mb-2 block">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                  className={errors.subject ? 'border-destructive' : ''}
                  placeholder="How can we help?"
                  aria-invalid={!!errors.subject}
                />
                {errors.subject && (
                  <p className="text-sm text-destructive mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" aria-hidden="true" />
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="message" className="mb-2 block">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className={`min-h-[150px] ${errors.message ? 'border-destructive' : ''}`}
                  placeholder="Tell us more about your inquiry..."
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="text-sm text-destructive mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" aria-hidden="true" />
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="flex items-start gap-3 mt-2">
                              <input
                                type="checkbox"
                                id="terms"
                                checked={termsAccepts}
                                onChange={(e) => setTermsAccepts(e.target.checked)}
                                className="mt-1 w-4 h-4 shrink-0 rounded border-input text-primary focus:ring-primary"
                              />
                             <Label htmlFor="terms" className="text-xs text-muted-foreground leading-relaxed cursor-pointer font-normal">
                               By clicking submit I agree to the  
                               <a onClick={()=> onNavigate('terms')} target="_blank" 
                               className="text-primary hover:underline font-medium">Terms & Conditions,</a> {" "}
                               <a onClick={()=>onNavigate('privacy')} target="_blank" 
                               className="text-primary hover:underline font-medium">Privacy Policy.</a> {" "}
                               I also authorize Credgrow to send notification via SMS/RCS/Call/Email/WhatsApp*. Enter your phone number below.
                              </Label>
                            </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cta hover:bg-cta/90 text-cta-foreground font-semibold py-6"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 w-4 h-4" aria-hidden="true" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border shadow-card"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-foreground font-medium text-base">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.subtext}</p>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-card">
              <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <social.icon className="w-5 h-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-card rounded-2xl border border-border shadow-card overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" aria-hidden="true" />
                  <p className="text-muted-foreground">Map Location</p>
                  <p className="text-sm text-muted-foreground">Delhi, New Delhi</p>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
              <h3 className="font-semibold text-foreground mb-2">Have Common Questions?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Check our FAQ section for quick answers to the most commonly asked questions.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View FAQ
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2, MessageSquare, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
// import { Button } from '../components/ui/button';
// import { Input } from '../components/ui/input';
// import { Label } from '../components/ui/label';
// import { Textarea } from '../components/ui/textarea';

// const ContactPage: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {};
    
//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     else if (!/^[a-zA-Z\s]{2,}$/.test(formData.name.trim())) newErrors.name = 'Please enter a valid name';
    
//     if (!formData.email.trim()) newErrors.email = 'Email is required';
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    
//     if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    
//     if (!formData.message.trim()) newErrors.message = 'Message is required';
//     else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setIsSubmitting(true);
//     await new Promise(resolve => setTimeout(resolve, 1500));
    
//     setIsSubmitting(false);
//     setSubmitStatus('success');
//     setFormData({ name: '', email: '', subject: '', message: '' });

//     setTimeout(() => setSubmitStatus('idle'), 5000);
//   };

//   const contactInfo = [
//     {
//       icon: Phone,
//       title: 'Phone',
//       value: '1800-XXX-XXXX',
//       subtext: 'Toll Free (Mon-Sat, 9AM-6PM)'
//     },
//     {
//       icon: Mail,
//       title: 'Email',
//       value: 'support@credgrow.com',
//       subtext: 'We reply within 24 hours'
//     },
//     {
//       icon: MapPin,
//       title: 'Address',
//       value: 'Delhi, New Delhi',
//       subtext: 'India - 110091'
//     },
//     {
//       icon: Clock,
//       title: 'Business Hours',
//       value: 'Mon - Sat',
//       subtext: '9:00 AM - 6:00 PM IST'
//     }
//   ];

//   const socialLinks = [
//     { icon: Facebook, label: 'Facebook', href: '#' },
//     { icon: Twitter, label: 'Twitter', href: '#' },
//     { icon: Linkedin, label: 'LinkedIn', href: '#' },
//     { icon: Instagram, label: 'Instagram', href: '#' }
//   ];

//   return (
//     <section className="py-8 md:py-16 bg-background min-h-screen">
//       <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-12"
//         >
//           <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
//             <MessageSquare className="w-4 h-4 text-primary" aria-hidden="true" />
//             <span className="text-sm font-medium text-primary">Contact Us</span>
//           </div>
//           <h1 className="text-3xl md:text-4xl font-bold text-foreground">
//             Get in Touch
//           </h1>
//           <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
//             Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-10">
//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card"
//           >
//             <h2 className="text-xl font-bold text-foreground mb-6">Send us a Message</h2>

//             {submitStatus === 'success' && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="bg-success/10 border border-success/30 rounded-lg p-4 flex items-center gap-3 mb-6"
//                 role="alert"
//               >
//                 <CheckCircle className="w-5 h-5 text-success shrink-0" aria-hidden="true" />
//                 <span className="text-success font-medium">Thank you! We'll respond within 24 hours.</span>
//               </motion.div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div className="grid sm:grid-cols-2 gap-5">
//                 <div>
//                   <Label htmlFor="name" className="mb-2 block">Full Name</Label>
//                   <Input
//                     id="name"
//                     type="text"
//                     value={formData.name}
//                     onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
//                     className={errors.name ? 'border-destructive' : ''}
//                     placeholder="Your name"
//                     aria-invalid={!!errors.name}
//                   />
//                   {errors.name && (
//                     <p className="text-sm text-destructive mt-1 flex items-center gap-1">
//                       <AlertCircle className="w-3 h-3" aria-hidden="true" />
//                       {errors.name}
//                     </p>
//                   )}
//                 </div>
//                 <div>
//                   <Label htmlFor="email" className="mb-2 block">Email Address</Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
//                     className={errors.email ? 'border-destructive' : ''}
//                     placeholder="your@email.com"
//                     aria-invalid={!!errors.email}
//                   />
//                   {errors.email && (
//                     <p className="text-sm text-destructive mt-1 flex items-center gap-1">
//                       <AlertCircle className="w-3 h-3" aria-hidden="true" />
//                       {errors.email}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <Label htmlFor="subject" className="mb-2 block">Subject</Label>
//                 <Input
//                   id="subject"
//                   type="text"
//                   value={formData.subject}
//                   onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
//                   className={errors.subject ? 'border-destructive' : ''}
//                   placeholder="How can we help?"
//                   aria-invalid={!!errors.subject}
//                 />
//                 {errors.subject && (
//                   <p className="text-sm text-destructive mt-1 flex items-center gap-1">
//                     <AlertCircle className="w-3 h-3" aria-hidden="true" />
//                     {errors.subject}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <Label htmlFor="message" className="mb-2 block">Message</Label>
//                 <Textarea
//                   id="message"
//                   value={formData.message}
//                   onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
//                   className={`min-h-[150px] ${errors.message ? 'border-destructive' : ''}`}
//                   placeholder="Tell us more about your inquiry..."
//                   aria-invalid={!!errors.message}
//                 />
//                 {errors.message && (
//                   <p className="text-sm text-destructive mt-1 flex items-center gap-1">
//                     <AlertCircle className="w-3 h-3" aria-hidden="true" />
//                     {errors.message}
//                   </p>
//                 )}
//               </div>

//               <Button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-cta hover:bg-cta/90 text-cta-foreground font-semibold py-6"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <Loader2 className="mr-2 w-4 h-4 animate-spin" aria-hidden="true" />
//                     Sending...
//                   </>
//                 ) : (
//                   <>
//                     <Send className="mr-2 w-4 h-4" aria-hidden="true" />
//                     Send Message
//                   </>
//                 )}
//               </Button>
//             </form>
//           </motion.div>

//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="space-y-6"
//           >
//             <div className="grid sm:grid-cols-2 gap-4">
//               {contactInfo.map((item, i) => (
//                 <motion.div
//                   key={item.title}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: i * 0.1 }}
//                   className="bg-card rounded-2xl p-6 border border-border shadow-card"
//                 >
//                   <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
//                     <item.icon className="w-6 h-6 text-primary" aria-hidden="true" />
//                   </div>
//                   <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
//                   <p className="text-foreground font-medium">{item.value}</p>
//                   <p className="text-sm text-muted-foreground">{item.subtext}</p>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Social Links */}
//             <div className="bg-card rounded-2xl p-6 border border-border shadow-card">
//               <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
//               <div className="flex gap-3">
//                 {socialLinks.map((social) => (
//                   <a
//                     key={social.label}
//                     href={social.href}
//                     className="w-10 h-10 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
//                     aria-label={`Follow us on ${social.label}`}
//                   >
//                     <social.icon className="w-5 h-5" aria-hidden="true" />
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Map Placeholder */}
//             <div className="bg-card rounded-2xl border border-border shadow-card overflow-hidden">
//               <div className="aspect-video bg-muted flex items-center justify-center">
//                 <div className="text-center">
//                   <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" aria-hidden="true" />
//                   <p className="text-muted-foreground">Map Location</p>
//                   <p className="text-sm text-muted-foreground">Delhi, New Delhi</p>
//                 </div>
//               </div>
//             </div>

//             {/* FAQ Link */}
//             <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
//               <h3 className="font-semibold text-foreground mb-2">Have Common Questions?</h3>
//               <p className="text-sm text-muted-foreground mb-4">
//                 Check our FAQ section for quick answers to the most commonly asked questions.
//               </p>
//               <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
//                 View FAQ
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactPage;
