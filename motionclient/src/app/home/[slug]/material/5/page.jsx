"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useBackground } from "@/provider/backgroundprovider/backgroundprovider";
import Head from "next/head";

import { finishRead } from "@/actions/finishread";
import { useUserStore } from "@/store/useUserStore";
import toast from "react-hot-toast";
import { IoArrowBack } from "react-icons/io5";
import Loader from "@/components/loader/loader";

export default function page() {
  const { setType } = useBackground();

  const { userData } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);
  const updateModulesCompleted = useUserStore(
    (state) => state.updateModulesCompleted
  );

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await finishRead(4);
      updateModulesCompleted(4);
      toast.success("Module Finished!");
    } catch (error) {
      toast.error("An error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setType("bg-bkg0");
  }, []);
  return (
    <div className="">
      {isLoading && <Loader />}
      <div className="max-w-screen-md mx-auto mt-24 mb-16 bg-white rounded-lg p-4">
        {/* Content */}
        <Head>
          <title>Connectors</title>
        </Head>
        <h1 className="text-4xl font-extrabold mb-6 text-center">Connectors</h1>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Introduction to Connectors
          </h2>
          <p className="text-justify leading-relaxed">
            Connectors are crucial linguistic tools in English that help to join
            words, phrases, clauses, or sentences to make the text more coherent
            and logically connected. Understanding how to use these connectors
            correctly is essential for effective communication, especially in
            academic and professional writing.
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Definition of Connectors and Their Importance in English Language
          </h3>
          <p className="text-justify leading-relaxed">
            Connectors, also known as conjunctions or linking words, serve the
            primary function of knitting sentences together to construct a clear
            and coherent narrative. They help maintain the flow of ideas,
            indicate relationships between statements (such as addition,
            contrast, cause, and effect), and improve the overall readability of
            the text.
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Clarity and Coherence: Connectors help clarify relationships
              between ideas, making complex thoughts easier to understand.
            </li>
            <li>
              Flow of Information: They guide the reader through the text,
              linking thoughts and ensuring a logical flow from one idea to
              another.
            </li>
            <li>
              Variety in Expression: Effective use of connectors adds variety to
              writing styles, moving beyond simple, repetitive sentence
              structures.
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Overview of Different Types of Connectors
          </h3>
          <p className="text-justify leading-relaxed">
            Connectors can be categorized into three main types, each serving a
            different function in sentence construction:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <span className="font-semibold">Coordinating Connectors:</span>{" "}
              These connectors link words, phrases, or clauses of equal
              grammatical rank to form a single, coherent thought. They are
              often remembered by the acronym FANBOYS (For, And, Nor, But, Or,
              Yet, So).
              <ul className="list-disc list-inside ml-4">
                <li>
                  Example: "She wanted to go for a walk, but it started
                  raining."
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Subordinating Connectors:</span>{" "}
              Subordinating connectors link a dependent clause to an independent
              clause, highlighting the relationship of dependency between the
              two. This type helps to expand on the main idea by adding
              conditions, reasons, contrasts, etc.
              <ul className="list-disc list-inside ml-4">
                <li>
                  Example: "Although it was raining, she went for a walk."
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">
                Transitional Connectors (or Transitional Phrases):
              </span>{" "}
              Transitional connectors are used to provide a smooth transition
              between new and previous thoughts. They can indicate various
              relationships like contrast (however, nevertheless), sequence
              (first, next), or result (therefore, as a result).
              <ul className="list-disc list-inside ml-4">
                <li>
                  Example: "It was raining heavily; therefore, she decided to
                  postpone her walk."
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Coordinating Connectors
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Definition and Examples
          </h3>
          <p className="text-justify leading-relaxed">
            Definition: Coordinating connectors are words that connect elements
            of equal grammatical rank and importance within a sentence. These
            elements could be individual words, phrases, or independent clauses.
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Example: "She bought apples and oranges."</li>
            <li>Example: "He can sing or dance."</li>
            <li>Example: "She tried to call you, but you didn't answer."</li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Usage Rules for Linking Equal Parts of a Sentence
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Linking Words: Coordinating connectors can join single words
              together.
              <ul className="list-disc list-inside ml-4">
                <li>Example: "He bought bread, milk, and eggs."</li>
              </ul>
            </li>
            <li>
              Linking Phrases: They can also connect phrases that act as a
              single unit in terms of grammar.
              <ul className="list-disc list-inside ml-4">
                <li>
                  Example: "She likes to read in the morning and to jog in the
                  evening."
                </li>
              </ul>
            </li>
            <li>
              Linking Independent Clauses: Perhaps most importantly,
              coordinating connectors are used to join independent clauses,
              which are complete sentences on their own.
              <ul className="list-disc list-inside ml-4">
                <li>
                  Example: "He tried to open the door, but it was locked."
                </li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Common Coordinating Connectors: FANBOYS
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              <span className="font-semibold">For:</span> Implies a reason,
              similar to "because".
              <ul className="list-disc list-inside ml-4">
                <li>Example: "He was sad, for he had lost his keys."</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">And:</span> Adds one element to
              another in a non-contrasting manner.
              <ul className="list-disc list-inside ml-4">
                <li>Example: "She plays the guitar and sings."</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Nor:</span> Used to present an
              additional negative element when "neither" introduces the first
              negative element.
              <ul className="list-disc list-inside ml-4">
                <li>Example: "She neither drinks nor smokes."</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">But:</span> Introduces a contrast
              or exception.
              <ul className="list-disc list-inside ml-4">
                <li>Example: "He is old, but he is active."</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Or:</span> Presents an alternative
              or choice.
              <ul className="list-disc list-inside ml-4">
                <li>Example: "Do you want coffee or tea?"</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Yet:</span> Similar to "but", and
              introduces a contrast or exception.
              <ul className="list-disc list-inside ml-4">
                <li>Example: "He is old, yet he jogs every morning."</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">So:</span> Indicates effect,
              result, or consequence.
              <ul className="list-disc list-inside ml-4">
                <li>Example: "It was raining, so we canceled the picnic."</li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Tips for Using Coordinating Connectors
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Always place a comma before the coordinating connector when
              linking two independent clauses.
            </li>
            <li>
              Be cautious not to create comma splices when using coordinating
              connectors improperly; ensure that the clauses being connected can
              stand alone as complete sentences.
            </li>
            <li>
              Avoid overusing coordinating connectors in a single sentence as it
              can lead to run-on sentences, which are grammatically cumbersome
              and may confuse the reader.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Subordinating Connectors
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Definition and Examples
          </h3>
          <p className="text-justify leading-relaxed">
            Definition: Subordinating connectors are words or phrases that
            introduce a dependent clause and indicate the relationship between
            this clause and the main clause of the sentence. These relationships
            can denote time, cause and effect, contrast, condition, and more.
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Because: "I stayed home because it was raining."</li>
            <li>Although: "Although it was raining, I went for a walk."</li>
            <li>Since: "Since you asked, I will tell the truth."</li>
            <li>Unless: "I will not go unless he apologizes."</li>
            <li>Whereas: "He likes tea, whereas I prefer coffee."</li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Usage Rules for Linking Dependent Clauses to Independent Clauses
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Positioning: Subordinating connectors can appear at the beginning
              of a sentence when introducing the dependent clause first,
              followed by the independent clause, or in the middle when the
              independent clause comes first.
              <ul className="list-disc list-inside ml-4">
                <li>Beginning: "Because it was raining, we stayed indoors."</li>
                <li>Middle: "We stayed indoors because it was raining."</li>
              </ul>
            </li>
            <li>
              Punctuation:
              <ul className="list-disc list-inside ml-4">
                <li>
                  When the dependent clause comes first and is introduced by a
                  subordinating connector, it is usually followed by a comma.
                </li>
                <li>
                  When the dependent clause follows the main clause, no comma is
                  typically used unless it is necessary for clarity or emphasis.
                </li>
              </ul>
            </li>
            <li>
              Clarifying the Relationship:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Ensure that the subordinating connector used clearly defines
                  the intended relationship between the clauses (cause, time,
                  condition, etc.).
                </li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Examples of Common Subordinating Connectors
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              <span className="font-semibold">Although (contrast):</span> Shows
              contradiction or contrast.
              <ul className="list-disc list-inside ml-4">
                <li>
                  Example: "Although I was tired, I decided to go running."
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Because (cause and effect):</span>{" "}
              Indicates the reason for the action in the main clause.
              <ul className="list-disc list-inside ml-4">
                <li>
                  Example: "I went to bed early because I had a meeting in the
                  morning."
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Since (time or reason):</span> Can
              be used to denote time similar to "from the time that" or a cause
              like "because."
              <ul className="list-disc list-inside ml-4">
                <li>
                  Example (time): "Since the party, we haven't spoken much."
                </li>
                <li>
                  Example (reason): "Since you're here, let's start the
                  meeting."
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Unless (condition):</span>{" "}
              Indicates a condition that is an exception.
              <ul className="list-disc list-inside ml-4">
                <li>
                  Example: "Unless the weather improves, the match will be
                  postponed."
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Whereas (contrast):</span>{" "}
              Compares two distinct cases or situations.
              <ul className="list-disc list-inside ml-4">
                <li>
                  Example: "I like to hike, whereas my brother prefers to swim."
                </li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Further Tips for Using Subordinating Connectors
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Contextual Fit: Choose a subordinating connector that fits the
              logical relationship you intend to express. Misusing connectors
              can lead to unclear or incorrect relationships being inferred.
            </li>
            <li>
              Variety: Use a variety of subordinating connectors to enrich your
              writing and avoid repetitive sentence structures.
            </li>
            <li>
              Complexity and Clarity: While subordinating connectors help in
              creating complex sentences, ensure that the sentence remains clear
              and easy to understand. Avoid overly complicated sentence
              constructions that might confuse the reader.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Transitional Connectors
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Definition and Examples
          </h3>
          <p className="text-justify leading-relaxed">
            Definition: Transitional connectors are words or phrases used to
            link different parts of text by showing relationships between ideas,
            such as contrast, addition, or cause and effect. They serve as
            bridges, ensuring that the writing is more readable and the
            progression of thoughts is logically structured.
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Contrast: "however," "on the other hand"</li>
            <li>Addition: "furthermore," "moreover"</li>
            <li>Cause and Effect: "therefore," "consequently"</li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            How Transitional Connectors Provide Smooth Transitions Between Ideas
          </h3>
          <p className="text-justify leading-relaxed">
            Transitional connectors improve the flow of writing by linking
            sentences and paragraphs clearly and efficiently. They guide readers
            through a text, helping them understand how new information builds
            on or contrasts with what was stated previously.
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <span className="font-semibold">Guidance:</span> They guide the
              reader’s understanding, directing how to connect or differentiate
              between pieces of information.
            </li>
            <li>
              <span className="font-semibold">Structure:</span> They provide a
              structure to the narrative or argument, marking steps in reasoning
              or stages in description.
            </li>
            <li>
              <span className="font-semibold">Clarity:</span> By explicitly
              showing the relationship between sentences and paragraphs, they
              prevent misinterpretation and confusion.
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Categories and Examples of Transitional Connectors
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              <span className="font-semibold">Contrast</span>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Used to show opposition or differing points between two ideas.
                </li>
                <li>
                  However: "She wanted to purchase the dress; however, it was
                  too expensive."
                </li>
                <li>
                  On the other hand: "He prefers to travel by air; on the other
                  hand, his wife likes to travel by train."
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Addition</span>
              <ul className="list-disc list-inside ml-4">
                <li>
                  These connectors are used to add information that agrees with
                  or expands upon the preceding text.
                </li>
                <li>
                  Furthermore: "The study is critical to understanding the
                  changes. Furthermore, it sets a precedent for future
                  research."
                </li>
                <li>
                  Moreover: "He is highly qualified for the position. Moreover,
                  he has extensive experience in this field."
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Cause and Effect</span>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Indicate a relationship where one action or event causes
                  another.
                </li>
                <li>
                  Therefore: "It was raining heavily; therefore, the event was
                  postponed."
                </li>
                <li>
                  Consequently: "He didn’t study for the exam; consequently, he
                  failed."
                </li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Using Transitional Connectors Effectively
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Positioning: Place transitional connectors at the beginning of a
              sentence or clause to introduce a new idea in relation to the
              previous sentence or at the end of a sentence to hint at what
              comes next.
            </li>
            <li>
              Punctuation: Typically, a semicolon or a period precedes the
              connector when it introduces a new sentence, and a comma follows
              it.
            </li>
            <li>
              Balance and Variety: Use a variety of transitional words and
              phrases to avoid repetition and maintain reader interest. However,
              use them sparingly to avoid overloading your text with too many
              connectors, which can disrupt readability.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Common Mistakes with Connectors
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Identification of Frequent Errors in Using Connectors
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Misusing Connectors Due to Similarity in Meaning:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Many connectors have similar meanings but are used in
                  different contexts. Misusing them can lead to subtle but
                  important errors in meaning or formality.
                </li>
                <li>
                  Example Error: Using "but" instead of "however" in a formal
                  written context. "But" is more informal compared to the more
                  formal and fitting "however" in academic or professional
                  writing.
                </li>
              </ul>
            </li>
            <li>
              Comma Splices:
              <ul className="list-disc list-inside ml-4">
                <li>
                  A comma splice occurs when two independent clauses are
                  incorrectly joined only with a comma, without an appropriate
                  coordinating connector.
                </li>
                <li>
                  Example Error: "She loves tea, she doesn't like coffee." This
                  should have a connector or a semicolon.
                </li>
              </ul>
            </li>
            <li>
              Overusing Connectors:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Overreliance on connectors can make writing seem cluttered and
                  can disrupt the flow of sentences.
                </li>
                <li>
                  Example Error: "Therefore, moreover, consequently, thus, he
                  decided not to go."
                </li>
              </ul>
            </li>
            <li>
              Using the Wrong Form of Connectors:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Choosing the wrong form of a connector, especially with
                  subordinating connectors, can confuse the intended meaning or
                  grammatical structure.
                </li>
                <li>
                  Example Error: "Despite of the rain, we went out." The correct
                  form is "Despite the rain, we went out."
                </li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Correction Strategies to Ensure Proper Usage and Placement
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Understanding Context and Meaning:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Study the meanings and usage contexts of connectors. Practice
                  distinguishing between connectors that appear similar,
                  focusing on subtle differences in usage and context.
                </li>
                <li>
                  Correction Strategy: Use resources like grammar books or
                  reputable online content to learn the correct use of each
                  connector.
                </li>
              </ul>
            </li>
            <li>
              Correcting Comma Splices:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Learn to identify comma splices in your writing. Correct them
                  by adding a coordinating connector (with a comma), changing
                  the comma to a semicolon, or making the clauses into separate
                  sentences.
                </li>
                <li>
                  Correction Strategy: "She loves tea, she doesn't like coffee."
                  Corrected: "She loves tea, but she doesn't like coffee." Or:
                  "She loves tea; she doesn't like coffee."
                </li>
              </ul>
            </li>
            <li>
              Avoiding Overuse of Connectors:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Be judicious in your use of connectors. Ensure that each one
                  adds meaningful connection or transition rather than just
                  filling space.
                </li>
                <li>
                  Correction Strategy: Before using a connector, consider if it
                  adds value to the sentence. If it only repeats what another
                  connector has already done, omit it.
                </li>
              </ul>
            </li>
            <li>
              Practicing with Feedback:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Regular practice with feedback from proficient speakers or
                  writers can help identify and correct tendencies to misuse
                  connectors. Writing exercises, peer reviews, and professional
                  editing are valuable.
                </li>
                <li>
                  Correction Strategy: Engage in writing exercises focused on
                  connectors and seek feedback on your usage and placements.
                </li>
              </ul>
            </li>
          </ul>
          <p className="text-justify leading-relaxed">
            By addressing these common mistakes and employing strategic
            practices, you can significantly improve your use of connectors,
            enhancing both the clarity and effectiveness of your communication.
            Mastery of connectors is not only beneficial for writing but also
            for crafting impactful speeches and presentations. If you need more
            detailed practice or have specific questions, feel free to ask!
          </p>
        </section>
        {userData ? (
          <>
            {userData?.modules_completed[4] ? (
              <>
                <div className="flex w-fit items-center gap-2 py-2.5 ps-3 pe-4 cursor-pointer bg-gray-400 text-white rounded-lg mt-3">
                  <IoArrowBack className="text-xl" />
                  Back to Module Page
                </div>
              </>
            ) : (
              <>
                <div
                  onClick={handleClick}
                  className="flex w-fit items-center gap-2 py-2.5 ps-3 pe-4 cursor-pointer bg-green-400 text-white rounded-lg mt-3"
                >
                  <div className="relative sm:w-8 sm:h-8 h-6 w-6 flex-none">
                    <Image
                      alt=""
                      fill
                      sizes="100%"
                      src="/assets/icon/finish-read.png"
                    />
                  </div>
                  Finish Read!
                </div>
              </>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
}
