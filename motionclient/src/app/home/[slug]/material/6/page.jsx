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
      await finishRead(5);
      updateModulesCompleted(5);
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
          <title>Gerunds and Infinitives</title>
        </Head>
        <h1 className="text-4xl font-extrabold mb-6 text-center">
          Gerunds and Infinitives
        </h1>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Introduction to Gerunds and Infinitives
          </h2>
          <p className="text-justify leading-relaxed">
            Gerunds and infinitives are two grammatical forms that verbs can
            take to function in various roles within sentences, primarily as
            nouns. Understanding their proper use is essential for mastering
            English syntax and enhancing both written and spoken communication.
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Definition of Gerunds and Infinitives and Their Roles in English
            Grammar
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              <span className="font-semibold">Gerunds:</span>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Definition: A gerund is the -ing form of a verb that functions
                  as a noun in a sentence. It can act as the subject, object, or
                  complement of a sentence.
                </li>
                <li>
                  Role in Grammar: Gerunds are useful for discussing activities
                  or actions as general concepts. For example, gerunds are often
                  used after certain verbs and prepositions, and they can be
                  used to make statements more general or abstract.
                </li>
                <li>
                  Example: "Swimming is fun." (Subject) / "They enjoy swimming."
                  (Object)
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Infinitives:</span>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Definition: An infinitive is the base form of a verb preceded
                  by "to." It can serve as a noun, an adjective, or an adverb in
                  a sentence.
                </li>
                <li>
                  Role in Grammar: Infinitives are versatile and can express
                  purposes, intentions, or future actions. They are often used
                  after many adjectives, verbs, and in order to express reasons
                  or intentions.
                </li>
                <li>
                  Example: "To swim in the ocean is her dream." (Subject) / "She
                  wants to swim." (Object)
                </li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Overview of Their Similarities and Differences
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              <span className="font-semibold">Similarities:</span>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Functional Flexibility: Both gerunds and infinitives can act
                  as subjects, objects, and complements in sentences, thereby
                  playing the grammatical role typically reserved for nouns.
                </li>
                <li>
                  Following Verbs: Both forms can follow certain verbs directly.
                  However, which verbs can be followed by a gerund or an
                  infinitive depends on specific rules and conventions in
                  English.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Differences:</span>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Form: Gerunds are always in the -ing form of the verb.
                  Infinitives always begin with "to" followed by the base form
                  of the verb.
                </li>
                <li>
                  Usage: Gerunds often imply more of a general or habitual
                  action when used in sentences, while infinitives are more
                  likely to express a specific, single action, especially one
                  that is planned or intended.
                </li>
                <li>
                  Preposition Follow-up: Gerunds are used after prepositions
                  ("She is good at swimming."), whereas infinitives do not
                  typically follow prepositions directly unless they are part of
                  a verb phrase modified by the preposition ("She left to go
                  swimming.").
                </li>
                <li>
                  Expressing Purpose: Infinitives are particularly useful for
                  expressing purpose ("She exercises to stay healthy.") or a
                  reason, which gerunds cannot do.
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Understanding Gerunds
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Definition and Examples of Gerunds
          </h3>
          <p className="text-justify leading-relaxed">
            Definition: A gerund is the -ing form of a verb that functions as a
            noun. This means it can perform the role of a subject, object, or
            complement within a sentence, much like how a noun would.
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>As a Subject: "Swimming is my favorite sport."</li>
            <li>As an Object: "I enjoy swimming."</li>
            <li>As a Complement: "Her favorite hobby is swimming."</li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Usage Rules for Gerunds in Sentences
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              As Subjects: Gerunds often start sentences when an action is the
              topic, such as in "Jogging is a good way to stay fit."
            </li>
            <li>
              As Direct Objects: Many verbs are followed by gerunds when they
              need to express actions that are the object of the main verb, for
              instance, "She likes reading."
            </li>
            <li>
              As Objects of Prepositions: Gerunds are used after prepositions in
              sentences like "They are interested in learning Spanish."
            </li>
            <li>
              After Certain Expressions: Gerunds are used after certain phrases
              that require a noun form, such as "can’t help," "can’t stand," "in
              addition to," "look forward to," etc.
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Common Verbs and Phrases That Are Typically Followed by Gerunds
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Verbs Often Followed by Gerunds:
              <ul className="list-disc list-inside ml-4">
                <li>Enjoy: "I enjoy cooking."</li>
                <li>Avoid: "He avoids going to crowded places."</li>
                <li>Consider: "She considered moving to New York."</li>
                <li>Finish: "They finished setting up the equipment."</li>
              </ul>
            </li>
            <li>
              Phrases Commonly Followed by Gerunds:
              <ul className="list-disc list-inside ml-4">
                <li>Can’t Help: "I can’t help feeling nervous."</li>
                <li>Look Forward to: "We look forward to meeting you."</li>
                <li>Be Used to: "He is used to waking up early."</li>
                <li>
                  Get Used to: "She is getting used to driving on the right."
                </li>
                <li>
                  In Addition to: "In addition to working as a teacher, he
                  coaches soccer."
                </li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Practical Tips for Using Gerunds
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Avoid Confusing Gerunds with Present Participles: Although both
              forms end in -ing, present participles act as adjectives or form
              part of the continuous verb tenses, whereas gerunds function as
              nouns.
            </li>
            <li>
              Punctuation with Gerunds: When a gerund phrase starts a sentence
              and is a complete thought, separate it with a comma from the main
              clause.
            </li>
            <li>
              Consistency: When combining verbs in a list or in parallel
              structure, keep the forms consistent. If starting with a gerund,
              continue with gerunds.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Gerunds vs. Infinitives
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Situations Where Either a Gerund or an Infinitive Can Be Used
          </h3>
          <p className="text-justify leading-relaxed">
            Some English verbs can be followed by either a gerund or an
            infinitive, but the meaning of the sentence will change based on
            which form is used. This subtle nuance is essential for expressing
            intentions and actions accurately.
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Start:
              <ul className="list-disc list-inside ml-4">
                <li>
                  "He started reading the book." (He began the action of reading
                  that specific book.)
                </li>
                <li>
                  "He started to read the book." (He began the process of
                  reading, which may not necessarily imply he read that specific
                  book right then.)
                </li>
              </ul>
            </li>
            <li>
              Remember:
              <ul className="list-disc list-inside ml-4">
                <li>
                  "I remembered sending the email." (I recalled the action of
                  sending the email.)
                </li>
                <li>
                  "I remembered to send the email." (I remembered that I needed
                  to send the email and likely sent it.)
                </li>
              </ul>
            </li>
            <li>
              Stop:
              <ul className="list-disc list-inside ml-4">
                <li>"She stopped smoking." (She quit the habit of smoking.)</li>
                <li>
                  "She stopped to smoke." (She paused her current action to
                  start smoking.)
                </li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Verbs That Change Meaning When Followed by Gerunds vs. Infinitives
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Forget:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Gerund: "I will never forget visiting Niagara Falls." (Refers
                  to the memory of visiting Niagara Falls.)
                </li>
                <li>
                  Infinitive: "I forgot to visit Niagara Falls when I was in New
                  York." (Refers to the failure to perform the action of
                  visiting Niagara Falls.)
                </li>
              </ul>
            </li>
            <li>
              Try:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Gerund: "I tried calling you but couldn't get through."
                  (Attempted the action of calling.)
                </li>
                <li>
                  Infinitive: "Try to call me tomorrow at noon." (Make an
                  attempt to perform the future action of calling.)
                </li>
              </ul>
            </li>
            <li>
              Regret:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Gerund: "I regret telling her the secret." (I feel sorry about
                  having told her the secret.)
                </li>
                <li>
                  Infinitive: "I regret to tell you that we cannot approve your
                  application." (I feel sorry to say something right now.)
                </li>
              </ul>
            </li>
            <li>
              Need:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Gerund: "The house needs cleaning." (The house requires
                  cleaning.)
                </li>
                <li>
                  Infinitive: "You need to clean the house." (You must clean the
                  house.)
                </li>
              </ul>
            </li>
            <li>
              Go on:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Gerund: "After the break, he went on talking." (He continued
                  the same activity, which is talking.)
                </li>
                <li>
                  Infinitive: "After the introduction, he went on to explain the
                  main concept." (He proceeded to a different but related
                  activity.)
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Common Mistakes with Gerunds and Infinitives
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Identification of Frequent Errors in the Use of Gerunds and
            Infinitives
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Incorrect Form After Verbs:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Certain verbs are followed either by a gerund or an
                  infinitive, and using the wrong form can change the meaning of
                  a sentence or make it grammatically incorrect.
                </li>
                <li>
                  Example Error: "She avoided to meet him." (Incorrect use of
                  the infinitive after "avoided.")
                </li>
              </ul>
            </li>
            <li>
              Misuse in Verb Patterns:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Some verbs require specific prepositions before an infinitive
                  or a gerund, and using them incorrectly or omitting them
                  altogether can lead to errors.
                </li>
                <li>
                  Example Error: "We discussed about going to the beach."
                  ("Discuss" should not be followed by "about" when used with a
                  gerund.)
                </li>
              </ul>
            </li>
            <li>
              Confusing Gerunds with Present Participles:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Although both gerunds and present participles end in "-ing,"
                  they serve different functions. Gerunds act as nouns, while
                  present participles act as adjectives or form part of the verb
                  in progressive tenses.
                </li>
                <li>
                  Example Error: "I saw him walking the dog, and he was happy."
                  (Ambiguity if "walking the dog" is perceived as a present
                  participle modifying "him" instead of a gerund phrase.)
                </li>
              </ul>
            </li>
            <li>
              Using Infinitives with the Wrong Verbs:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Certain verbs should not be followed by an infinitive, yet
                  this is a common mistake, especially among learners.
                </li>
                <li>
                  Example Error: "She suggested to go out for dinner."
                  ("Suggested" should be followed by a gerund or a that-clause:
                  "She suggested going out for dinner.")
                </li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Correction Strategies to Ensure Proper Usage and Grammatical
            Accuracy
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Learn Verb Patterns:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Memorize verbs that are typically followed by gerunds and
                  those followed by infinitives. This knowledge helps avoid
                  errors in verb-object combinations.
                </li>
                <li>
                  Strategy: Create a list of common verbs and their correct
                  patterns for reference and practice.
                </li>
              </ul>
            </li>
            <li>
              Practice with Real Sentences:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Use exercises and real-life examples to practice applying
                  gerunds and infinitives correctly.
                </li>
                <li>
                  Strategy: Rewrite incorrect sentences from your writings or
                  from practice books, focusing on applying the correct gerund
                  or infinitive forms.
                </li>
              </ul>
            </li>
            <li>
              Use Grammar Checkers:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Utilize grammar checking tools as an initial step to identify
                  potential errors in the use of gerunds and infinitives, but
                  always review the suggestions to understand why changes are
                  recommended.
                </li>
                <li>
                  Strategy: After running your text through a grammar checker,
                  go over each correction to make sure it aligns with standard
                  usage rules.
                </li>
              </ul>
            </li>
            <li>
              Seek Feedback:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Regular feedback from proficient English speakers or writers
                  can help identify and correct tendencies to misuse gerunds and
                  infinitives.
                </li>
                <li>
                  Strategy: Participate in language learning forums, workshops,
                  or classes where you can receive structured feedback.
                </li>
              </ul>
            </li>
            <li>
              Understand the Context:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Pay attention to the sentence context to choose between a
                  gerund and an infinitive, especially in cases where both forms
                  are grammatically correct but create different meanings.
                </li>
                <li>
                  Strategy: Practice contextual exercises where you must choose
                  between gerunds and infinitives based on subtle shifts in
                  meaning.
                </li>
              </ul>
            </li>
          </ul>
        </section>
        {userData ? (
          <>
            {userData?.modules_completed[5] ? (
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
