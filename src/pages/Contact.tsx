import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Typewriter from '@/components/ui/Typewriter';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.address'),
      details: ['Morogoro Road, P.O. Box 1519', 'Dodoma, Tanzania'],
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      details: ['+255 26 232 1222', '+255 26 232 1223'],
    },
    {
      icon: Mail,
      title: t('contact.emailLabel'),
      details: ['info@tawa.go.tz', 'support@tawa.go.tz'],
    },
    {
      icon: Clock,
      title: t('contact.officeHours'),
      details: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday: 8:00 AM - 1:00 PM'],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('contact.messageSent'),
      description: t('contact.messageSentDesc'),
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container-safari">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 bg-jungle-yellow/10 text-jungle-yellow rounded-full text-sm font-medium mb-4">
              {t('contact.badge')}
            </span>
            <div className="min-h-[4rem] md:min-h-[5rem] mb-6">
              <Typewriter
                text={t('contact.title')}
                speed={80}
                delay={200}
                className="text-4xl md:text-6xl font-heading font-bold text-foreground"
                tag="h1"
                showCursor={true}
              />
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-safari">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                {t('contact.formTitle')}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.fullName')}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-jungle-yellow transition-shadow"
                      placeholder={t('contact.placeholders.name')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.email')}
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-jungle-yellow transition-shadow"
                      placeholder={t('contact.placeholders.email')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.subject')}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-jungle-yellow transition-shadow"
                    placeholder={t('contact.placeholders.subject')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-jungle-yellow transition-shadow resize-none"
                    placeholder={t('contact.placeholders.message')}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-jungle-yellow text-jungle-dark font-semibold rounded-lg hover:bg-jungle-yellow-light transition-colors"
                >
                  <Send className="w-5 h-5" />
                  {t('contact.sendMessage')}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                {t('contact.contactInfo')}
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="bg-card p-6 rounded-2xl shadow-soft"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="bg-card rounded-2xl overflow-hidden shadow-soft h-64">
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Dodoma, Tanzania</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
