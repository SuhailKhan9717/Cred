import React from 'react'
import { Shield, Lock, FileText, Link as LinkIcon, AlertCircle, Mail, ChevronRight, ShieldCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div>
        {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="container max-w-4xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm">
            <ShieldCheck size={16} />
            <span>Legal & Privacy</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium">
            We are committed to protecting your personal information and your right to privacy. Learn how we handle your data.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-grow container max-w-4xl mx-auto px-4 -mt-20 relative z-20 pb-24">
        
        {/* Animated Background Blobs behind the card */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-[hsl(var(--primary))]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-[hsl(var(--accent))]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        
        {/* Document Card */}
        <div className="bg-[hsl(var(--card))] rounded-2xl shadow-card border border-[hsl(var(--border))] p-8 md:p-12 relative overflow-hidden">
          
          <div className="prose prose-slate max-w-none">
            
            {/* Intro Section */}
            <div className="mb-10 pb-10 border-b border-[hsl(var(--border))]">
              <h2 className="text-2xl font-bold mb-4 text-[hsl(var(--foreground))]">Welcome to Credgrow.</h2>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                Credgrow operates the <a href="https://credgrow.in/?page=privacy" className="text-[hsl(var(--primary))] font-medium hover:underline">https://credgrow.in/?page=privacy</a> website, which provides the SERVICE.
              </p>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the Credgrow.
              </p>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
              </p>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at <a href="https://credgrow.in/?page=privacy" className="text-[hsl(var(--primary))] font-medium hover:underline">https://credgrow.in/?page=privacy</a>, unless otherwise defined in this Privacy Policy.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[hsl(var(--primary))]/10 rounded-lg text-[hsl(var(--primary))]">
                    <FileText size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(var(--foreground))]">Information Collection and Use</h3>
                </div>
                <p className="text-[hsl(var(--muted-foreground))] leading-relaxed pl-11">
                  For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[hsl(var(--primary))]/10 rounded-lg text-[hsl(var(--primary))]">
                    <AlertCircle size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(var(--foreground))]">Log Data</h3>
                </div>
                <p className="text-[hsl(var(--muted-foreground))] leading-relaxed pl-11">
                  We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[hsl(var(--primary))]/10 rounded-lg text-[hsl(var(--primary))]">
                    <AlertCircle size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(var(--foreground))]">Cookies</h3>
                </div>
                <p className="text-[hsl(var(--muted-foreground))] leading-relaxed pl-11 mb-4">
                  Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer's hard drive.
                </p>
                <p className="text-[hsl(var(--muted-foreground))] leading-relaxed pl-11">
                  Our website uses these "cookies" to collection information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[hsl(var(--primary))]/10 rounded-lg text-[hsl(var(--primary))]">
                    <Shield size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(var(--foreground))]">Service Providers</h3>
                </div>
                <div className="pl-11">
                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                    We may employ third-party companies and individuals due to the following reasons:
                  </p>
                  <ul className="list-none space-y-2 mb-4">
                    {[
                      "To facilitate our Service;",
                      "To provide the Service on our behalf;",
                      "To perform Service-related services; or",
                      "To assist us in analysing how our Service is used."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[hsl(var(--muted-foreground))]">
                        <ChevronRight size={18} className="text-[hsl(var(--accent))] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                    We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
                  </p>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[hsl(var(--primary))]/10 rounded-lg text-[hsl(var(--primary))]">
                    <Lock size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(var(--foreground))]">Security</h3>
                </div>
                <p className="text-[hsl(var(--muted-foreground))] leading-relaxed pl-11">
                  We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[hsl(var(--primary))]/10 rounded-lg text-[hsl(var(--primary))]">
                    <LinkIcon size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(var(--foreground))]">Links to Other Sites</h3>
                </div>
                <p className="text-[hsl(var(--muted-foreground))] leading-relaxed pl-11">
                  Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[hsl(var(--primary))]/10 rounded-lg text-[hsl(var(--primary))]">
                    <ShieldCheck size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(var(--foreground))]">Children's Privacy</h3>
                </div>
                <p className="text-[hsl(var(--muted-foreground))] leading-relaxed pl-11">
                  Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[hsl(var(--primary))]/10 rounded-lg text-[hsl(var(--primary))]">
                    <FileText size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(var(--foreground))]">Changes to This Privacy Policy</h3>
                </div>
                <p className="text-[hsl(var(--muted-foreground))] leading-relaxed pl-11">
                  We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
                </p>
              </section>

            </div>
          </div>
          
          {/* Contact CTA inside the card */}
          <div className="mt-12 p-6 bg-[hsl(var(--muted))] rounded-xl border border-[hsl(var(--border))] flex flex-col md:flex-row items-center justify-between gap-6 hidden">
            <div>
              <h4 className="text-lg font-bold text-[hsl(var(--foreground))] mb-2 flex items-center gap-2">
                <Mail size={18} className="text-[hsl(var(--primary))]" />
                Contact Us
              </h4>
              <p className="text-[hsl(var(--muted-foreground))] text-sm">
                If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
              </p>
            </div>
            <button className="whitespace-nowrap bg-[hsl(var(--primary))] text-white px-6 py-3 rounded-[hsl(var(--radius))] font-medium hover:opacity-90 transition-opacity shadow-md flex items-center gap-2">
              Get in Touch
              <ChevronRight size={16} />
            </button>
          </div>

        </div>
      </main>
    </div>
  )
}

export default PrivacyPolicy