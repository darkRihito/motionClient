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
      await finishRead(3);
      updateModulesCompleted(3);
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
          <title>Reduced Clauses</title>
        </Head>
        <h1 className="text-4xl font-extrabold mb-6 text-center">
          Reduced Clauses
        </h1>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Introduction to Reduced Clauses
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Definition of Reduced Clauses and Their Importance in English
            Grammar
          </h3>
          <p className="text-justify leading-relaxed">
            Reduced Clauses are simplified versions of clauses that have been
            condensed either by removing words that are not grammatically
            necessary or by substituting entire phrases with simpler forms. This
            reduction process often involves omitting the subject and some form
            of the verb "be" or rearranging the clause into a participle or
            infinitive form. The primary function of reducing clauses is to make
            sentences clearer and more concise, which is particularly useful in
            academic and professional writing where clarity and brevity are
            prized.
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Importance in English Grammar
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Efficiency: Reduced clauses help streamline sentences, making them
              easier to read and understand.
            </li>
            <li>
              Focus: By eliminating unnecessary words, reduced clauses highlight
              the main points of a sentence more effectively.
            </li>
            <li>
              Fluidity: They contribute to the smoothness and sophistication of
              writing, which can enhance the overall quality of communication.
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Overview of the Types of Clauses That Can Be Reduced
          </h3>
          <p className="text-justify leading-relaxed">
            Reduced clauses typically fall into three main categories, each
            corresponding to the grammatical function they serve in the
            sentence:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <span className="font-semibold">Adjective Clauses:</span> These
              clauses describe or provide more information about a noun and can
              often be reduced to phrases, particularly when the adjective
              clause modifies the subject of a sentence.
            </li>
            <li>
              <span className="font-semibold">Adverbial Clauses:</span> These
              provide context such as time, reason, condition, or manner for the
              actions described in the main clause. Adverbial clauses can often
              be reduced to shorter adverbial phrases.
            </li>
            <li>
              <span className="font-semibold">Noun Clauses:</span> Though less
              commonly reduced than adjective or adverbial clauses, noun clauses
              can sometimes be condensed into shorter noun phrases or even
              single words, especially in informal contexts.
            </li>
          </ul>
          <p className="text-justify leading-relaxed">
            Each type of clause reduction has specific rules and methods, which
            not only help in refining sentence structure but also enhance the
            writer's or speaker's ability to convey messages effectively.
            Understanding how to properly reduce clauses without altering the
            intended meaning is a valuable skill in mastering English language
            proficiency.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Types of Reduced Clauses
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Adjective Clauses
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Definition and Reduction:</span>{" "}
            Adjective Clauses are relative clauses that describe a noun or
            pronoun in the main clause. They often start with relative pronouns
            like who, which, or that. These clauses can be reduced when the
            relative pronoun is the subject of the clause and the verb is a form
            of "be."
          </p>
          <p className="font-semibold mt-2">Examples and Guidelines:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Full Clause: "The man who is speaking on the phone is my uncle."
            </li>
            <li>
              Reduced Clause: "The man speaking on the phone is my uncle."
            </li>
            <li>
              Explanation: Here, "who is" is removed, reducing the clause
              without changing its meaning.
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Adverbial Clauses
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Definition and Reduction:</span>{" "}
            Adverbial Clauses provide information about the main verb in the
            sentence, such as time, reason, condition, or manner. They can be
            reduced to adverbial phrases if they start with conjunctions like
            "when," "because," "if," or "while."
          </p>
          <p className="font-semibold mt-2">Examples and Guidelines:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Full Clause: "While she was driving, she listened to music."
            </li>
            <li>Reduced Clause: "While driving, she listened to music."</li>
            <li>
              Explanation: The subject "she" and the auxiliary "was" are
              omitted, streamlining the sentence.
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Noun Clauses
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Definition and Reduction:</span>{" "}
            Noun Clauses serve as the subject, object, or complement in a
            sentence and often begin with "that," "what," "who," "whom," "how,"
            or "why." These clauses can sometimes be shortened to infinitive
            phrases or simpler noun phrases, especially in informal writing or
            speech.
          </p>
          <p className="font-semibold mt-2">Examples and Guidelines:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Full Clause: "What she wants is to find a new job."</li>
            <li>Reduced Clause: "She wants to find a new job."</li>
            <li>
              Explanation: The noun clause "What she wants" is replaced by the
              subject and verb "She wants," turning it into a more
              straightforward statement.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Reducing Adjective Clauses
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Rules for Reducing Adjective Clauses
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Identifying the Type of Clause:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Restrictive Clauses provide essential information about the
                  noun they modify and do not use commas.
                </li>
                <li>
                  Non-Restrictive Clauses add non-essential information about
                  the noun and are separated by commas.
                </li>
              </ul>
            </li>
            <li>
              Reduction Criteria:
              <ul className="list-disc list-inside ml-4">
                <li>The clause must contain a subject and a verb.</li>
                <li>
                  The verb in the adjective clause is often a form of "be" (is,
                  are, was, were).
                </li>
                <li>
                  When reducing, the subject of the adjective clause (usually a
                  relative pronoun like who, which, that) and the verb "be" are
                  removed if they directly follow each other.
                </li>
              </ul>
            </li>
            <li>
              Modifying Subjects vs. Objects:
              <ul className="list-disc list-inside ml-4">
                <li>
                  If the relative clause modifies the subject of the main
                  clause, ensure that the reduction does not create ambiguity or
                  change the meaning.
                </li>
                <li>
                  If the relative clause modifies the object, similar
                  considerations apply, but often there is slightly more
                  flexibility in restructuring the sentence.
                </li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Examples of Reducing Restrictive and Non-Restrictive Clauses
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Restrictive Clause Reductions:
              <ul className="list-disc list-inside ml-4">
                <li>Full Sentence: "The book that is on the table is mine."</li>
                <li>Reduced: "The book on the table is mine."</li>
                <li>
                  Explanation: "That is" can be removed without losing essential
                  information, and the noun 'book' is still clearly described.
                </li>
              </ul>
            </li>
            <li>
              Non-Restrictive Clause Reductions:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Full Sentence: "My brother, who is a doctor, lives in Canada."
                </li>
                <li>Reduced: "My brother, a doctor, lives in Canada."</li>
                <li>
                  Explanation: Here, "who is" is omitted, and the phrase "a
                  doctor" adequately provides the additional information in a
                  concise form.
                </li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Practical Application
          </h3>
          <p className="font-semibold">
            Exercise: Reduce the following sentences by simplifying the
            adjective clauses:
          </p>
          <ol className="list-decimal list-inside ml-4">
            <li>"The artist who is painting the mural is famous."</li>
            <li>
              "The car, which was bought last year, has already broken down."
            </li>
            <li>"Students who are studying medicine must be very diligent."</li>
          </ol>
          <p className="font-semibold mt-2">Answers:</p>
          <ol className="list-decimal list-inside ml-4">
            <li>"The artist painting the mural is famous."</li>
            <li>"The car, bought last year, has already broken down."</li>
            <li>"Students studying medicine must be very diligent."</li>
          </ol>
          <p className="text-justify leading-relaxed">
            These exercises show how reducing adjective clauses not only makes
            sentences more concise but also focuses the reader's attention on
            the main information without unnecessary clutter. Mastery of this
            technique is especially useful in academic and professional writing
            where clarity and brevity are valued.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Common Mistakes in Using Reduced Clauses
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Understanding how to properly reduce clauses is crucial for writing
            and speaking effectively in English. However, there are several
            common pitfalls that learners may encounter when trying to simplify
            their sentences. Here we'll explore these common mistakes and
            provide strategies for avoiding them.
          </h3>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            1. Incorrect Omission of Essential Information
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Problem Description:</span> When
            reducing clauses, it's crucial not to omit essential information
            that changes the meaning of the sentence or leaves it grammatically
            incomplete.
          </p>
          <p className="font-semibold mt-2">Example and Correction:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Incorrect: "The person responsible has left." (Ambiguous if taken
              out of context)
            </li>
            <li>Correct: "The person who is responsible has left."</li>
            <li>
              Explanation: Without context, "responsible" in the reduced clause
              might not clearly convey that it refers to a person being
              responsible for something specific. The full clause clarifies
              this.
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            2. Misplacing the Reduced Clause
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Problem Description:</span> The
            placement of reduced clauses can sometimes lead to ambiguity or a
            change in the intended meaning of the sentence.
          </p>
          <p className="font-semibold mt-2">Example and Correction:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Incorrect: "While walking to school, a dog startled her."</li>
            <li>
              Correct: "While she was walking to school, a dog startled her."
            </li>
            <li>
              Explanation: The original sentence could be misinterpreted as the
              dog walking to school. Clarifying who is doing the walking
              eliminates this confusion.
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            3. Overusing Reductions
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Problem Description:</span>{" "}
            Overusing clause reductions can make text choppy or too dense, which
            might confuse readers, especially in complex narratives or
            arguments.
          </p>
          <p className="font-semibold mt-2">Example and Correction:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Overused: "Given taken, advice ignored, the project failed."
            </li>
            <li>
              Improved: "Given that the advice was taken and then ignored, the
              project failed."
            </li>
            <li>
              Explanation: The original sentence is too condensed, making it
              difficult to follow. Expanding the clauses improves clarity.
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            4. Using Incorrect Forms After Reduction
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Problem Description:</span> Using
            the wrong verb form or misconstructing the sentence after reducing
            an adverbial or adjective clause can lead to grammatical errors.
          </p>
          <p className="font-semibold mt-2">Example and Correction:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Incorrect: "Driving the car, the scenery was beautiful."</li>
            <li>
              Correct: "Driving the car, she found the scenery beautiful."
            </li>
            <li>
              Explanation: The incorrect example suggests that the scenery is
              driving the car. Clarifying the subject who is performing the
              action resolves this issue.
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Strategies for Avoiding Mistakes
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Review the Essential Elements: Ensure that all critical
              information is retained when reducing clauses. Do not remove
              elements that are pivotal to the meaning or grammaticality of the
              sentence.
            </li>
            <li>
              Maintain Clear Antecedents: Make sure the reduced clause clearly
              refers back to the correct noun or pronoun to avoid ambiguity.
            </li>
            <li>
              Balance Between Brevity and Clarity: Use reductions judiciously.
              Ensure that your desire for conciseness does not compromise the
              clarity or flow of your writing.
            </li>
            <li>
              Practice and Feedback: Regular practice with feedback from
              proficient speakers or writers can help identify and correct
              tendencies to misuse reduced clauses. This can also aid in better
              understanding when and how to use reductions effectively.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Reducing Adverbial Clauses
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Methods for Reducing Clauses of Time, Reason, Condition, and Manner
          </h3>
          <h4 className="text-lg md:text-xl font-semibold mb-2">
            1. Time Clauses:
          </h4>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Full Clause:</span> "When she
            arrives, we will start dinner."
          </p>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Reduced Form:</span> "Arriving, we
            will start dinner."
          </p>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Method:</span> Time clauses often
            begin with conjunctions like "when," "after," "before," "as soon
            as," etc. Reduction involves using the present participle (-ing
            form) after dropping the subject and auxiliary verb if present.
          </p>
          <h4 className="text-lg md:text-xl font-semibold mb-2">
            2. Reason Clauses:
          </h4>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Full Clause:</span> "Because she was
            tired, she went to bed early."
          </p>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Reduced Form:</span> "Being tired,
            she went to bed early."
          </p>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Method:</span> Reason clauses often
            start with "because," "since," or "as." They can be reduced to a
            phrase beginning with a present participle or by using the word "due
            to" followed by a noun phrase if the clause refers to a noun.
          </p>
          <h4 className="text-lg md:text-xl font-semibold mb-2">
            3. Condition Clauses:
          </h4>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Full Clause:</span> "If it is
            raining, we will stay inside."
          </p>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Reduced Form:</span> "If raining, we
            will stay inside."
          </p>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Method:</span> Condition clauses can
            sometimes be reduced by removing the subject and 'be' verb, leaving
            the present participle. This is typically more common in informal
            contexts or spoken English.
          </p>
          <h4 className="text-lg md:text-xl font-semibold mb-2">
            4. Manner Clauses:
          </h4>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Full Clause:</span> "She did the
            assignment as she was instructed."
          </p>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Reduced Form:</span> "She did the
            assignment as instructed."
          </p>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Method:</span> Manner clauses often
            explain how something is done and can be reduced by removing the
            subject and auxiliary verb.
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Special Attention to Participle and Infinitive Forms Used in
            Reductions
          </h3>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Participle Forms:</span> Both
            present and past participles are extensively used to reduce
            adverbial clauses. Present participles (-ing form) denote an action
            concurrent with the main verb, while past participles often indicate
            a passive sense or a completed action.
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Example with Present Participle: "While waiting for the bus, she
              read a book." (Reduced from "While she was waiting for the
              bus...")
            </li>
            <li>
              Example with Past Participle: "Inspired by the speech, he decided
              to volunteer." (Implies he was inspired before deciding)
            </li>
          </ul>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Infinitive Forms:</span> Infinitives
            are used to show purpose or intention, often reducing clauses that
            might begin with "in order to" or "so as to."
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Full Clause: "She went to the library to study for her exams."
            </li>
            <li>
              Reduced Form: "She went to the library to study." (Simplifies the
              expression of purpose)
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Practice Application
          </h3>
          <p className="font-semibold">
            Exercise: Reduce the following adverbial clauses:
          </p>
          <ol className="list-decimal list-inside ml-4">
            <li>"After he finished his homework, he went to the gym."</li>
            <li>"As soon as the movie ended, they left the theater."</li>
            <li>
              "Because she needed to buy groceries, she stopped at the store."
            </li>
          </ol>
          <p className="font-semibold mt-2">Answers:</p>
          <ol className="list-decimal list-inside ml-4">
            <li>"After finishing his homework, he went to the gym."</li>
            <li>"Movie ended, they left the theater."</li>
            <li>"Needing to buy groceries, she stopped at the store."</li>
          </ol>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Reducing Noun Clauses
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Techniques for Simplifying Noun Clauses
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Transforming into Infinitives:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Noun clauses often can be reduced to infinitive phrases,
                  especially when they function as the subject or object of a
                  sentence.
                </li>
                <li>
                  Transformation Rule: Look for opportunities to replace clauses
                  starting with "that" or "what" with an infinitive,
                  particularly when expressing purpose or intention.
                </li>
              </ul>
            </li>
            <li>
              Using Participles:
              <ul className="list-disc list-inside ml-4">
                <li>
                  When a noun clause is used to describe a state or action, it
                  can sometimes be reduced to a participle phrase.
                </li>
                <li>
                  Transformation Rule: If the noun clause describes an ongoing
                  action related to the subject, consider reducing it to a
                  present participle phrase.
                </li>
              </ul>
            </li>
            <li>
              Substituting with Nouns or Adjectives:
              <ul className="list-disc list-inside ml-4">
                <li>
                  In some cases, a noun clause can be replaced with a simple
                  noun or adjective if it sufficiently conveys the intended
                  meaning.
                </li>
                <li>
                  Transformation Rule: Evaluate whether the key information in
                  the clause can be expressed concisely with a noun or
                  adjective.
                </li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Examples of Common Reductions in Spoken and Written English
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              From Noun Clause to Infinitive:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Full Sentence: "It is important that you be present at the
                  meeting."
                </li>
                <li>
                  Reduced: "It is important to be present at the meeting."
                </li>
                <li>
                  Explanation: The noun clause "that you be present at the
                  meeting" is effectively reduced to the infinitive phrase "to
                  be present at the meeting."
                </li>
              </ul>
            </li>
            <li>
              From Noun Clause to Participle:
              <ul className="list-disc list-inside ml-4">
                <li>Full Sentence: "I appreciate that you are helping us."</li>
                <li>Reduced: "I appreciate your helping us."</li>
                <li>
                  Explanation: The noun clause "that you are helping us" is
                  reduced to the gerund "your helping us," which functions as a
                  noun.
                </li>
              </ul>
            </li>
            <li>
              From Noun Clause to Noun/Adjective:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Full Sentence: "The fact that he is not coming is
                  disappointing."
                </li>
                <li>Reduced: "His absence is disappointing."</li>
                <li>
                  Explanation: The noun clause "that he is not coming" is
                  replaced with the noun "his absence," simplifying the sentence
                  while retaining its original meaning.
                </li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Practice Application
          </h3>
          <p className="font-semibold">
            Exercise: Simplify the following sentences by reducing the noun
            clauses:
          </p>
          <ol className="list-decimal list-inside ml-4">
            <li>"I didn't understand what he was saying."</li>
            <li>"She disclosed that she had seen the movie."</li>
            <li>"Do you think that it will rain today?"</li>
          </ol>
          <p className="font-semibold mt-2">Answers:</p>
          <ol className="list-decimal list-inside ml-4">
            <li>"I didn't understand his words."</li>
            <li>"She disclosed her having seen the movie."</li>
            <li>"Do you think it will rain today?"</li>
          </ol>
        </section>

        {userData ? (
          <>
            {userData?.modules_completed[3] ? (
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
