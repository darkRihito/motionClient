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
      await finishRead(0);
      updateModulesCompleted(0);
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
        <Head>
          <title>Subject-verb Agreement</title>
        </Head>
        <h1 className="text-4xl font-extrabold mb-6 text-center">
          Subject-verb Agreement
        </h1>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Introduction to Subject-verb Agreement
          </h2>
          <p className="text-justify leading-relaxed">
            Subject-verb agreement is fundamental in English grammar, ensuring
            that the verb in a sentence matches the subject in number and
            person. In the TOEFL exam, proper understanding and application of
            subject-verb agreement rules are critical, as errors in agreement
            can lead to misunderstandings and lower scores. This section will
            cover the essential rules and provide strategies for identifying and
            correcting common errors.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Special Cases in Subject-verb Agreement
          </h2>
          <div className="mb-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
              1. Subjects Separated from Verbs
            </h3>
            <p className="text-justify leading-relaxed">
              In many sentences, especially complex ones, the subject and verb
              can be separated by several words or even clauses, making it
              tricky to maintain the correct agreement.
            </p>
            <p className="font-semibold mt-2">Key Points:</p>
            <ul className="list-disc list-inside ml-4">
              <li>
                Ignore intervening phrases or clauses that come between the
                subject and the verb. Focus on the main subject for determining
                the verb form.
              </li>
              <li>
                Common intervening elements include prepositional phrases,
                appositive phrases, and subordinate clauses.
              </li>
            </ul>
            <p className="mt-2">
              <span className="font-semibold">Example:</span>
            </p>
            <p className="italic">
              The box of chocolates, which my friend bought, is on the table.
            </p>
            <p className="mt-2">
              <span className="font-semibold">Explanation:</span> The main
              subject "The box" is singular, hence the verb "is" is also
              singular, despite the intervening phrase "of chocolates" and the
              clause "which my friend bought".
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
              2. Compound Subjects
            </h3>
            <p className="text-justify leading-relaxed">
              Compound subjects consist of two or more subjects joined by
              conjunctions such as "and" or "or". The verb agreement depends on
              the conjunction used.
            </p>
            <p className="font-semibold mt-2">Key Points:</p>
            <ul className="list-disc list-inside ml-4">
              <li>
                And: Typically, compound subjects joined by "and" require a
                plural verb.
              </li>
              <li>
                Or/Nor: The verb should agree with the subject closest to the
                verb.
              </li>
            </ul>
            <p className="mt-2">
              <span className="font-semibold">Examples:</span>
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                My brother and his friend are planning a trip. (Plural verb for
                two subjects connected by "and")
              </li>
              <li>
                Either the manager or his employees decide on the schedule.
                (Verb agrees with "employees", the subject closer to it)
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
              3. Subjects Followed by Phrases Containing Other Nouns
            </h3>
            <p className="text-justify leading-relaxed">
              Sometimes, a subject might be followed by additional phrases
              containing nouns that could confuse the correct verb agreement.
            </p>
            <p className="font-semibold mt-2">Key Points:</p>
            <ul className="list-disc list-inside ml-4">
              <li>
                The verb must agree with the main subject, not with the noun in
                the following phrase.
              </li>
            </ul>
            <p className="mt-2">
              <span className="font-semibold">Example:</span>
            </p>
            <p className="italic">
              The leader of the workers is speaking at the event.
            </p>
            <p className="mt-2">
              <span className="font-semibold">Explanation:</span> Despite
              "workers" being plural, the main subject "The leader" is singular,
              so the verb "is" remains singular.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
              4. Inverted Subjects and Verbs
            </h3>
            <p className="text-justify leading-relaxed">
              In questions, conditional statements, and sentences starting with
              "there" or "here", the normal order of the subject and verb is
              often inverted, which can complicate subject-verb agreement.
            </p>
            <p className="font-semibold mt-2">Key Points:</p>
            <ul className="list-disc list-inside ml-4">
              <li>
                Identify the subject regardless of its position and choose the
                verb form that matches it.
              </li>
              <li>
                For sentences starting with "there is" or "there are", the verb
                must agree with the real subject that follows the verb.
              </li>
            </ul>
            <p className="mt-2">
              <span className="font-semibold">Examples:</span>
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                Are the players ready for the match? (Normal inversion in a
                question)
              </li>
              <li>
                There is a book on the table. (Here, "a book" is the real
                subject, and it is singular)
              </li>
              <li>
                Had I known the truth, I would have acted differently.
                (Conditional inversion, with "I" as the subject after the verb
                phrase "would have")
              </li>
            </ul>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Verb Forms and Tenses
          </h2>
          <div className="mb-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
              Review of Verb Forms
            </h3>
            <p className="text-justify leading-relaxed">
              English verbs can appear in several forms which are used to denote
              the time of action, the aspect (whether the action is complete or
              ongoing), and the voice (active or passive). Here are the basic
              forms of verbs:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                <span className="font-semibold">Base Form:</span> The dictionary
                form of a verb without any tense or subject agreement
                modifications.
                <ul className="list-disc list-inside ml-4">
                  <li>Examples: speak, run, come</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">
                  Third Person Singular Form:
                </span>{" "}
                This is typically the base form plus an -s or -es and is used
                with singular third-person subjects.
                <ul className="list-disc list-inside ml-4">
                  <li>Examples: speaks, runs, comes</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Past Simple Form:</span> Used
                for actions that occurred and completed in the past.
                <ul className="list-disc list-inside ml-4">
                  <li>Examples: spoke, ran, came</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Past Participle:</span> Often
                used with auxiliary verbs to form perfect tenses or the passive
                voice.
                <ul className="list-disc list-inside ml-4">
                  <li>Examples: spoken, run, come</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Present Participle:</span>{" "}
                Always ending in -ing and used for forming continuous tenses or
                as adjectives.
                <ul className="list-disc list-inside ml-4">
                  <li>Examples: speaking, running, coming</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
              Impact of Incorrect Verb Tense on Subject-Verb Agreement
            </h3>
            <p className="text-justify leading-relaxed">
              The use of the correct verb tense is crucial not only for
              expressing the time of an action but also for maintaining
              subject-verb agreement. Here’s how incorrect verb tenses can
              impact agreement:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                <span className="font-semibold">
                  Tense Confusion Leads to Agreement Errors:
                </span>{" "}
                When the wrong tense is used, it can lead to verbs that do not
                agree with the subject in number or person. This is especially
                true in complex tenses that use auxiliary verbs.
                <ul className="list-disc list-inside ml-4">
                  <li>Incorrect: She have gone to the store.</li>
                  <li>Correct: She has gone to the store.</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Compound Tenses:</span> In
                compound tenses (like the present perfect or past perfect), the
                main verb remains in a non-finite form (past participle), and
                the auxiliary verb (has, have, had) agrees with the subject.
                <ul className="list-disc list-inside ml-4">
                  <li>Incorrect: They has been waiting for hours.</li>
                  <li>Correct: They have been waiting for hours.</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Modal Verbs:</span> Modal verbs
                (can, could, will, would, shall, should, may, might, must)
                remain the same regardless of the subject, but the main verb
                always stays in its base form.
                <ul className="list-disc list-inside ml-4">
                  <li>Incorrect: He don't need to go.</li>
                  <li>Correct: He doesn’t need to go.</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">
                  Inversion in Questions and Conditionals:
                </span>{" "}
                In questions and conditionals, inversion can lead to errors if
                the auxiliary and the main verb are mismatched in tense or form.
                <ul className="list-disc list-inside ml-4">
                  <li>Incorrect: Does she has a pen?</li>
                  <li>Correct: Does she have a pen?</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Troubleshooting Common Errors
          </h2>
          <div className="mb-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
              Identifying and Correcting Errors in Practice Sentences
            </h3>
            <p className="text-justify leading-relaxed">
              Practicing with sentences that contain intentional errors is an
              effective way to enhance your grammatical skills. Here’s how you
              can identify and correct these errors:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                Read the Sentence Carefully: Start by reading the sentence
                thoroughly. Understanding the context and meaning can often help
                reveal grammatical inconsistencies.
              </li>
              <li>
                Identify the Subject and Verb: Locate the main subject and the
                main verb of the sentence. Check if they agree in number
                (singular/plural).
              </li>
              <li>
                Check for Modifiers and Clauses: Look for phrases or clauses
                that might separate the subject and verb or introduce additional
                subjects and verbs. Ensure each verb agrees with its
                corresponding subject.
              </li>
              <li>
                Consider Special Cases: Recall the rules for compound subjects,
                inverted sentences, and subjects followed by descriptive
                phrases.
              </li>
              <li>
                Apply the Correct Verb Form: Once you identify an error, correct
                the verb form to match the subject. Remember the basic rules of
                singular and plural forms.
              </li>
            </ul>
            <p className="mt-2">
              <span className="font-semibold">
                Example Practice Sentences and Corrections:
              </span>
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Incorrect: The list of items are on the desk.</li>
              <li>Correction: The list of items is on the desk.</li>
              <li>Incorrect: Each of the players have a schedule.</li>
              <li>Correction: Each of the players has a schedule.</li>
              <li>Incorrect: There is several reasons for this decision.</li>
              <li>Correction: There are several reasons for this decision.</li>
            </ul>
          </div>
        </section>
        <section className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Tips for Error Detection During Exams
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Underline Key Elements: During the exam, quickly underline the
              subject(s) and verb(s) in each sentence you review. This visual
              aid helps in maintaining focus on agreement.
            </li>
            <li>
              Use Elimination Methods in Multiple Choice Questions: When faced
              with multiple choice questions, eliminate options that clearly
              have subject-verb agreement errors. This can sometimes lead to the
              correct answer even if you are unsure about other grammatical
              aspects.
            </li>
            <li>
              Listen for Naturalness: Read the sentence silently to yourself.
              Often, errors in subject-verb agreement sound awkward. Trust your
              ear, but only if you have extensively practiced and are familiar
              with correct usage patterns.
            </li>
            <li>
              Review Rules Before the Exam: Briefly review the main rules and
              exceptions of subject-verb agreement before the exam to freshen
              them in your memory.
            </li>
            <li>
              Practice Under Timed Conditions: Regular practice under timed
              conditions can help you manage time effectively during the actual
              exam and reduce the stress of spotting errors quickly.
            </li>
            <li>
              Stay Calm and Focused: Under exam conditions, stress can lead to
              mistakes. Stay calm and take a moment to review your answers,
              especially if you suspect grammatical errors.
            </li>
          </ul>
          <p className="text-justify leading-relaxed mt-4">
            By following these strategies, you can significantly enhance your
            ability to detect and correct errors in subject-verb agreement,
            boosting your confidence and performance in the TOEFL or any other
            English proficiency test. Regular practice and mindful application
            of these tips will aid in developing a keen eye for grammatical
            accuracy.
          </p>
        </section>
        {userData ? (
          <>
            {userData?.modules_completed[0] ? (
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
