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
      await finishRead(9);
      updateModulesCompleted(9);
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
          <title>Conditional Sentences</title>
        </Head>
        <h1 className="text-4xl font-extrabold mb-6 text-center">
          Conditional Sentences
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Introduction to Conditional Sentences
          </h2>
          <p className="text-justify leading-relaxed">
            Conditional sentences are fundamental to English communication,
            allowing speakers and writers to express possibilities, hypothetical
            situations, and their potential outcomes. Understanding these
            structures is key to mastering complex language functions and
            enhancing expressive capabilities.
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Definition of Conditional Sentences
          </h3>
          <p className="text-justify leading-relaxed">
            Conditional Sentences: These are sentences that describe a condition
            and the result that follows if that condition is met. They typically
            consist of two clauses: the if-clause (also known as the conditional
            clause) and the main clause (also known as the result clause).
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Importance in English Communication
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Expressing Possibilities and Hypotheticals: They allow individuals
              to discuss potential scenarios and their possible repercussions or
              outcomes, which is crucial in planning, reasoning, and
              negotiating.
            </li>
            <li>
              Forming Plans and Making Predictions: Conditionals are used to
              form plans based on certain conditions and to predict future
              events.
            </li>
            <li>
              Giving Advice and Making Suggestions: They are often used to give
              advice or suggest actions based on specific situations.
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Overview of the Basic Structure of Conditional Sentences
          </h3>
          <p className="text-justify leading-relaxed">
            Conditional sentences are generally categorized based on the
            likelihood of the condition being fulfilled. Here’s a brief overview
            of their basic structures:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Zero Conditional:</strong> Used for stating general truths
              or laws of nature where the outcome is always true if the
              condition is met. Structure: If + present simple, present simple.
              Example: "If you heat ice, it melts."
            </li>
            <li>
              <strong>First Conditional:</strong> Used for real and possible
              situations in the future, often more immediate scenarios with
              likely outcomes. Structure: If + present simple, will + base form
              of the verb. Example: "If it rains tomorrow, we will cancel the
              picnic."
            </li>
            <li>
              <strong>Second Conditional:</strong> Used for hypothetical or
              unlikely situations in the present or future. Structure: If + past
              simple, would + base form of the verb. Example: "If I won the
              lottery, I would travel the world."
            </li>
            <li>
              <strong>Third Conditional:</strong> Used to talk about past
              situations that did not happen (hypothetical situations in the
              past). Structure: If + past perfect, would have + past participle.
              Example: "If you had told me about the problem, I would have
              helped."
            </li>
          </ul>
          <p className="text-justify leading-relaxed">
            Each type of conditional serves different communicative functions
            and choosing the correct form depends on the speaker’s intent and
            the context of the communication. Mastery of these structures
            enhances not only the flexibility of language use but also the
            precision and effectiveness of expressing nuanced thoughts and
            conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Types of Conditional Sentences
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Explanation of the Four Main Types of Conditional Sentences
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Zero Conditional:</strong> Used to express general truths
              or scientific facts—situations where the outcome is always the
              same. Structure: If + present simple, present simple. Example: "If
              you mix blue and yellow, you get green."
            </li>
            <li>
              <strong>First Conditional:</strong> Used for real and possible
              situations in the future—scenarios that are likely to happen under
              certain conditions. Structure: If + present simple, will + base
              form of the verb. Example: "If it rains tomorrow, we will stay
              indoors."
            </li>
            <li>
              <strong>Second Conditional:</strong> Used for hypothetical
              situations that are unlikely to happen in the present or future.
              Structure: If + past simple, would + base form of the verb.
              Example: "If I were you, I would apologize."
            </li>
            <li>
              <strong>Third Conditional:</strong> Used to talk about past
              situations that did not happen and their possible outcomes in a
              hypothetical world. Structure: If + past perfect, would have +
              past participle. Example: "If I had known you were sick, I would
              have visited you."
            </li>
          </ul>
          <p className="text-justify leading-relaxed">
            Each type of conditional sentence serves a distinct purpose and is
            chosen based on the likelihood of the condition occurring and the
            time frame (past, present, future) of the action.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Zero Conditional
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Explanation of Situations Where the Zero Conditional is Used
          </h3>
          <p className="text-justify leading-relaxed">
            The zero conditional is a crucial grammatical structure in English
            used to express general truths—statements that are universally true
            and factual conditions, often related to natural laws or inherent
            properties.
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>General Truths and Scientific Facts:</strong> The zero
              conditional is primarily used to discuss known facts about the
              world, natural laws, or automatic outcomes. These are situations
              where the result always follows the condition if it is met,
              without exceptions.
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Structure
          </h3>
          <p className="text-justify leading-relaxed">
            The zero conditional uses the present simple tense in both the
            if-clause (condition) and the main clause (result).
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Structure: If + present simple, present simple.</li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Examples
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Natural Law:</strong> "If you heat ice, it melts."
            </li>
            <li>
              <strong>General Truth:</strong> "If you don’t water plants, they
              die."
            </li>
            <li>
              <strong>Inherent Property:</strong> "If iron is exposed to
              moisture and oxygen, it rusts."
            </li>
          </ul>
          <p className="text-justify leading-relaxed">
            The zero conditional is not just a grammatical form but a way of
            structuring knowledge about the world in a logical and predictable
            manner. It helps in communicating clear, factual information, where
            the certainty of the condition and result is guaranteed. This makes
            it invaluable for educational, scientific, and factual discourse.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            First Conditional
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Usage for Real and Possible Situations in the Future
          </h3>
          <p className="text-justify leading-relaxed">
            The first conditional is extensively used in English to discuss real
            and possible future events. It helps express conditions that are
            likely or possible to occur and their potential outcomes.
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Real and Possible Events:</strong> The first conditional
              is typically used when talking about future events that are real
              possibilities. These situations are not guaranteed, but there is a
              reasonable likelihood they could happen based on the condition
              stated.
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Structure
          </h3>
          <p className="text-justify leading-relaxed">
            Basic Structure: If-Clause: Present Simple Tense Main Clause: Will +
            Base Form of the Verb Example: "If it rains tomorrow, we will cancel
            the trip."
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Signal Words
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>Common Signal Words for First Conditional:</li>
            <li>If: Indicates the condition.</li>
            <li>
              Unless: Can also be used to indicate a condition by stating it
              negatively.
            </li>
            <li>
              When: Sometimes used in place of 'if' to suggest that something is
              expected to happen.
            </li>
            <li>
              As long as: Indicates that the action in the main clause will
              happen only if the condition in the 'if' clause is met.
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Examples and Explanation
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Standard Example:</strong> "If you study hard, you will
              pass the exam."
            </li>
            <li>
              <strong>Using 'Unless':</strong> "Unless you hurry, you will miss
              the bus."
            </li>
            <li>
              <strong>Using 'When':</strong> "When you finish your homework, you
              will be able to play video games."
            </li>
            <li>
              <strong>Using 'As long as':</strong> "You can go out with your
              friends as long as you are back by ten."
            </li>
          </ul>
          <p className="text-justify leading-relaxed">
            First conditional sentences are crucial in daily communication,
            especially when making plans or decisions that depend on certain
            conditions. They are often used to give advice or warnings,
            influencing behavior by presenting possible future outcomes based on
            current choices or conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Second Conditional
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Usage for Unreal or Hypothetical Situations
          </h3>
          <p className="text-justify leading-relaxed">
            The second conditional is used extensively in English to discuss
            hypothetical situations and their potential outcomes, particularly
            those that are unlikely or unreal in the present or future. It's a
            powerful tool for imagining scenarios and expressing wishes or
            speculative ideas.
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Unreal or Hypothetical Scenarios:</strong> The second
              conditional is ideal for discussing what would happen under
              certain imagined circumstances. These conditions are often
              contrary to known facts or highly improbable.
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Structure
          </h3>
          <p className="text-justify leading-relaxed">
            Basic Structure: If-Clause: Past Simple Tense Main Clause: Would +
            Base Form of the Verb Example: "If I won the lottery, I would travel
            the world."
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Signal Words
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>Common Signal Words for Second Conditional:</li>
            <li>If: Indicates the hypothetical condition.</li>
            <li>
              Would: Used in the main clause to express the hypothetical
              outcome.
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Examples and Explanation
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Standard Example:</strong> "If I were you, I would
              apologize."
            </li>
            <li>
              <strong>Imaginary Situations:</strong> "If I had a spaceship, I
              would visit Mars."
            </li>
            <li>
              <strong>Advice and Suggestions:</strong> "If I were in your place,
              I would take the job."
            </li>
            <li>
              <strong>Using 'Were' for All Subjects:</strong> "If he were more
              attentive, he would do better in school."
            </li>
          </ul>
          <p className="text-justify leading-relaxed">
            The second conditional allows speakers to explore different
            possibilities and outcomes in decision-making scenarios, providing a
            basis for more thoughtful consideration. It is commonly used to
            express desires or wishes about things that are unlikely to happen
            but are desirable. It also offers a gentle way to give advice or
            express opinions about sensitive topics by framing them as
            hypotheticals.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Third Conditional
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Usage for Unreal Situations in the Past
          </h3>
          <p className="text-justify leading-relaxed">
            The third conditional is used in English to discuss hypothetical
            situations that did not happen in the past and their possible
            consequences. It is an invaluable tool for expressing regret,
            contemplating how different actions might have led to different
            outcomes, and analyzing events after they have occurred.
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Unreal or Hypothetical Scenarios:</strong> The third
              conditional is typically employed to talk about past events that
              did not happen and to speculate about what the result would have
              been if they had occurred. It’s often used in expressions of
              regret or in retrospective reflection on missed opportunities or
              mistakes.
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Structure
          </h3>
          <p className="text-justify leading-relaxed">
            Basic Structure: If-Clause: Past Perfect Tense Main Clause: Would
            have + Past Participle Example: "If I had studied harder, I would
            have passed the exam."
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Signal Words
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>Common Signal Words for Third Conditional:</li>
            <li>If: Indicates the condition that was not met.</li>
            <li>
              Would have: Used in the main clause to express the hypothetical
              outcome that did not occur.
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Examples and Explanation
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Standard Example:</strong> "If we had left earlier, we
              would have avoided the traffic."
            </li>
            <li>
              <strong>Expressions of Regret:</strong> "If I had known you were
              coming, I would have baked a cake."
            </li>
            <li>
              <strong>Analyzing Past Decisions:</strong> "If you had taken the
              job, you would have been happier now."
            </li>
            <li>
              <strong>Complex Situations:</strong> "If they had realized the
              importance of the meeting, they would have prepared more
              thoroughly."
            </li>
          </ul>
          <p className="text-justify leading-relaxed">
            The third conditional is a sophisticated structure that provides a
            way to discuss and learn from the past, despite its focus on
            unrealized possibilities. It enriches narrative and analytical
            discussions, offering insights into alternative outcomes and
            encouraging thoughtful consideration of past actions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Mixed Conditionals
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Explanation of Mixed Conditionals
          </h3>
          <p className="text-justify leading-relaxed">
            Mixed conditionals are a sophisticated aspect of English grammar,
            allowing for the expression of conditions and results that span
            different times—typically combining elements from the second and
            third conditionals. They are crucial for discussing outcomes of past
            decisions impacting the present, or present realities affecting
            hypothetical past actions.
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Mixed Conditionals Usage:</strong> These conditionals are
              used to discuss situations where the time of the condition and the
              time of the result do not match. This allows for a nuanced
              exploration of cause and effect across different time frames.
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Structure
          </h3>
          <p className="text-justify leading-relaxed">
            Common Structures of Mixed Conditionals:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Past Condition with Present Result:</strong> Structure: If
              + past perfect, would + base form of the verb. Example: "If you
              had studied law, you would be a lawyer now."
            </li>
            <li>
              <strong>Present Condition with Past Result:</strong> Structure: If
              + past simple, would have + past participle. Example: "If I were
              you, I would have taken the offer."
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Examples and Explanation
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>
                Standard Mixed Conditional (Past Condition, Present Result):
              </strong>{" "}
              "If I had learned Spanish as a child, I would be fluent now."
            </li>
            <li>
              <strong>
                Less Common Mixed Conditional (Present Condition, Past Result):
              </strong>{" "}
              "If John were more attentive, he would have noticed the error in
              the report yesterday."
            </li>
          </ul>
          <p className="text-justify leading-relaxed">
            Mixed conditionals are particularly useful in real-life scenarios
            where decisions or actions have long-term consequences that stretch
            over different times. They often appear in conversations reflecting
            on life choices, expressing regrets, or contemplating what could
            have been done differently. In educational settings, mixed
            conditionals can help illustrate the consequences of actions or
            decisions, serving as powerful tools for imparting lessons or
            advice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Common Mistakes with Conditional Sentences
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Identification of Frequent Errors in Forming and Using Conditional
            Sentences
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Incorrect Verb Tense:</strong> One of the most frequent
              errors is using the wrong verb tense in the if-clause or the main
              clause of conditional sentences. Example Error: "If she will ask
              me, I would help her." Correction: "If she asks me, I will help
              her."
            </li>
            <li>
              <strong>Mixing Conditional Types Improperly:</strong> Incorrectly
              combining the elements of different types of conditionals can lead
              to sentences that are grammatically inconsistent or illogical.
              Example Error: "If I would have known, I will go to meet him."
              Correction: "If I had known, I would have gone to meet him."
            </li>
            <li>
              <strong>
                Using Incorrect Conditional Form for the Meaning Intended:
              </strong>{" "}
              Choosing the wrong type of conditional for the situation being
              described can alter the intended meaning. Example Error: "If I
              knew her number, I call her." Correction: "If I knew her number, I
              would call her."
            </li>
            <li>
              <strong>Omitting Parts of the Conditional:</strong> Sometimes,
              either the if-clause or the main clause may be incorrectly omitted
              or incomplete. Example Error: "If it rains tomorrow." (Incomplete)
              Correction: "If it rains tomorrow, we will cancel the picnic."
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Tips and Strategies to Correct These Mistakes
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Review and Understand Conditional Structures:</strong>{" "}
              Regularly review the structures of the zero, first, second, and
              third conditionals. Ensure understanding of when each is used and
              the correct verb forms for each part. Strategy: Create a cheat
              sheet with the structures and examples of each type of conditional
              sentence.
            </li>
            <li>
              <strong>Practice with Focused Exercises:</strong> Engage in
              exercises specifically designed to practice forming conditional
              sentences. This can help solidify understanding and reduce errors.
              Strategy: Use language learning apps or textbooks that provide
              exercises on conditional sentences, or write your own sentences
              and have them checked by a tutor or in language forums.
            </li>
            <li>
              <strong>Use Model Sentences:</strong> When learning or teaching
              new grammatical structures, use model sentences to demonstrate
              correct usage before creating new examples. Strategy: Collect
              examples of conditional sentences from trusted sources like
              well-edited books or academic papers to use as references.
            </li>
            <li>
              <strong>Peer Review and Feedback:</strong> Getting feedback from
              more experienced speakers or writers can help identify and correct
              mistakes. Strategy: Participate in study groups or online forums
              where you can post sentences and receive feedback.
            </li>
            <li>
              <strong>Proofreading and Editing:</strong> After writing, go back
              and specifically check conditional sentences to ensure they are
              formed correctly and make sense within the context. Strategy: Use
              grammar checking tools as an initial check, followed by a detailed
              manual review focusing on conditional sentences.
            </li>
          </ul>
        </section>
        {userData ? (
          <>
            {userData?.modules_completed[9] ? (
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
