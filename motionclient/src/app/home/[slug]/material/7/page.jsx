"use client";
import React, { useState, useEffect } from "react";
import { useRouter, redirect } from "next/navigation";
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
  const router = useRouter();

  const { userData } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);
  const updateModulesCompleted = useUserStore(
    (state) => state.updateModulesCompleted
  );

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await finishRead(8);
      updateModulesCompleted(8);
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
          <title>Comparative and Superlative Forms</title>
        </Head>
        <h1 className="text-4xl font-extrabold mb-6 text-center">
          Comparative and Superlative Forms
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Introduction to Comparative and Superlative Forms
          </h2>
          <p className="text-justify leading-relaxed">
            Comparative and superlative forms are essential components of
            English grammar that allow speakers and writers to express
            differences in degree among items, people, actions, or qualities.
            Understanding these forms is crucial for clear and effective
            communication, especially in descriptions and comparisons.
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Definition of Comparative and Superlative Forms
          </h3>
          <p className="text-justify leading-relaxed">
            <strong>Comparative Form:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Comparatives are used to compare two things or people. They
              indicate a higher or lower degree of a quality between two items.
            </li>
            <li>
              Structure: Adjectives or adverbs are often modified by adding
              "-er" or using "more" before the word, depending on the number of
              syllables and the word's ending.
            </li>
            <li>
              Example: "taller" from "tall," or "more beautiful" from
              "beautiful."
            </li>
          </ul>
          <p className="text-justify leading-relaxed">
            <strong>Superlative Form:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Superlatives are used to describe the highest or lowest degree of
              a quality among three or more items.
            </li>
            <li>
              Structure: Adjectives or adverbs are modified by adding "-est" or
              using "most" before the word.
            </li>
            <li>
              Example: "tallest" from "tall," or "most beautiful" from
              "beautiful."
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Explanation of Their Roles in English Grammar for Describing
            Differences and Extremes
          </h3>
          <p className="text-justify leading-relaxed">
            <strong>Role in Describing Differences:</strong> Comparative forms
            are crucial when discussing how two items or individuals differ
            regarding a particular attribute. They help specify whether one item
            has more or less of that quality than the other.
          </p>
          <p className="text-justify leading-relaxed">
            Usage Example: "This coffee is hotter than the one I had yesterday."
          </p>
          <p className="text-justify leading-relaxed">
            <strong>Role in Describing Extremes:</strong> Superlative forms are
            used when you want to single out one item or individual as having
            the most of a certain quality within a group or more broadly.
          </p>
          <p className="text-justify leading-relaxed">
            Usage Example: "He is the fastest runner in the school."
          </p>
          <p className="text-justify leading-relaxed">
            Both forms play vital roles in:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Precision in Language:</strong> They enable speakers and
              writers to convey precise differences and extremes, making
              descriptions more accurate and meaningful.
            </li>
            <li>
              <strong>Variety in Expression:</strong> Using comparative and
              superlative forms adds variety to language use, preventing
              repetitive and simplistic descriptions.
            </li>
            <li>
              <strong>Social and Practical Functions:</strong> In everyday
              conversation and writing, comparative and superlative forms are
              often used for making decisions, giving recommendations, and
              expressing opinions, which are fundamental social interactions.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Structure of Comparative Forms
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            How to Form Comparative Adjectives and Adverbs
          </h3>
          <p className="text-justify leading-relaxed">
            <strong>Basic Rule:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              For One-Syllable Adjectives: Add "-er" to the end of the
              adjective. Example: "Tall" becomes "taller."
            </li>
            <li>
              For Two-Syllable Adjectives Ending in 'y': Replace the 'y' with
              'i' and add "-er". Example: "Happy" becomes "happier."
            </li>
            <li>
              For Adjectives with Two or More Syllables: Use "more" before the
              adjective. Example: "Beautiful" becomes "more beautiful."
            </li>
            <li>
              For Adverbs that end in "-ly": Use "more" rather than "-er".
              Example: "Quickly" becomes "more quickly."
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Rules for Adding "-er" or Using "More"
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>"-er":</strong> This suffix is typically added to
              one-syllable adjectives and to two-syllable adjectives ending in
              'y'.
            </li>
            <li>
              <strong>"More":</strong> This is used before adjectives of three
              or more syllables and most two-syllable adjectives not ending in
              'y'.
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Common Irregular Comparatives
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>"Good" becomes "better."</li>
            <li>"Bad" becomes "worse."</li>
            <li>"Far" becomes "farther" or "further."</li>
            <li>"Little" becomes "less."</li>
            <li>"Much" becomes "more."</li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Examples to Illustrate Correct Usage
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>Simple Adjectives: "She is taller than her sister."</li>
            <li>
              Complex Adjectives: "This painting is more interesting than the
              one we saw yesterday."
            </li>
            <li>
              Irregular Comparatives: "I feel better today than I did
              yesterday."
            </li>
            <li>
              Adverbs: "He completed the work more quickly than expected."
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Structure of Superlative Forms
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            How to Form Superlative Adjectives and Adverbs
          </h3>
          <p className="text-justify leading-relaxed">
            <strong>Basic Rules:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              For One-Syllable Adjectives: Add "-est" to the end of the
              adjective. Example: "Tall" becomes "tallest."
            </li>
            <li>
              For Two-Syllable Adjectives Ending in 'y': Replace the 'y' with
              'i' and add "-est". Example: "Happy" becomes "happiest."
            </li>
            <li>
              For Adjectives with Two or More Syllables: Use "most" before the
              adjective. Example: "Beautiful" becomes "most beautiful."
            </li>
            <li>
              For Adverbs that end in "-ly": Use "most" rather than "-est".
              Example: "Quickly" becomes "most quickly."
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Rules for Adding "-est" or Using "Most"
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>"-est":</strong> This suffix is typically added to
              one-syllable adjectives and to two-syllable adjectives ending in
              'y'.
            </li>
            <li>
              <strong>"Most":</strong> This is used before adjectives of three
              or more syllables and most two-syllable adjectives not ending in
              'y'.
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Common Irregular Superlatives
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>"Good" becomes "best."</li>
            <li>"Bad" becomes "worst."</li>
            <li>"Far" becomes "farthest" or "furthest."</li>
            <li>"Little" becomes "least."</li>
            <li>"Much" becomes "most."</li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Examples to Illustrate Correct Usage
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>Simple Adjectives: "She is the tallest person in the room."</li>
            <li>
              Complex Adjectives: "This is the most interesting book I have ever
              read."
            </li>
            <li>Irregular Superlatives: "This is the best day of my life."</li>
            <li>
              Adverbs: "He finished the race most quickly of all the runners."
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Using Comparatives and Superlatives in Sentences
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Guidelines on Incorporating Comparatives and Superlatives
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Consistency in Comparisons: Ensure that the items being compared
              are of the same category for the comparison to be logical and
              valid. Example: Correct - "She is the tallest among her siblings."
              Incorrect - "She is the tallest among her house."
            </li>
            <li>
              Parallel Structure: When using comparatives and superlatives,
              maintain a parallel structure for clarity and aesthetic harmony.
              Example: "She is smarter, quicker, and more diligent than any
              student in the class."
            </li>
            <li>
              Clear Reference for Superlatives: Make sure it's clear what group
              or set is being referred to when using superlatives. Example: "He
              is the best (of the team? in the class? in the family?)."
            </li>
            <li>
              Avoid Double Comparatives and Superlatives: Do not use double
              forms like "more better" or "most tallest." These are
              grammatically incorrect. Example: Use "better" instead of "more
              better"; use "tallest" instead of "most tallest."
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Importance of Using the Correct Form to Match the Context and
            Meaning Intended
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Accuracy of Information:</strong> Using the correct
              comparative or superlative form is crucial for conveying accurate
              information. Misuse can lead to misunderstandings about the
              relationships or qualities being described.
            </li>
            <li>
              <strong>Suitability to Formality:</strong> In academic or
              professional writing, precision in the use of comparatives and
              superlatives reflects competence and credibility.
            </li>
            <li>
              <strong>Emotional and Rhetorical Impact:</strong> Comparative and
              superlative forms can enhance the emotional and rhetorical impact
              of your writing and speech.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Common Mistakes with Comparative and Superlative Forms
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Identification of Frequent Errors in Using Comparatives and
            Superlatives
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Incorrect Form Usage: Using the wrong form (comparative instead of
              superlative and vice versa) can distort the intended meaning of a
              sentence. Example Error: "Of all the students, he is smarter."
              Correction: "Of all the students, he is the smartest."
            </li>
            <li>
              Double Comparatives or Superlatives: Using double markers like
              "more" with "-er" or "most" with "-est" is a common grammatical
              mistake. Example Error: "She is the most smartest in the class."
              Correction: "She is the smartest in the class."
            </li>
            <li>
              Mismatched Comparisons: Comparing things that are not logically
              comparable or using comparatives without specifying the other
              element of the comparison. Example Error: "This book is better."
              Correction: "This book is better than the one I read last week."
            </li>
            <li>
              Irregular Forms Misuse: Misusing irregular comparatives and
              superlatives, often by regularizing them. Example Error: "Gooder"
              or "goodest" Correction: "Better" or "best"
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Tips and Strategies to Correct These Mistakes
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Learn and Review Forms: Regularly review and memorize the correct
              forms of comparatives and superlatives, especially for irregular
              adjectives and adverbs.
            </li>
            <li>
              Use Writing Tools: Utilize grammar checkers in word processing
              software, which can help identify and correct incorrect uses of
              comparative and superlative forms.
            </li>
            <li>
              Practice Comparative Structures: Regularly practice forming
              sentences with comparatives and superlatives to build familiarity
              and confidence.
            </li>
            <li>
              Clarify Comparisons: Always ensure that the comparison or
              superlative context is clear to avoid vague references.
            </li>
            <li>
              Seek Feedback: Regularly get feedback from proficient English
              speakers or teachers. They can provide valuable insights into the
              correct usage and common pitfalls.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Comparatives and Superlatives in Different Contexts
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Use in Formal vs. Informal Settings
          </h3>
          <p className="text-justify leading-relaxed">
            In informal speech and writing, comparatives and superlatives often
            appear in a more relaxed form, and slight grammatical inaccuracies
            may be overlooked or accepted. In formal writing and speeches,
            precision and correctness in using comparatives and superlatives are
            crucial. They must be grammatically perfect and clearly define their
            comparisons.
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Specific Considerations for Academic and Professional Writing
          </h3>
          <p className="text-justify leading-relaxed">
            In academic writing, comparatives and superlatives are used to
            present facts, draw conclusions, or highlight trends based on
            research and data. In professional settings, such as business or
            technical writing, the use of comparatives and superlatives should
            focus on clarity and objectivity.
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Tips for Effective Use
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Contextual Awareness:</strong> Always consider the
              audience and purpose of your communication. Adjust the level of
              formality and precision in your use of comparatives and
              superlatives accordingly.
            </li>
            <li>
              <strong>Clarity and Completeness:</strong> Ensure that your
              comparisons are complete and clear, specifying what is being
              compared to avoid ambiguity.
            </li>
            <li>
              <strong>Evidence and Support:</strong> In academic writing, back
              up comparative and superlative claims with data or citations where
              necessary to lend credibility to your statements.
            </li>
            <li>
              <strong>Avoid Overstatement:</strong> Be cautious of using
              superlatives without sufficient justification, which can appear
              exaggerated or unprofessional.
            </li>
          </ul>
        </section>
        {userData ? (
          <>
            {userData?.modules_completed[8] ? (
              <>
                <div onClick={() => {
                router.back();
              }} className="flex w-fit items-center gap-2 py-2.5 ps-3 pe-4 cursor-pointer bg-gray-400 text-white rounded-lg mt-3">
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