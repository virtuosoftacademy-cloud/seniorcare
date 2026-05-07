export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* Page title */}
      <section className="border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-medium text-foreground">
            Terms and Conditions
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

            <Paragraph>
              These Terms and Conditions apply to Ardell Living.
            </Paragraph>
            <Paragraph>
              Please read these terms carefully before using our website (&ldquo;Site&rdquo;).
              Your use of this Site constitutes your acceptance of these Terms and
              Conditions, effective from your first visit.
            </Paragraph>

            <Section title="1. Acceptance of Terms">
              <Paragraph>
                By accessing or using this Site, you confirm that you accept these Terms
                and Conditions in full. If you do not agree with any part of these terms,
                you must discontinue use of the Site immediately.
              </Paragraph>
            </Section>

            <Section title="2. Changes to Terms">
              <Paragraph>
                Ardell Living reserves the right to update or modify these Terms and
                Conditions at any time by posting changes online. Your continued use of
                the Site after such changes are posted constitutes your acceptance of the
                revised terms.
              </Paragraph>
            </Section>

            <Section title="3. Scope of Application">
              <Paragraph>
                These Terms and Conditions apply to this Site and any other platform or
                page under the control of Ardell Living that links to these terms.
              </Paragraph>
            </Section>

            <Section title="4. Intellectual Property Rights">
              <Paragraph>
                All content on this Site, including text, images, graphics, logos and
                other materials, is owned by or licensed to Ardell Living, unless
                otherwise stated.
              </Paragraph>
              <Subhead>You may:</Subhead>
              <List items={[
                'Access and use content for personal, non-commercial purposes only',
              ]} />
              <Subhead>You may not:</Subhead>
              <List items={[
                'Copy, reproduce, distribute, modify or republish any material without prior written consent from Ardell Living or the relevant copyright owner',
              ]} />
              <Paragraph>
                Unauthorised use of any material is strictly prohibited.
              </Paragraph>
            </Section>

            <Section title="5. Third-Party Content">
              <Paragraph>
                Ardell Living makes every reasonable effort to ensure that all materials
                comply with copyright requirements. If any concerns arise regarding
                third-party content, we will review and may remove such material at our
                sole discretion. No further liability will be accepted in such cases.
              </Paragraph>
            </Section>

            <Section title="6. Use of Images">
              <Paragraph>
                Images used on this Site are for illustrative purposes only. They may
                feature models or staged scenarios and may not represent actual residents,
                clients or real-life situations.
              </Paragraph>
            </Section>

            <Section title="7. Information Disclaimer">
              <Paragraph>
                The content provided on this Site is for general informational purposes
                only and should not be relied upon as professional advice.
              </Paragraph>
              <Paragraph>Independent advice should be sought for:</Paragraph>
              <List items={[
                'Medical',
                'Legal',
                'Financial',
              ]} />
              <Paragraph>matters.</Paragraph>
            </Section>

            <Section title="8. External Links">
              <Paragraph>
                This Site may include links to third-party websites for your convenience.
                Ardell Living does not control or guarantee the accuracy, relevance or
                reliability of external content and does not necessarily endorse the views
                expressed within them.
              </Paragraph>
              <Paragraph>
                Accessing third-party websites is done entirely at your own risk.
              </Paragraph>
              <Paragraph>
                Any website wishing to link to this Site must obtain prior permission from
                Ardell Living.
              </Paragraph>
            </Section>

            <Section title="9. Permitted Use">
              <Paragraph>
                You agree to use this Site only for lawful purposes and in a way that does
                not infringe the rights of others or restrict their use of the Site.
              </Paragraph>
              <Paragraph>Prohibited behaviour includes:</Paragraph>
              <List items={[
                'Harassment or causing distress to others',
                'Transmission of harmful, obscene or offensive material',
                'Disruption of normal website functionality',
              ]} />
            </Section>

            <Section title="10. Limitation of Liability">
              <Paragraph>
                Ardell Living does not accept liability for any loss or damage arising
                from the use or inability to use this Site, including but not limited to:
              </Paragraph>
              <List items={[
                'Indirect or consequential loss',
                'Loss of data or profits',
              ]} />
              <Paragraph>
                Use of the Site is entirely at your own risk.
              </Paragraph>
            </Section>

            <Section title="11. Website Availability">
              <Paragraph>
                While Ardell Living aims to ensure that the Site is accessible at all
                times, availability is not guaranteed. We do not warrant that:
              </Paragraph>
              <List items={[
                'The Site will be uninterrupted or error-free',
                'Defects will be corrected',
                'The Site or its servers are free from viruses or bugs',
              ]} />
              <Paragraph>
                We may update, suspend or withdraw any part of the Site at any time
                without notice.
              </Paragraph>
            </Section>

            <Section title="12. Security Disclaimer">
              <Paragraph>
                Users are responsible for ensuring their own systems are protected. Ardell
                Living cannot guarantee that the Site is free from harmful components.
              </Paragraph>
            </Section>

            <Section title="13. Conflicting Terms">
              <Paragraph>
                If there is any conflict between these Terms and Conditions and specific
                terms applicable to certain content or sections of the Site, the latter
                will take precedence.
              </Paragraph>
            </Section>

            <Section title="14. Governing Law">
              <Paragraph>
                These Terms and Conditions shall be governed and interpreted in accordance
                with applicable laws. Any disputes arising in connection with these terms
                shall be subject to the exclusive jurisdiction of the relevant courts.
              </Paragraph>
            </Section>

            <Section title="15. Contact">
              <Paragraph>
                Any questions regarding these Terms and Conditions can be addressed by
                contacting Ardell Living through the official contact channels provided on
                the Site.
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