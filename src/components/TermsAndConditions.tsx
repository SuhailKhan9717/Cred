import React from 'react';
import { 
  Scale, 
  Cookie, 
  FileText, 
  MessageSquare, 
  Link as LinkIcon, 
  Monitor, 
  AlertTriangle, 
  ShieldAlert, 
  ChevronRight,
  ShieldCheck 
} from 'lucide-react';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative flex flex-col pb-12">
      {/* Injecting CSS design tokens for the preview. 
        Remove this <style> block when copying to your project.
      */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");
        
        :root {
          --background: 0 0% 98%;
          --foreground: 224 71% 4%;
          --card: 0 0% 100%;
          --card-foreground: 224 71% 4%;
          --primary: 0 84% 60%;
          --primary-foreground: 0 0% 100%;
          --muted: 220 14% 96%;
          --muted-foreground: 220 9% 46%;
          --accent: 14 100% 57%;
          --accent-foreground: 0 0% 100%;
          --border: 220 13% 91%;
          --radius: 0.75rem;

          --gradient-hero: linear-gradient(135deg, hsl(0 84% 60%) 0%, hsl(0 72% 51%) 50%, hsl(348 83% 47%) 100%);
          --shadow-card: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
          --shadow-glow: 0 0 40px rgba(239, 68, 68, 0.3);
        }

        body {
          font-family: "Inter", system-ui, sans-serif;
          background-color: hsl(var(--background));
          color: hsl(var(--foreground));
        }

        .text-gradient { background-image: linear-gradient(to right, hsl(var(--primary)), hsl(var(--accent))); -webkit-background-clip: text; color: transparent; }
        .hero-pattern { background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); }
        
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}} />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="container max-w-4xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm">
            <Scale size={16} />
            <span>Legal Agreements</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium">
            Please read these terms and conditions carefully before using Our Service.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-grow container max-w-4xl mx-auto px-4 -mt-20 relative z-20">
        
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
                These terms and conditions outline the rules and regulations for the use of Credgrow Website, located at <a href="https://credgrow.in/?page=terms" className="text-[hsl(var(--primary))] font-medium hover:underline">https://credgrow.in/?page=terms</a>.
              </p>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                By accessing this <a href="https://credgrow.in/?page=terms" className="text-[hsl(var(--primary))] font-medium hover:underline">https://credgrow.in/?page=terms</a> we assume you accept these terms and conditions. Do not continue to use Website Name if you do not agree to take all of the terms and conditions stated on this page.
              </p>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company's terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              
              {/* Cookies */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[hsl(var(--primary))]/10 rounded-lg text-[hsl(var(--primary))]">
                    <Cookie size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(var(--foreground))]">Cookies</h3>
                </div>
                <div className="pl-11">
                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                    We employ the use of cookies. By accessing Website Name, you agreed to use cookies in agreement with the Credgrow Privacy Policy.
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                    Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by <a href="https://credgrow.in/?page=terms" className="text-[hsl(var(--primary))] font-medium hover:underline">https://credgrow.in/?page=terms</a> to enable the functionality of certain areas to make it easier for people visiting <a href="https://credgrow.in/?page=terms" className="text-[hsl(var(--primary))] font-medium hover:underline">https://credgrow.in/?page=terms</a>. Some of our affiliate/advertising partners may also use cookies.
                  </p>
                  <ul className="list-none space-y-2">
                    <li className="flex items-start gap-2 text-[hsl(var(--muted-foreground))]">
                      <ChevronRight size={18} className="text-[hsl(var(--accent))] mt-0.5 flex-shrink-0" />
                      <span>Committed to persistently and consistently supporting your journey towards achieving your company's vision.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* License */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[hsl(var(--primary))]/10 rounded-lg text-[hsl(var(--primary))]">
                    <FileText size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(var(--foreground))]">License</h3>
                </div>
                <div className="pl-11">
                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                    Unless otherwise stated, Credgrow and/or its licensors own the intellectual property rights for all material on Website Name. All intellectual property rights are reserved. You may access this from Website Name for your own personal use subjected to restrictions set in these terms and conditions.
                  </p>
                  <p className="text-[hsl(var(--foreground))] font-semibold mb-3">You must not:</p>
                  <ul className="list-none space-y-2 mb-4">
                    {[
                      "Republish material from Website Name",
                      "Sell, rent or sub-license material from Website Name",
                      "Reproduce, duplicate or copy material from Website Name",
                      "Redistribute content from Website Name"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[hsl(var(--muted-foreground))]">
                        <ChevronRight size={18} className="text-[hsl(var(--accent))] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                    This Agreement shall begin on the date hereof.
                  </p>
                </div>
              </section>

              {/* Comments Section */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[hsl(var(--primary))]/10 rounded-lg text-[hsl(var(--primary))]">
                    <MessageSquare size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(var(--foreground))]">User Comments</h3>
                </div>
                <div className="pl-11">
                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                    Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Credgrow does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Credgrow, its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Credgrow shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">
                    Credgrow reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
                  </p>
                  <p className="text-[hsl(var(--foreground))] font-semibold mb-3">You warrant and represent that:</p>
                  <ul className="list-none space-y-2 mb-6">
                    {[
                      "You are entitled to post the Comments on Credgrow and have all necessary licenses and consents to do so;",
                      "The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;",
                      "The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[hsl(var(--muted-foreground))]">
                        <ChevronRight size={18} className="text-[hsl(var(--accent))] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                    You hereby grant Credgrow a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.
                  </p>
                </div>
              </section>

              {/* Hyperlinking */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[hsl(var(--primary))]/10 rounded-lg text-[hsl(var(--primary))]">
                    <LinkIcon size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(var(--foreground))]">Hyperlinking to our Content</h3>
                </div>
                <div className="pl-11">
                  <p className="text-[hsl(var(--foreground))] font-semibold mb-3">
                    The following organizations may link to https://credgrow.in/?page=terms without prior written approval:
                  </p>
                  <ul className="list-none space-y-2 mb-6">
                    {[
                      "Government agencies;",
                      "Search engines;",
                      "News organizations;",
                      "Online directory distributors may link to https://credgrow.in/?page=terms in the same manner as they hyperlink to the Websites of other listed businesses; and",
                      "System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[hsl(var(--muted-foreground))]">
                        <ChevronRight size={18} className="text-[hsl(var(--accent))] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">
                    These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.
                  </p>

                  <p className="text-[hsl(var(--foreground))] font-semibold mb-3">
                    We may consider and approve other link requests from the following types of organizations:
                  </p>
                  <ul className="list-none space-y-2 mb-6 grid grid-cols-1 md:grid-cols-2 gap-x-4">
                    {[
                      "Commonly-known consumer and/or business information sources;",
                      "Dot.com community sites;",
                      "Associations or other groups representing charities;",
                      "Online directory distributors;",
                      "Internet portals;",
                      "Accounting, law and consulting firms; and",
                      "Educational institutions and trade associations."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[hsl(var(--muted-foreground))]">
                        <ChevronRight size={18} className="text-[hsl(var(--accent))] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                    We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavourably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Credgrow; and (d) the link is in the context of general resource information.
                  </p>
                  
                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                    These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.
                  </p>

                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">
                    If you are one of the organizations listed in paragraph 2 above and are interested in linking to <a href="https://credgrow.in/?page=terms" className="text-[hsl(var(--primary))] font-medium hover:underline">https://credgrow.in/?page=terms</a>, you must inform us by sending an e-mail to Credgrow. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to <a href="https://credgrow.in/?page=terms" className="text-[hsl(var(--primary))] font-medium hover:underline">https://credgrow.in/?page=terms</a>, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
                  </p>

                  <p className="text-[hsl(var(--foreground))] font-semibold mb-3">
                    Approved organizations may hyperlink to https://credgrow.in/?page=terms as follows:
                  </p>
                  <ul className="list-none space-y-2 mb-6">
                    {[
                      "By use of our corporate name; or",
                      "By use of the uniform resource locator being linked to; or",
                      "By use of any other description of https://credgrow.in/?page=terms being linked to that makes sense within the context and format of content on the linking party's site."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[hsl(var(--muted-foreground))]">
                        <ChevronRight size={18} className="text-[hsl(var(--accent))] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                    No use of Credgrow’s logo or other artwork will be allowed for linking absent a trademark license agreement.
                  </p>
                </div>
              </section>

              {/* IFrames */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[hsl(var(--primary))]/10 rounded-lg text-[hsl(var(--primary))]">
                    <Monitor size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(var(--foreground))]">iFrames</h3>
                </div>
                <p className="text-[hsl(var(--muted-foreground))] leading-relaxed pl-11">
                  Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of <a href="https://credgrow.in/?page=terms" className="text-[hsl(var(--primary))] font-medium hover:underline">https://credgrow.in/?page=terms</a>.
                </p>
              </section>

              {/* Content Liability */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[hsl(var(--primary))]/10 rounded-lg text-[hsl(var(--primary))]">
                    <AlertTriangle size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(var(--foreground))]">Content Liability</h3>
                </div>
                <p className="text-[hsl(var(--muted-foreground))] leading-relaxed pl-11">
                  We shall not be hold responsible for any content that appears on <a href="https://credgrow.in/?page=terms" className="text-[hsl(var(--primary))] font-medium hover:underline">https://credgrow.in/?page=terms</a>. You agree to protect and defend us against all claims that is rising on <a href="https://credgrow.in/?page=terms" className="text-[hsl(var(--primary))] font-medium hover:underline">https://credgrow.in/?page=terms</a>. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
                </p>
              </section>

              {/* Reservation of Rights & Removal of links */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[hsl(var(--primary))]/10 rounded-lg text-[hsl(var(--primary))]">
                    <ShieldCheck size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(var(--foreground))]">Reservation of Rights & Removal of Links</h3>
                </div>
                <div className="pl-11">
                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                    We reserve the right to request that you remove all links or any particular link to <a href="https://credgrow.in/?page=terms" className="text-[hsl(var(--primary))] font-medium hover:underline">https://credgrow.in/?page=terms</a>. You approve to immediately remove all links to <a href="https://credgrow.in/?page=terms" className="text-[hsl(var(--primary))] font-medium hover:underline">https://credgrow.in/?page=terms</a> upon request. We also reserve the right to amen these terms and conditions and it's linking policy at any time. By continuously linking to <a href="https://credgrow.in/?page=terms" className="text-[hsl(var(--primary))] font-medium hover:underline">https://credgrow.in/?page=terms</a>, you agree to be bound to and follow these linking terms and conditions.
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                    If you find any link on <a href="https://credgrow.in/?page=terms" className="text-[hsl(var(--primary))] font-medium hover:underline">https://credgrow.in/?page=terms</a> that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                    We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
                  </p>
                </div>
              </section>

              {/* Disclaimer */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[hsl(var(--primary))]/10 rounded-lg text-[hsl(var(--primary))]">
                    <ShieldAlert size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(var(--foreground))]">Disclaimer</h3>
                </div>
                <div className="pl-11">
                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                    To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to <a href="https://credgrow.in/?page=terms" className="text-[hsl(var(--primary))] font-medium hover:underline">https://credgrow.in/?page=terms</a> and the use of this website. Nothing in this disclaimer will:
                  </p>
                  <ul className="list-none space-y-2 mb-4">
                    {[
                      "Limit or exclude our or your liability for death or personal injury;",
                      "Limit or exclude our or your liability for fraud or fraudulent misrepresentation;",
                      "Limit any of our or your liabilities in any way that is not permitted under applicable law; or",
                      "Exclude any of our or your liabilities that may not be excluded under applicable law."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[hsl(var(--muted-foreground))]">
                        <ChevronRight size={18} className="text-[hsl(var(--accent))] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                    The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                    As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
                  </p>
                </div>
              </section>

            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}