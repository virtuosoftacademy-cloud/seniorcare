export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Page title */}
      <section className="border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-medium text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: November 2025
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <article className="space-y-10">

            <Section title="Who is Ardell Living?">
              <Paragraph>
                Ardell Living is a care-focused organisation committed to supporting
                individuals with a range of needs, including those related to ageing,
                health conditions and overall wellbeing.
              </Paragraph>
              <Paragraph>
                For all data protection-related correspondence, you may contact us through
                the official contact details provided on our website.
              </Paragraph>
            </Section>

            <Section title="Purpose of This Privacy Policy">
              <Paragraph>
                At Ardell Living, we are committed to protecting and respecting your
                privacy. This Privacy Policy explains:
              </Paragraph>
              <List items={[
                'What personal information we collect',
                'How and why we use it',
                'When we may share it',
                'How we keep it secure',
              ]} />
              <Paragraph>
                By using our website, you agree to this Privacy Policy. We may update it
                from time to time and continued use of the website constitutes acceptance
                of any changes.
              </Paragraph>
            </Section>

            <Section title="How We Collect Information">
              <Paragraph>We collect information when you:</Paragraph>
              <List items={[
                'Visit and browse our website',
                'Submit an enquiry through contact forms',
                'Communicate with us via email or other channels',
                'Sign up for updates or newsletters',
                'Use any interactive features on the website',
              ]} />
            </Section>

            <Section title="What Information We Collect">
              <Subhead>1. Information You Provide Voluntarily</Subhead>
              <Paragraph>This may include:</Paragraph>
              <List items={[
                'Name',
                'Email address',
                'Phone number',
                'Address',
                'Any details shared through forms or communication',
              ]} />
              <Paragraph>
                By providing this information, you consent to its collection and use as
                outlined in this policy.
              </Paragraph>

              <Subhead>2. Information Collected Automatically</Subhead>
              <Paragraph>When you use our website, we may collect:</Paragraph>
              <List items={[
                'IP address',
                'Browser type and device information',
                'Pages visited and browsing behaviour',
              ]} />
              <Paragraph>
                This helps us improve website performance and user experience.
              </Paragraph>

              <Subhead>3. Social Media Interactions</Subhead>
              <Paragraph>
                If you engage with us via social platforms, we may receive limited
                information depending on your privacy settings on those platforms.
              </Paragraph>
            </Section>

            <Section title="How We Use Your Information">
              <Paragraph>We use your information to:</Paragraph>
              <List items={[
                'Respond to enquiries and provide support',
                'Deliver information about our services',
                'Improve our website and user experience',
                'Send updates or communications you have requested',
                'Maintain internal records and administrative processes',
              ]} />
              <Paragraph>
                We will only use your data where we have a lawful basis to do so.
              </Paragraph>
            </Section>

            <Section title="How Long We Keep Your Information">
              <Paragraph>
                We retain personal information only for as long as necessary to fulfil the
                purpose it was collected for, including legal, regulatory or operational
                requirements.
              </Paragraph>
            </Section>

            <Section title="Who Has Access to Your Information">
              <List items={[
                'Access is restricted internally on a need-to-know basis',
                'We do not sell or rent your personal data to third parties',
                'We do not share your data for third-party marketing purposes',
              ]} />
            </Section>

            <Section title="Third-Party Service Providers">
              <Paragraph>
                We may share your information with trusted third-party providers who
                support our operations (such as website hosting or communication tools).
                These providers are required to keep your information secure and use it
                only for specified purposes.
              </Paragraph>
              <Paragraph>
                We may disclose information if required by law or to protect rights,
                safety or prevent fraud.
              </Paragraph>
            </Section>

            <Section title="Data Security">
              <Paragraph>
                We take appropriate measures to protect your personal information from:
              </Paragraph>
              <List items={[
                'Loss',
                'Misuse',
                'Unauthorised access',
                'Disclosure or alteration',
              ]} />
              <Paragraph>
                However, transmission over the internet is not completely secure. While we
                strive to protect your data, any transmission is at your own risk.
              </Paragraph>
            </Section>

            <Section title="Your Rights">
              <Paragraph>You have the right to:</Paragraph>
              <List items={[
                'Request access to your personal data',
                'Request correction of inaccurate information',
                'Request deletion of your data (where applicable)',
                'Restrict or object to processing in certain circumstances',
                'Request transfer of your data in a structured format',
              ]} />
              <Paragraph>
                To exercise any of these rights, please contact us through the website.
              </Paragraph>
            </Section>

            <Section title="Marketing Preferences">
              <Paragraph>
                You have full control over whether you receive communications from us.
              </Paragraph>
              <Paragraph>
                We will not send marketing messages unless you have opted in. You can
                update your preferences or unsubscribe at any time.
              </Paragraph>
            </Section>

            <Section title="Use of Cookies">
              <Paragraph>
                Our website uses cookies to enhance your browsing experience.
              </Paragraph>
              <Paragraph>Cookies help us:</Paragraph>
              <List items={[
                'Understand how users interact with the website',
                'Improve performance and functionality',
              ]} />
              <Paragraph>
                You can disable cookies through your browser settings, although this may
                affect website functionality.
              </Paragraph>
            </Section>

            <Section title="Links to Other Websites">
              <Paragraph>
                Our website may contain links to external websites. This Privacy Policy
                applies only to Ardell Living.
              </Paragraph>
              <Paragraph>
                We are not responsible for the privacy practices of third-party websites
                and encourage you to review their policies separately.
              </Paragraph>
            </Section>

            <Section title="Children and Vulnerable Individuals">
              <Paragraph>
                We are committed to protecting the privacy of children and individuals
                who may be vulnerable.
              </Paragraph>
              <Paragraph>
                If you are under 16, please obtain permission from a parent or guardian
                before providing personal information.
              </Paragraph>
              <Paragraph>
                We take additional care when handling data relating to vulnerable
                individuals in line with best practices.
              </Paragraph>
            </Section>

            <Section title="Updates to This Policy">
              <Paragraph>
                We review this Privacy Policy regularly and may update it when necessary.
                Any changes will be posted on this page.
              </Paragraph>
            </Section>

            <Section title="Contact">
              <Paragraph>
                If you have any questions about this Privacy Policy or how your data is
                handled, please contact Ardell Living through the official contact
                details provided on the website.
              </Paragraph>
            </Section>

          </article>
        </div>
      </section>

    </div>
  );
}

/* ---------- Sub-components ---------- */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl md:text-2xl font-medium text-foreground mb-4">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[15px] leading-7 text-foreground mb-4">
      {children}
    </p>
  );
}

function Subhead({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-base font-medium text-foreground mt-6 mb-3">
      {children}
    </h3>
  );
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc pl-5 mb-4 space-y-1.5 text-[15px] leading-7 text-foreground">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}