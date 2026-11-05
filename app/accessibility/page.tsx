
export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ed] text-[#142b45]">
      <section className="w-full bg-[#142b45] px-6 py-20 text-center text-white">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#c9a45c]">
          Aga'azian National Movement
        </p>

        <h1 className="text-4xl font-bold md:text-5xl">
          Accessibility
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-white/75">
          Our commitment to making the ANM website accessible and usable
          for everyone.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-8 leading-8">
          The Aga'azian National Movement (ANM) believes that everyone
          should be able to access information and participate in public
          life. We are committed to making our website accessible to
          people with different abilities, technologies, and needs.
        </p>

        <h2 className="mb-3 text-2xl font-bold">
          Our Commitment
        </h2>
        <p className="mb-8 leading-8">
          We aim to make our website clear, understandable, and easy to
          navigate. We seek to improve accessibility as our website
          develops and new content and features are introduced.
        </p>

        <h2 className="mb-3 text-2xl font-bold">
          Accessibility Features
        </h2>
        <p className="mb-4 leading-8">
          We aim to support accessibility through features and practices
          such as:
        </p>
        <ul className="mb-8 list-disc space-y-3 pl-6 leading-8">
          <li>Clear headings and consistent page structure.</li>
          <li>Readable text and sufficient colour contrast.</li>
          <li>Navigation that is consistent across the website.</li>
          <li>Alternative text for meaningful images where appropriate.</li>
          <li>Layouts designed to work across different screen sizes.</li>
          <li>Efforts to support keyboard navigation and assistive technologies.</li>
        </ul>

        <h2 className="mb-3 text-2xl font-bold">
          Ongoing Improvements
        </h2>
        <p className="mb-8 leading-8">
          Accessibility is an ongoing process. We recognize that some
          parts of the website may not yet meet every accessibility need.
          We will continue working to identify and address barriers as
          the website evolves.
        </p>

        <h2 className="mb-3 text-2xl font-bold">
          Third-Party Content
        </h2>
        <p className="mb-8 leading-8">
          Some website content or services may be provided by third
          parties. We cannot guarantee the accessibility of external
          websites or services, but we encourage users to consult their
          accessibility information where available.
        </p>

        <h2 className="mb-3 text-2xl font-bold">
          Feedback and Assistance
        </h2>
        <p className="mb-8 leading-8">
          If you experience difficulty accessing any part of our website,
          or have suggestions for improving accessibility, please contact
          us through the contact information provided on the ANM website.
          We welcome your feedback and will make reasonable efforts to
          respond.
        </p>

        <h2 className="mb-3 text-2xl font-bold">
          Contact
        </h2>
        <p className="leading-8">
          For accessibility-related questions or assistance, please
          contact ANM using the contact information available on our
          website.
        </p>
      </section>
    </main>
  );
}
