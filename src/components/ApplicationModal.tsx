import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, CheckCircle, Loader2, AlertCircle, User, Phone, Mail, Briefcase, IndianRupee, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import type { CreditCard, PersonalLoan } from '../data/mockData';
import type { CreditCardReal, InsurancePlanReal } from '../data/ProductionData';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: CreditCardReal | PersonalLoan | InsurancePlanReal | null;
  productType: 'card' | 'loan' | 'insurance';
  onNavigate: (page: string) => void;

}

interface FormData {
  fullName: string;
  mobile: string;
  email: string;
  employmentType: string;
  monthlyIncome: string;
  date: string;

}

interface FormErrors {
  fullName?: string;
  mobile?: string;
  email?: string;
  employmentType?: string;
  monthlyIncome?: string;
  date?: string;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose, product, productType, onNavigate }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    mobile: '',
    email: '',
    employmentType: '',
    monthlyIncome: '',
    date: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const firstInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [termsAccepts, setTermsAccepts] = useState(false)

  // Focus trap and initial focus
  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Validation functions
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) return 'Name is required';
    if (!/^[a-zA-Z\s]{3,}$/.test(name.trim())) return 'Please enter a valid name (min 3 letters)';
    return undefined;
  };

  const validateMobile = (mobile: string): string | undefined => {
    if (!mobile) return 'Mobile number is required';
    if (!/^[6-9]\d{9}$/.test(mobile)) return 'Please enter a valid 10-digit mobile number';
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email address';
    return undefined;
  };

  const validateEmployment = (employment: string): string | undefined => {
    if (!employment) return 'Please select employment type';
    return undefined;
  };

  const validateIncome = (income: string): string | undefined => {
    if (productType === 'loan') {
      if (!income) return 'Monthly income is required';
      const incomeNum = parseInt(income);
      if (isNaN(incomeNum) || incomeNum < 15000) return 'Minimum income should be ₹15,000';
    }
    return undefined;
  };

  const validateField = (field: keyof FormData, value: string): string | undefined => {
    switch (field) {
      case 'fullName': return validateName(value);
      case 'mobile': return validateMobile(value);
      case 'email': return validateEmail(value);
      case 'employmentType': return validateEmployment(value);
      case 'monthlyIncome': return validateIncome(value);
      case 'date': return value ? undefined : 'Please select a date';
      default: return undefined;
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors(prev => ({ ...prev, [field]: validateField(field, value) }));
    }
    if (submitStatus !== 'idle') setSubmitStatus('idle');
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    setErrors(prev => ({ ...prev, [field]: validateField(field, formData[field]) }));
  };

  const validateAll = (): boolean => {
    const newErrors: FormErrors = {
      fullName: validateName(formData.fullName),
      mobile: validateMobile(formData.mobile),
      email: validateEmail(formData.email),
      employmentType: validateEmployment(formData.employmentType),
      monthlyIncome: productType === 'loan' ? validateIncome(formData.monthlyIncome) : undefined
    };
    setErrors(newErrors);
    setTouched({ fullName: true, mobile: true, email: true, employmentType: true, monthlyIncome: true, date: true });
    return !Object.values(newErrors).some(e => e);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAll()) return;
    if (!termsAccepts) {
      alert('Please accepts terms and condition')
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Prepare data to send to Vercel Backend
    let productName = 'Unknown';
    if (product) {
      if ('cardName' in product) {
        // It's a Credit Card
        productName = product.cardName;
      } else if ('providerName' in product) {
        // It's Insurance
        productName = product.providerName;
        // Tip: You could also do `${product.providerName} ${product.planName}` if you want more detail!
      } else if ('bankName' in product) {
        // It's a Personal Loan
        productName = `${product.bankName} Personal Loan`;
      }
    }
    let finalBankName = 'Unknown';
    if (product) {
      // If the product has a 'bankName' property (Cards & Loans)
      if ('bankName' in product) {
        finalBankName = product.bankName;
      }
      // If the product has a 'providerName' property (Insurance)
      else if ('providerName' in product) {
        finalBankName = product.providerName;
      }
    }

    try {
      // Call the Vercel API Route we created
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          productName,
          bankName: finalBankName,
          productType
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Success handling
      setSubmitStatus('success');

      setTimeout(() => {
        if (product?.applyUrl  && ('cardName' in product)) {
          // 3. Redirect the CURRENT tab to the bank's website
          window.location.href = product.applyUrl;
        } else {
          // Fallback just in case there is no URL
          onClose();
          setFormData({ fullName: '', mobile: '', email: '', employmentType: '', monthlyIncome: '', date: '' });
          setTouched({});
          setErrors({});
          setSubmitStatus('idle');
        }

      }, 1500);

    } catch (error) {
      console.error('Submission failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!product) return null;

  let productName = 'Unknown';
  if (product) {
    if ('cardName' in product) {
      // It's a Credit Card
      productName = product.cardName;
    } else if ('providerName' in product) {
      // It's Insurance
      productName = product.providerName;
      // Tip: You could also do `${product.providerName} ${product.planName}` if you want more detail!
    } else if ('bankName' in product) {
      // It's a Personal Loan
      productName = `${product.bankName} Personal Loan`;
    }
  }
  let bankName = 'Unknown';
  if (product) {
    // If the product has a 'bankName' property (Cards & Loans)
    if ('bankName' in product) {
      bankName = product.bankName;
    }
    // If the product has a 'providerName' property (Insurance)
    else if ('providerName' in product) {
      bankName = product.providerName;
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-card rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Header */}
            <div className="sticky top-0 bg-card border-b border-border p-6 z-10">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 id="modal-title" className="text-xl font-bold text-foreground pr-8">
                Apply for {productName}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">{bankName}</p>
              <p className="text-xs text-success flex items-center gap-1 mt-2">
                <Shield className="w-3 h-3" aria-hidden="true" />
                Your application is 100% secure
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-success/10 border border-success/30 rounded-lg p-4 flex items-center gap-3"
                  role="alert"
                >
                  <CheckCircle className="w-5 h-5 text-success shrink-0" aria-hidden="true" />
                  <span className="text-success font-medium">Application submitted! Redirecting...</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 flex items-center gap-3"
                  role="alert"
                >
                  <AlertCircle className="w-5 h-5 text-destructive shrink-0" aria-hidden="true" />
                  <span className="text-destructive font-medium">Something went wrong. Please try again.</span>
                </motion.div>
              )}

              {/* Full Name */}
              <div>
                <Label htmlFor="fullName" className="flex items-center gap-2 mb-2">
                  <User className="w-4 h-4 text-primary" aria-hidden="true" />
                  Full Name
                </Label>
                <div className="relative">
                  <Input
                    ref={firstInputRef}
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    onBlur={() => handleBlur('fullName')}
                    className={`${errors.fullName && touched.fullName ? 'border-destructive' : ''} pr-10`}
                    placeholder="Enter your full name"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  />
                  {touched.fullName && !errors.fullName && (
                    <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-success" aria-hidden="true" />
                  )}
                </div>
                {errors.fullName && touched.fullName && (
                  <p id="fullName-error" className="text-sm text-destructive mt-1 flex items-center gap-1" role="alert">
                    <AlertCircle className="w-3 h-3" aria-hidden="true" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Mobile Number */}
              <div>
                <Label htmlFor="mobile" className="flex items-center gap-2 mb-2">
                  <Phone className="w-4 h-4 text-primary" aria-hidden="true" />
                  Mobile Number
                </Label>
                <div className="relative">
                  <Input
                    id="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => handleChange('mobile', e.target.value.replace(/\D/g, '').slice(0, 10))}
                    onBlur={() => handleBlur('mobile')}
                    className={`${errors.mobile && touched.mobile ? 'border-destructive' : ''} pr-10`}
                    placeholder="Enter 10-digit mobile number"
                    aria-invalid={!!errors.mobile}
                    aria-describedby={errors.mobile ? 'mobile-error' : undefined}
                  />
                  {touched.mobile && !errors.mobile && (
                    <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-success" aria-hidden="true" />
                  )}
                </div>
                {errors.mobile && touched.mobile && (
                  <p id="mobile-error" className="text-sm text-destructive mt-1 flex items-center gap-1" role="alert">
                    <AlertCircle className="w-3 h-3" aria-hidden="true" />
                    {errors.mobile}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4 text-primary" aria-hidden="true" />
                  Email Address
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                    className={`${errors.email && touched.email ? 'border-destructive' : ''} pr-10`}
                    placeholder="Enter your email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {touched.email && !errors.email && (
                    <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-success" aria-hidden="true" />
                  )}
                </div>
                {errors.email && touched.email && (
                  <p id="email-error" className="text-sm text-destructive mt-1 flex items-center gap-1" role="alert">
                    <AlertCircle className="w-3 h-3" aria-hidden="true" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Employment Type */}
              <div>
                <Label htmlFor="employmentType" className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-primary" aria-hidden="true" />
                  Employment Types 
                </Label>
                <Select
                  value={formData.employmentType}
                  onValueChange={(value: string) => {
                    handleChange('employmentType', value);
                    setTouched(prev => ({ ...prev, employmentType: true }));
                  }}
                >
                  <SelectTrigger
                    id="employmentType"
                    className={errors.employmentType && touched.employmentType ? 'border-destructive' : ''}
                    aria-invalid={!!errors.employmentType}
                  >
                    <SelectValue placeholder="Select employment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="salaried">Salaried</SelectItem>
                    <SelectItem value="self-employed">Self-Employed</SelectItem>
                    <SelectItem value="business">Business Owner</SelectItem>
                    <SelectItem value="student">Student</SelectItem>
                  </SelectContent>
                </Select>
                {errors.employmentType && touched.employmentType && (
                  <p className="text-sm text-destructive mt-1 flex items-center gap-1" role="alert">
                    <AlertCircle className="w-3 h-3" aria-hidden="true" />
                    {errors.employmentType}
                  </p>
                )}
              </div>

              {/* Monthly Income (for loans) */}
              {productType === 'loan' && (
                <div>
                  <Label htmlFor="monthlyIncome" className="flex items-center gap-2 mb-2">
                    <IndianRupee className="w-4 h-4 text-primary" aria-hidden="true" />
                    Monthly Income
                  </Label>
                  <div className="relative">
                    <Input
                      id="monthlyIncome"
                      type="number"
                      value={formData.monthlyIncome}
                      onChange={(e) => handleChange('monthlyIncome', e.target.value)}
                      onBlur={() => handleBlur('monthlyIncome')}
                      className={`${errors.monthlyIncome && touched.monthlyIncome ? 'border-destructive' : ''} pr-10`}
                      placeholder="Enter monthly income"
                      min="15000"
                      aria-invalid={!!errors.monthlyIncome}
                      aria-describedby={errors.monthlyIncome ? 'monthlyIncome-error' : undefined}
                    />
                    {touched.monthlyIncome && !errors.monthlyIncome && (
                      <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-success" aria-hidden="true" />
                    )}
                  </div>
                  {errors.monthlyIncome && touched.monthlyIncome && (
                    <p id="monthlyIncome-error" className="text-sm text-destructive mt-1 flex items-center gap-1" role="alert">
                      <AlertCircle className="w-3 h-3" aria-hidden="true" />
                      {errors.monthlyIncome}
                    </p>
                  )}
                </div>
              )}
                  
				
                  {/* Date Field */}
                <div>
                  <Label htmlFor="date" className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-primary" aria-hidden="true" />
                    Select Date
                  </Label>

                  <div className="relative">
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleChange('date', e.target.value)}
                      onBlur={() => handleBlur('date')}
                      className={`${errors.date && touched.date ? 'border-destructive' : ''} pr-10`}
                      aria-invalid={!!errors.date}
                      aria-describedby={errors.date ? 'date-error' : undefined}
                    />

                    {touched.date && !errors.date && (
                      <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-success" aria-hidden="true" />
                    )}
                  </div>

                  {errors.date && touched.date && (
                    <p
                      id="date-error"
                      className="text-sm text-destructive mt-1 flex items-center gap-1"
                      role="alert"
                    >
                      <AlertCircle className="w-3 h-3" aria-hidden="true" />
                      {errors.date}
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
                 <a onClick={()=>{ onClose(); onNavigate('terms') }} target="_blank" 
                 className="text-primary hover:underline font-medium">Terms & Conditions,</a> {" "}
                 <a onClick={()=>{ onClose(); onNavigate('privacy') }} target="_blank" 
                 className="text-primary hover:underline font-medium">Privacy Policy.</a> {" "}
                 I also authorize Credgrow to send notification via SMS/RCS/Call/Email/WhatsApp*. Enter your phone number below.
                </Label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
                className="w-full bg-cta hover:bg-cta/90 text-cta-foreground font-semibold py-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" aria-hidden="true" />
                    Processing...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle className="mr-2 w-4 h-4" aria-hidden="true" />
                    Success!
                  </>
                ) : (
                  'Submit Application'
                )}
              </Button>

              {/* Security Note */}
              <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1">
                <Shield className="w-3 h-3" aria-hidden="true" />
                Your privacy is guaranteed. We never share your data.
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ApplicationModal;
// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, Shield, CheckCircle, Loader2, AlertCircle, User, Phone, Mail, Briefcase, IndianRupee } from 'lucide-react';
// import { Button } from './ui/button';
// import { Input } from './ui/input';
// import { Label } from './ui/label';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
// import type { CreditCard, PersonalLoan } from '../data/mockData';

// interface ApplicationModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   product: CreditCard | PersonalLoan | null;
//   productType: 'card' | 'loan';
// }

// interface FormData {
//   fullName: string;
//   mobile: string;
//   email: string;
//   employmentType: string;
//   monthlyIncome: string;
// }

// interface FormErrors {
//   fullName?: string;
//   mobile?: string;
//   email?: string;
//   employmentType?: string;
//   monthlyIncome?: string;
// }

// const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose, product, productType }) => {
//   const [formData, setFormData] = useState<FormData>({
//     fullName: '',
//     mobile: '',
//     email: '',
//     employmentType: '',
//     monthlyIncome: ''
//   });
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [touched, setTouched] = useState<Record<string, boolean>>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
//   const firstInputRef = useRef<HTMLInputElement>(null);
//   const modalRef = useRef<HTMLDivElement>(null);

//   // Focus trap and initial focus
//   useEffect(() => {
//     if (isOpen && firstInputRef.current) {
//       firstInputRef.current.focus();
//     }
//   }, [isOpen]);

//   // Close on Escape key
//   useEffect(() => {
//     const handleEscape = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') onClose();
//     };
//     if (isOpen) {
//       document.addEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'hidden';
//     }
//     return () => {
//       document.removeEventListener('keydown', handleEscape);
//       document.body.style.overflow = '';
//     };
//   }, [isOpen, onClose]);

//   // Validation functions
//   const validateName = (name: string): string | undefined => {
//     if (!name.trim()) return 'Name is required';
//     if (!/^[a-zA-Z\s]{3,}$/.test(name.trim())) return 'Please enter a valid name (min 3 letters)';
//     return undefined;
//   };

//   const validateMobile = (mobile: string): string | undefined => {
//     if (!mobile) return 'Mobile number is required';
//     if (!/^[6-9]\d{9}$/.test(mobile)) return 'Please enter a valid 10-digit mobile number';
//     return undefined;
//   };

//   const validateEmail = (email: string): string | undefined => {
//     if (!email) return 'Email is required';
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email address';
//     return undefined;
//   };

//   const validateEmployment = (employment: string): string | undefined => {
//     if (!employment) return 'Please select employment type';
//     return undefined;
//   };

//   const validateIncome = (income: string): string | undefined => {
//     if (productType === 'loan') {
//       if (!income) return 'Monthly income is required';
//       const incomeNum = parseInt(income);
//       if (isNaN(incomeNum) || incomeNum < 15000) return 'Minimum income should be ₹15,000';
//     }
//     return undefined;
//   };

//   const validateField = (field: keyof FormData, value: string): string | undefined => {
//     switch (field) {
//       case 'fullName': return validateName(value);
//       case 'mobile': return validateMobile(value);
//       case 'email': return validateEmail(value);
//       case 'employmentType': return validateEmployment(value);
//       case 'monthlyIncome': return validateIncome(value);
//       default: return undefined;
//     }
//   };

//   const handleChange = (field: keyof FormData, value: string) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//     if (touched[field]) {
//       setErrors(prev => ({ ...prev, [field]: validateField(field, value) }));
//     }
//     if (submitStatus !== 'idle') setSubmitStatus('idle');
//   };

//   const handleBlur = (field: keyof FormData) => {
//     setTouched(prev => ({ ...prev, [field]: true }));
//     setErrors(prev => ({ ...prev, [field]: validateField(field, formData[field]) }));
//   };

//   const validateAll = (): boolean => {
//     const newErrors: FormErrors = {
//       fullName: validateName(formData.fullName),
//       mobile: validateMobile(formData.mobile),
//       email: validateEmail(formData.email),
//       employmentType: validateEmployment(formData.employmentType),
//       monthlyIncome: productType === 'loan' ? validateIncome(formData.monthlyIncome) : undefined
//     };
//     setErrors(newErrors);
//     setTouched({ fullName: true, mobile: true, email: true, employmentType: true, monthlyIncome: true });
//     return !Object.values(newErrors).some(e => e);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validateAll()) return;

//     setIsSubmitting(true);

//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 2000));

//     // 10% chance of simulated error
//     if (Math.random() < 0.1) {
//       setIsSubmitting(false);
//       setSubmitStatus('error');
//       return;
//     }

//     setIsSubmitting(false);
//     setSubmitStatus('success');

//     // Close modal after success
//     setTimeout(() => {
//       alert(`Redirecting to ${product && 'bankName' in product ? product.bankName : 'bank'} official website...`);
//       onClose();
//       // Reset form
//       setFormData({ fullName: '', mobile: '', email: '', employmentType: '', monthlyIncome: '' });
//       setTouched({});
//       setErrors({});
//       setSubmitStatus('idle');
//     }, 1500);
//   };

//   if (!product) return null;

//   const productName = 'cardName' in product ? product.cardName : 'Personal Loan';
//   const bankName = product.bankName;

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//           {/* Backdrop */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//             onClick={onClose}
//           />

//           {/* Modal */}
//           <motion.div
//             ref={modalRef}
//             initial={{ opacity: 0, scale: 0.95, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.95, y: 20 }}
//             className="relative bg-card rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
//             role="dialog"
//             aria-modal="true"
//             aria-labelledby="modal-title"
//           >
//             {/* Header */}
//             <div className="sticky top-0 bg-card border-b border-border p-6 z-10">
//               <button
//                 onClick={onClose}
//                 className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
//                 aria-label="Close modal"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//               <h2 id="modal-title" className="text-xl font-bold text-foreground pr-8">
//                 Apply for {productName}
//               </h2>
//               <p className="text-sm text-muted-foreground mt-1">{bankName}</p>
//               <p className="text-xs text-success flex items-center gap-1 mt-2">
//                 <Shield className="w-3 h-3" aria-hidden="true" />
//                 Your application is 100% secure
//               </p>
//             </div>

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="p-6 space-y-5">
//               {/* Status Messages */}
//               {submitStatus === 'success' && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="bg-success/10 border border-success/30 rounded-lg p-4 flex items-center gap-3"
//                   role="alert"
//                 >
//                   <CheckCircle className="w-5 h-5 text-success shrink-0" aria-hidden="true" />
//                   <span className="text-success font-medium">Application submitted! Redirecting...</span>
//                 </motion.div>
//               )}

//               {submitStatus === 'error' && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 flex items-center gap-3"
//                   role="alert"
//                 >
//                   <AlertCircle className="w-5 h-5 text-destructive shrink-0" aria-hidden="true" />
//                   <span className="text-destructive font-medium">Something went wrong. Please try again.</span>
//                 </motion.div>
//               )}

//               {/* Full Name */}
//               <div>
//                 <Label htmlFor="fullName" className="flex items-center gap-2 mb-2">
//                   <User className="w-4 h-4 text-primary" aria-hidden="true" />
//                   Full Name
//                 </Label>
//                 <div className="relative">
//                   <Input
//                     ref={firstInputRef}
//                     id="fullName"
//                     type="text"
//                     value={formData.fullName}
//                     onChange={(e) => handleChange('fullName', e.target.value)}
//                     onBlur={() => handleBlur('fullName')}
//                     className={`${errors.fullName && touched.fullName ? 'border-destructive' : ''} pr-10`}
//                     placeholder="Enter your full name"
//                     aria-invalid={!!errors.fullName}
//                     aria-describedby={errors.fullName ? 'fullName-error' : undefined}
//                   />
//                   {touched.fullName && !errors.fullName && (
//                     <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-success" aria-hidden="true" />
//                   )}
//                 </div>
//                 {errors.fullName && touched.fullName && (
//                   <p id="fullName-error" className="text-sm text-destructive mt-1 flex items-center gap-1" role="alert">
//                     <AlertCircle className="w-3 h-3" aria-hidden="true" />
//                     {errors.fullName}
//                   </p>
//                 )}
//               </div>

//               {/* Mobile Number */}
//               <div>
//                 <Label htmlFor="mobile" className="flex items-center gap-2 mb-2">
//                   <Phone className="w-4 h-4 text-primary" aria-hidden="true" />
//                   Mobile Number
//                 </Label>
//                 <div className="relative">
//                   <Input
//                     id="mobile"
//                     type="tel"
//                     value={formData.mobile}
//                     onChange={(e) => handleChange('mobile', e.target.value.replace(/\D/g, '').slice(0, 10))}
//                     onBlur={() => handleBlur('mobile')}
//                     className={`${errors.mobile && touched.mobile ? 'border-destructive' : ''} pr-10`}
//                     placeholder="Enter 10-digit mobile number"
//                     aria-invalid={!!errors.mobile}
//                     aria-describedby={errors.mobile ? 'mobile-error' : undefined}
//                   />
//                   {touched.mobile && !errors.mobile && (
//                     <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-success" aria-hidden="true" />
//                   )}
//                 </div>
//                 {errors.mobile && touched.mobile && (
//                   <p id="mobile-error" className="text-sm text-destructive mt-1 flex items-center gap-1" role="alert">
//                     <AlertCircle className="w-3 h-3" aria-hidden="true" />
//                     {errors.mobile}
//                   </p>
//                 )}
//               </div>

//               {/* Email */}
//               <div>
//                 <Label htmlFor="email" className="flex items-center gap-2 mb-2">
//                   <Mail className="w-4 h-4 text-primary" aria-hidden="true" />
//                   Email Address
//                 </Label>
//                 <div className="relative">
//                   <Input
//                     id="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={(e) => handleChange('email', e.target.value)}
//                     onBlur={() => handleBlur('email')}
//                     className={`${errors.email && touched.email ? 'border-destructive' : ''} pr-10`}
//                     placeholder="Enter your email"
//                     aria-invalid={!!errors.email}
//                     aria-describedby={errors.email ? 'email-error' : undefined}
//                   />
//                   {touched.email && !errors.email && (
//                     <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-success" aria-hidden="true" />
//                   )}
//                 </div>
//                 {errors.email && touched.email && (
//                   <p id="email-error" className="text-sm text-destructive mt-1 flex items-center gap-1" role="alert">
//                     <AlertCircle className="w-3 h-3" aria-hidden="true" />
//                     {errors.email}
//                   </p>
//                 )}
//               </div>

//               {/* Employment Type */}
//               <div>
//                 <Label htmlFor="employmentType" className="flex items-center gap-2 mb-2">
//                   <Briefcase className="w-4 h-4 text-primary" aria-hidden="true" />
//                   Employment Type
//                 </Label>
//                 <Select
//                   value={formData.employmentType}
//                   onValueChange={(value : string) => {
//                     handleChange('employmentType', value);
//                     setTouched(prev => ({ ...prev, employmentType: true }));
//                   }}
//                 >
//                   <SelectTrigger
//                     id="employmentType"
//                     className={errors.employmentType && touched.employmentType ? 'border-destructive' : ''}
//                     aria-invalid={!!errors.employmentType}
//                   >
//                     <SelectValue placeholder="Select employment type" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="salaried">Salaried</SelectItem>
//                     <SelectItem value="self-employed">Self-Employed</SelectItem>
//                     <SelectItem value="business">Business Owner</SelectItem>
//                     <SelectItem value="student">Student</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 {errors.employmentType && touched.employmentType && (
//                   <p className="text-sm text-destructive mt-1 flex items-center gap-1" role="alert">
//                     <AlertCircle className="w-3 h-3" aria-hidden="true" />
//                     {errors.employmentType}
//                   </p>
//                 )}
//               </div>

//               {/* Monthly Income (for loans) */}
//               {productType === 'loan' && (
//                 <div>
//                   <Label htmlFor="monthlyIncome" className="flex items-center gap-2 mb-2">
//                     <IndianRupee className="w-4 h-4 text-primary" aria-hidden="true" />
//                     Monthly Income
//                   </Label>
//                   <div className="relative">
//                     <Input
//                       id="monthlyIncome"
//                       type="number"
//                       value={formData.monthlyIncome}
//                       onChange={(e) => handleChange('monthlyIncome', e.target.value)}
//                       onBlur={() => handleBlur('monthlyIncome')}
//                       className={`${errors.monthlyIncome && touched.monthlyIncome ? 'border-destructive' : ''} pr-10`}
//                       placeholder="Enter monthly income"
//                       min="15000"
//                       aria-invalid={!!errors.monthlyIncome}
//                       aria-describedby={errors.monthlyIncome ? 'monthlyIncome-error' : undefined}
//                     />
//                     {touched.monthlyIncome && !errors.monthlyIncome && (
//                       <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-success" aria-hidden="true" />
//                     )}
//                   </div>
//                   {errors.monthlyIncome && touched.monthlyIncome && (
//                     <p id="monthlyIncome-error" className="text-sm text-destructive mt-1 flex items-center gap-1" role="alert">
//                       <AlertCircle className="w-3 h-3" aria-hidden="true" />
//                       {errors.monthlyIncome}
//                     </p>
//                   )}
//                 </div>
//               )}

//               {/* Submit Button */}
//               <Button
//                 type="submit"
//                 disabled={isSubmitting || submitStatus === 'success'}
//                 className="w-full bg-cta hover:bg-cta/90 text-cta-foreground font-semibold py-6 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <Loader2 className="mr-2 w-4 h-4 animate-spin" aria-hidden="true" />
//                     Processing...
//                   </>
//                 ) : submitStatus === 'success' ? (
//                   <>
//                     <CheckCircle className="mr-2 w-4 h-4" aria-hidden="true" />
//                     Success!
//                   </>
//                 ) : (
//                   'Submit Application'
//                 )}
//               </Button>

//               {/* Security Note */}
//               <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1">
//                 <Shield className="w-3 h-3" aria-hidden="true" />
//                 Protected by 256-bit encryption. We never share your data.
//               </p>
//             </form>
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ApplicationModal;
