export const metadata = {
  title: "What is a creepypasta?",
  description: "Learn about the origins and evolution of creepypasta stories.",
};

export default function WhatIsPastaPage() {
  return (
    <section className="flex justify-center m-10">
      <article
        className="prose dark:prose-invert mx-auto max-w-3xl bg-white
                          border border-gray-200 rounded-xl shadow-lg p-8"
      >
        <h1>What is pasta?</h1>

        <p>
          <strong>Creepypasta</strong> (from “creepy” + “copypasta”) is a form
          of internet folklore consisting of short horror stories that are
          copied and pasted around the web. They are written to unnerve or scare
          the reader.
        </p>

        <p>
          Famous examples include <em>Slender Man</em>, <em> Ben Drowned</em>{" "}
          and <em>Smile Dog</em>. Most creepypasta circulate on forums,
          imageboards and Telegram channels before being archived on services
          like Telegraph.
        </p>
      </article>
    </section>
  );
}
