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
      await finishRead(6);
      updateModulesCompleted(6);
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
        {/* <Head>
          <title>Passive Voice</title>
        </Head>
        <h1 className="text-4xl font-extrabold mb-6 text-center">
          Passive Voice
        </h1>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Introduction to Passive Voice
          </h2>
          <p className="text-justify leading-relaxed">
            The passive voice is a key grammatical construction in English, used
            to shift the focus of a sentence from the doer of the action (the
            subject) to the receiver of the action (the object). Understanding
            when and why to use the passive voice can significantly enhance the
            flexibility and subtlety of your language use.
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Definition of Passive Voice and Its Contrast with Active Voice
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              <span className="font-semibold">Passive Voice:</span>
              <ul className="list-disc list-inside ml-4">
                <li>
                  In the passive voice, the subject of the sentence is the
                  recipient of the action, not the doer. The action is performed
                  by an agent that can either be omitted or introduced in the
                  sentence with the preposition "by."
                </li>
                <li>
                  Structure: [Subject] + [be (in appropriate tense)] + [past
                  participle of the verb] + [by... (optional agent)]
                </li>
                <li>Example: "The cake was eaten by the children."</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Active Voice:</span>
              <ul className="list-disc list-inside ml-4">
                <li>
                  In the active voice, the subject of the sentence performs the
                  action expressed by the verb, and the object receives the
                  action.
                </li>
                <li>Structure: [Subject] + [Verb] + [Object]</li>
                <li>Example: "The children ate the cake."</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Contrast:</span>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Active voice is straightforward and emphasizes the doer of the
                  action, making sentences often more direct and dynamic.
                </li>
                <li>
                  Passive voice emphasizes the action or the receiver of the
                  action, often making the sentence less personal or
                  de-emphasizing the doer.
                </li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Explanation of When and Why Passive Voice is Used in English
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              When the doer is unknown or irrelevant: If it’s not known who
              performed the action or it's not important to the context, passive
              voice is often used.
              <ul className="list-disc list-inside ml-4">
                <li>Example: "The window was broken."</li>
              </ul>
            </li>
            <li>
              When the focus is on the action or the receiver: If the sentence
              aims to highlight the action itself or the receiver of the action
              rather than the doer.
              <ul className="list-disc list-inside ml-4">
                <li>Example: "A new shopping mall is being built downtown."</li>
              </ul>
            </li>
            <li>
              To sound more formal or objective: In academic writing, scientific
              reports, or formal documentation, the passive voice is used to
              present information in a more objective, impersonal way.
              <ul className="list-disc list-inside ml-4">
                <li>
                  Example: "The experiment was conducted at room temperature."
                </li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Why Use Passive Voice:
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Emphasis: To emphasize the result of the action rather than who is
              performing it.
            </li>
            <li>
              Variety: To provide variety in sentence structure, making text
              more engaging and nuanced.
            </li>
            <li>
              Formality and Objectivity: To achieve a more formal tone or to
              appear unbiased, especially in professional or academic contexts.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Structure of Passive Voice
          </h2>
          <p className="text-justify leading-relaxed">
            The passive voice in English is formed using a specific construction
            that involves the verb 'to be' and the past participle of the main
            verb. Understanding this structure is essential for constructing
            passive sentences correctly across different tenses.
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Basic Construction of Passive Sentences
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Identify the Subject, Verb, and Object:
              <ul className="list-disc list-inside ml-4">
                <li>
                  In an active sentence, the structure generally follows the
                  pattern: Subject (doer) + Verb (action) + Object (receiver).
                </li>
                <li>
                  Example: "The manager (subject) approved (verb) the proposal
                  (object)."
                </li>
              </ul>
            </li>
            <li>
              Switch the Object to the Subject Position:
              <ul className="list-disc list-inside ml-4">
                <li>
                  In the passive voice, the object of the active sentence
                  becomes the subject of the passive sentence.
                </li>
                <li>Example: "The proposal" becomes the subject in passive.</li>
              </ul>
            </li>
            <li>
              Change the Verb:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Use the appropriate form of the verb "to be" for the tense of
                  the original verb and combine it with the past participle of
                  the main verb.
                </li>
                <li>Active Verb: "approved"; Passive Verb: "was approved."</li>
              </ul>
            </li>
            <li>
              Reposition the Original Subject (optional):
              <ul className="list-disc list-inside ml-4">
                <li>
                  The original subject can be included at the end of the passive
                  sentence preceded by "by" to indicate the doer of the action,
                  though it’s often omitted if the doer is not important or
                  known.
                </li>
                <li>Example: "by the manager."</li>
              </ul>
            </li>
            <li>
              Adjust for Tense, Person, and Number:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Ensure that the verb "to be" matches the tense, person, and
                  number of the original verb in the active sentence.
                </li>
                <li>
                  Example: "is approved," "was approved," "will be approved."
                </li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Examples of Passive Voice in Different Tenses
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Simple Present Tense:
              <ul className="list-disc list-inside ml-4">
                <li>Active: "The chef cooks the meal."</li>
                <li>Passive: "The meal is cooked by the chef."</li>
              </ul>
            </li>
            <li>
              Simple Past Tense:
              <ul className="list-disc list-inside ml-4">
                <li>Active: "The chef cooked the meal."</li>
                <li>Passive: "The meal was cooked by the chef."</li>
              </ul>
            </li>
            <li>
              Present Continuous Tense:
              <ul className="list-disc list-inside ml-4">
                <li>Active: "The chef is cooking the meal."</li>
                <li>Passive: "The meal is being cooked by the chef."</li>
              </ul>
            </li>
            <li>
              Past Continuous Tense:
              <ul className="list-disc list-inside ml-4">
                <li>Active: "The chef was cooking the meal."</li>
                <li>Passive: "The meal was being cooked by the chef."</li>
              </ul>
            </li>
            <li>
              Future Simple Tense:
              <ul className="list-disc list-inside ml-4">
                <li>Active: "The chef will cook the meal."</li>
                <li>Passive: "The meal will be cooked by the chef."</li>
              </ul>
            </li>
            <li>
              Present Perfect Tense:
              <ul className="list-disc list-inside ml-4">
                <li>Active: "The chef has cooked the meal."</li>
                <li>Passive: "The meal has been cooked by the chef."</li>
              </ul>
            </li>
            <li>
              Past Perfect Tense:
              <ul className="list-disc list-inside ml-4">
                <li>Active: "The chef had cooked the meal."</li>
                <li>Passive: "The meal had been cooked by the chef."</li>
              </ul>
            </li>
            <li>
              Future Perfect Tense:
              <ul className="list-disc list-inside ml-4">
                <li>Active: "The chef will have cooked the meal."</li>
                <li>Passive: "The meal will have been cooked by the chef."</li>
              </ul>
            </li>
            <li>
              Modal Verbs:
              <ul className="list-disc list-inside ml-4">
                <li>Active: "The chef can cook the meal."</li>
                <li>Passive: "The meal can be cooked by the chef."</li>
              </ul>
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Appropriate Contexts for Using Passive Voice
          </h2>
          <p className="text-justify leading-relaxed">
            The passive voice plays a vital role in English, offering stylistic
            diversity and functional utility, especially in academic and
            professional settings. Understanding when its use is preferred or
            required can enhance the clarity and appropriateness of your
            communication.
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Situations Where Passive Voice is Preferred or Required
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              When the Doer is Unknown or Unimportant:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Passive voice is useful when the identity of the action's doer
                  is unknown or irrelevant to the context.
                </li>
                <li>
                  Example: "A decision was made to postpone the meeting." (The
                  decision-maker is not specified or important.)
                </li>
              </ul>
            </li>
            <li>
              When the Focus is on the Action or Receiver:
              <ul className="list-disc list-inside ml-4">
                <li>
                  If the focus should be on the action itself or its recipient
                  rather than who is performing the action, passive voice is
                  preferred.
                </li>
                <li>
                  Example: "Over five hundred units were sold last month." (The
                  emphasis is on the units sold, not on the sellers.)
                </li>
              </ul>
            </li>
            <li>
              To Avoid Blame or Maintain Formality:
              <ul className="list-disc list-inside ml-4">
                <li>
                  In formal writing or in situations where attributing direct
                  responsibility is diplomatically sensitive, passive
                  constructions are often used.
                </li>
                <li>
                  Example: "Mistakes were made, and the issues have been
                  addressed." (This avoids directly blaming anyone.)
                </li>
              </ul>
            </li>
            <li>
              In Scientific or Technical Writing:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Academic and scientific discourse frequently employs passive
                  voice to maintain an objective tone and focus on the process
                  or results rather than the researcher.
                </li>
                <li>Example: "The sample was tested at multiple intervals."</li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Discussion on the Stylistic and Functional Uses of Passive Voice in
            Academic and Professional Writing
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              <span className="font-semibold">Stylistic Uses:</span>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Variety: Passive voice provides stylistic variety in writing,
                  breaking the monotony of always using active constructions.
                </li>
                <li>
                  Emphasis Shift: By using passive voice, writers can shift the
                  emphasis from the doer to the action or the receiver of the
                  action, which can be strategically important for the message
                  being conveyed.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Functional Uses:</span>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Objectivity: Especially in academic contexts, passive voice is
                  used to create a sense of objectivity and remove personal bias
                  that active voice might imply.
                </li>
                <li>
                  Focus on Results or Actions: In business and scientific
                  contexts, the results or actions are often more important than
                  the actor. Passive voice perfectly aligns with this focus.
                </li>
                <li>
                  Formality: Passive voice tends to sound more formal, which is
                  often suitable for academic and professional documents.
                </li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Best Practices for Using Passive Voice
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Use Sparingly: While passive voice has important uses, it should
              be employed judiciously within a text. Overuse can make sentences
              heavier and harder to read.
            </li>
            <li>
              Balance with Active Voice: A balanced approach, using both active
              and passive voices as appropriate, can make your writing more
              engaging and dynamic.
            </li>
            <li>
              Be Clear and Direct When Needed: Consider your audience and
              purpose; if clarity and directness are paramount, the active voice
              might often be preferable.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Converting Active to Passive Voice
          </h2>
          <p className="text-justify leading-relaxed">
            Transforming sentences from active to passive voice is a valuable
            skill that enhances flexibility in writing and speaking. Here’s a
            step-by-step guide to help you understand and practice converting
            sentences from active to passive voice.
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Step-by-Step Guide to Converting from Active to Passive Voice
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Identify the Subject, Verb, and Object:
              <ul className="list-disc list-inside ml-4">
                <li>
                  In an active sentence, the structure generally follows the
                  pattern: Subject (doer) + Verb (action) + Object (receiver).
                </li>
                <li>
                  Example: "The manager (subject) approved (verb) the proposal
                  (object)."
                </li>
              </ul>
            </li>
            <li>
              Switch the Object to the Subject Position:
              <ul className="list-disc list-inside ml-4">
                <li>
                  In the passive voice, the object of the active sentence
                  becomes the subject of the passive sentence.
                </li>
                <li>Example: "The proposal" becomes the subject in passive.</li>
              </ul>
            </li>
            <li>
              Change the Verb:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Use the appropriate form of the verb "to be" for the tense of
                  the original verb and combine it with the past participle of
                  the main verb.
                </li>
                <li>Active Verb: "approved"; Passive Verb: "was approved."</li>
              </ul>
            </li>
            <li>
              Reposition the Original Subject (optional):
              <ul className="list-disc list-inside ml-4">
                <li>
                  The original subject can be included at the end of the passive
                  sentence preceded by "by" to indicate the doer of the action,
                  though it’s often omitted if the doer is not important or
                  known.
                </li>
                <li>Example: "by the manager."</li>
              </ul>
            </li>
            <li>
              Adjust for Tense, Person, and Number:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Ensure that the verb "to be" matches the tense, person, and
                  number of the original verb in the active sentence.
                </li>
                <li>
                  Example: "is approved," "was approved," "will be approved."
                </li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Practice Exercises to Reinforce Learning
          </h3>
          <p className="text-justify leading-relaxed">
            Exercise 1: Convert the following active sentences to passive voice.
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              "The chef prepares the meal."
              <ul className="list-disc list-inside ml-4">
                <li>Passive: "The meal is prepared by the chef."</li>
              </ul>
            </li>
            <li>
              "Researchers discovered new evidence."
              <ul className="list-disc list-inside ml-4">
                <li>Passive: "New evidence was discovered by researchers."</li>
              </ul>
            </li>
            <li>
              "The committee will announce the results tomorrow."
              <ul className="list-disc list-inside ml-4">
                <li>
                  Passive: "The results will be announced by the committee
                  tomorrow."
                </li>
              </ul>
            </li>
          </ul>
          <p className="text-justify leading-relaxed">
            Exercise 2: Identify the errors in these passive sentences and
            correct them.
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              "The book was read by she."
              <ul className="list-disc list-inside ml-4">
                <li>Corrected: "The book was read by her."</li>
              </ul>
            </li>
            <li>
              "A new car will bought by John."
              <ul className="list-disc list-inside ml-4">
                <li>Corrected: "A new car will be bought by John."</li>
              </ul>
            </li>
            <li>
              "The documents are being prepare by the team."
              <ul className="list-disc list-inside ml-4">
                <li>
                  Corrected: "The documents are being prepared by the team."
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Common Mistakes with Passive Voice
          </h2>
          <p className="text-justify leading-relaxed">
            Using passive voice can sometimes be tricky, leading to common
            errors that can affect the clarity and accuracy of your writing.
            Identifying these frequent mistakes and understanding how to correct
            them is crucial for effective communication, especially in formal or
            academic contexts.
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Identification of Frequent Errors in Constructing Passive Sentences
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Incorrect Verb Form:
              <ul className="list-disc list-inside ml-4">
                <li>
                  One of the most common errors in passive construction is using
                  the wrong form of the verb "to be" or the past participle.
                </li>
                <li>Example Error: "The report was write by the student."</li>
                <li>Correction: "The report was written by the student."</li>
              </ul>
            </li>
            <li>
              Omitting the Verb "To Be":
              <ul className="list-disc list-inside ml-4">
                <li>
                  In passive voice, the verb "to be" is essential to link the
                  subject with the past participle of the main verb.
                </li>
                <li>Example Error: "The cake eaten by the children."</li>
                <li>Correction: "The cake was eaten by the children."</li>
              </ul>
            </li>
            <li>
              Misplacing the Agent:
              <ul className="list-disc list-inside ml-4">
                <li>
                  When including the doer of the action (agent), it should
                  typically follow the preposition "by." Misplacing the agent or
                  using the wrong preposition can lead to confusion.
                </li>
                <li>Example Error: "The song was sung she."</li>
                <li>Correction: "The song was sung by her."</li>
              </ul>
            </li>
            <li>
              Using Passive Voice Inappropriately:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Overusing passive voice or using it where active voice would
                  be more direct and engaging is a common stylistic error.
                </li>
                <li>
                  Example Error: "It was decided by the team to advance with the
                  project."
                </li>
                <li>
                  Improved: "The team decided to advance with the project."
                </li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Tips and Strategies to Avoid These Mistakes
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Double-Check Verb Forms:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Always ensure that you are using the correct form of the verb
                  "to be" and the past participle of the main verb. This often
                  requires memorizing past participles, especially for irregular
                  verbs.
                </li>
                <li>
                  Practice Tip: Create flashcards with common irregular verbs
                  and their past participles for quick revision.
                </li>
              </ul>
            </li>
            <li>
              Use Active Voice When Appropriate:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Assess whether passive voice is necessary for your sentence.
                  If the agent is important and known, consider using active
                  voice for clarity and impact.
                </li>
                <li>
                  Strategy: Before finalizing a sentence in passive voice,
                  re-evaluate its purpose and see if active voice might be more
                  effective.
                </li>
              </ul>
            </li>
            <li>
              Revise for Clarity and Conciseness:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Review your sentences to ensure that they are clear and
                  concise. Passive constructions can sometimes make sentences
                  wordy or unclear.
                </li>
                <li>
                  Editing Tip: Read your text aloud or have someone else review
                  it to catch awkward or unclear passive constructions.
                </li>
              </ul>
            </li>
            <li>
              Properly Position the Agent:
              <ul className="list-disc list-inside ml-4">
                <li>
                  If the agent is mentioned in a passive sentence, ensure it
                  follows "by" and is in the correct case (e.g., objective case
                  for pronouns).
                </li>
                <li>
                  Revision Strategy: Check each passive sentence to confirm that
                  the agent is correctly positioned and expressed.
                </li>
              </ul>
            </li>
            <li>
              Practice with Conversion Exercises:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Convert sentences from active to passive and vice versa to
                  become comfortable with both structures. This helps in
                  understanding when and how to use each effectively.
                </li>
                <li>
                  Practice Exercise: Take a paragraph from a book or an article,
                  identify active sentences, and convert them to passive to see
                  how it changes the emphasis and flow.
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Passive Voice with Modals and Phrasal Verbs
          </h2>
          <p className="text-justify leading-relaxed">
            Using passive voice with modal verbs and phrasal verbs can sometimes
            be complex but mastering this allows for more nuanced expression in
            both written and spoken English. Here's how to form passive
            sentences using these elements and some examples to illustrate these
            constructions.
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Forming Passive Sentences with Modal Verbs
          </h3>
          <p className="text-justify leading-relaxed">
            Modal verbs (such as can, could, will, would, shall, should, may,
            might, must) are used to express necessity, possibility, permission,
            or obligation. In passive constructions, the modal verb is combined
            with "be" followed by the past participle of the main verb.
          </p>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Structure:</span> [Subject] + [Modal
            Verb] + be + [Past Participle]
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Examples:
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Active: "The technician can repair the car."
              <ul className="list-disc list-inside ml-4">
                <li>Passive: "The car can be repaired by the technician."</li>
              </ul>
            </li>
            <li>
              Active: "The committee must review the document."
              <ul className="list-disc list-inside ml-4">
                <li>
                  Passive: "The document must be reviewed by the committee."
                </li>
              </ul>
            </li>
            <li>
              Active: "They should complete the project."
              <ul className="list-disc list-inside ml-4">
                <li>Passive: "The project should be completed by them."</li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Forming Passive Sentences with Phrasal Verbs
          </h3>
          <p className="text-justify leading-relaxed">
            Phrasal verbs consist of a verb plus a preposition or adverb that
            changes the meaning of the main verb. When turning such expressions
            into the passive voice, the structure of the phrasal verb must be
            preserved.
          </p>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Structure:</span> [Subject] +
            [Phrasal Verb (minus the verb part)] + be + [Past Participle of the
            verb part] + [Preposition/Adverb]
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Examples:
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Active: "Someone will pick up the package."
              <ul className="list-disc list-inside ml-4">
                <li>Passive: "The package will be picked up by someone."</li>
              </ul>
            </li>
            <li>
              Active: "The manager called off the meeting."
              <ul className="list-disc list-inside ml-4">
                <li>Passive: "The meeting was called off by the manager."</li>
              </ul>
            </li>
            <li>
              Active: "They are putting off the decision."
              <ul className="list-disc list-inside ml-4">
                <li>Passive: "The decision is being put off by them."</li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">
            Tips for Using Passive with Modals and Phrasal Verbs
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              Maintain Clarity: Ensure that the passive transformation does not
              obscure the meaning of the sentence, especially with phrasal verbs
              where the preposition/adverb is crucial to the sense.
            </li>
            <li>
              Check Verb Forms: Always verify that the correct past participle
              form of the verb is used, particularly with irregular verbs.
            </li>
            <li>
              Appropriate Usage: Use passive structures appropriately,
              considering whether the focus should be on the action or the
              agent.
            </li>
          </ul>
        </section> */}
        <Head>
          <title>Parallel Structure</title>
        </Head>
        <h1 className="text-4xl font-extrabold mb-6 text-center">
          Parallel Structure
        </h1>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Introduction to Parallel Structure
          </h2>
          <p className="text-justify leading-relaxed">
            Parallel structure, also known as parallelism, is a key element of
            English grammar and style. It involves using the same pattern of
            words to show that two or more ideas have the same level of
            importance. This technique adds clarity, symmetry, and balance to
            writing, enhancing readability and flow.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Definition of Parallel Structure
          </h2>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Parallel Structure:</span> The use
            of similar grammatical forms or structures to balance related ideas
            in a sentence. This technique ensures that elements of a sentence
            that are alike in function are also alike in construction.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Importance of Parallel Structure
          </h2>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Clarity:</span> Parallel structure
            makes sentences easier to read and understand by ensuring
            consistency and balance.
          </p>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Rhythm and Flow:</span> It
            contributes to the rhythm of the sentence, making writing more
            pleasant to read.
          </p>
          <p className="text-justify leading-relaxed">
            <span className="font-semibold">Emphasis:</span> Parallelism can be
            used to emphasize ideas and create a memorable impact.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Examples of Parallel Structure
          </h2>
          <div className="ml-4">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              With Coordinating Conjunctions:
            </h3>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Example:</span> "She likes
              reading, writing, and swimming."
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Explanation:</span> Each element
              after the coordinating conjunction (and) follows the same -ing
              form.
            </p>
          </div>
          <div className="ml-4 mt-4">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              With Correlative Conjunctions:
            </h3>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Example:</span> "He is not only
              talented but also hardworking."
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Explanation:</span> Both parts of
              the sentence following the correlative conjunctions (not only...
              but also) are structured similarly.
            </p>
          </div>
          <div className="ml-4 mt-4">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              With Comparisons:
            </h3>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Example:</span> "Running is better
              than walking."
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Explanation:</span> Both
              activities being compared use the same -ing form.
            </p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Common Forms of Parallel Structure
          </h2>
          <div className="ml-4">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Words and Phrases:
            </h3>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Example:</span> "The manager was
              efficient, courteous, and helpful."
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Explanation:</span> Adjectives
              describing the manager are parallel in form.
            </p>
          </div>
          <div className="ml-4 mt-4">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Clauses:</h3>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Example:</span> "She said that she
              would finish the project, that she would submit it on time, and
              that she would follow up with the client."
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Explanation:</span> Each clause
              follows the same structure, making the sentence balanced.
            </p>
          </div>
          <div className="ml-4 mt-4">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Lists:</h3>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Example:</span> "The project
              requires planning, execution, and review."
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Explanation:</span> Each noun in
              the list follows the same grammatical form.
            </p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Creating Parallel Structure
          </h2>
          <p className="text-justify leading-relaxed">
            To create parallel structure, ensure that each element of a sentence
            that follows a coordinating conjunction, correlative conjunction, or
            is part of a list, comparison, or paired elements, follows the same
            grammatical pattern.
          </p>
          <div className="ml-4">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Steps to Create Parallel Structure:
            </h3>
            <ul className="list-disc list-inside">
              <li>
                Identify the Parallel Elements: Look for elements joined by
                conjunctions or listed together.
              </li>
              <li>
                Match the Grammatical Form: Ensure that each element has the
                same grammatical structure.
              </li>
              <li>
                Revise for Consistency: Adjust the sentence to make each element
                parallel.
              </li>
            </ul>
          </div>
          <div className="ml-4 mt-4">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Examples of Revising for Parallel Structure:
            </h3>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Incorrect:</span> "She likes to
              read, writing, and swims."
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Correct:</span> "She likes
              reading, writing, and swimming."
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Incorrect:</span> "The teacher
              said that students should study hard, attend classes regularly,
              and they must complete their assignments on time."
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Correct:</span> "The teacher said
              that students should study hard, attend classes regularly, and
              complete their assignments on time."
            </p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Common Mistakes with Parallel Structure
          </h2>
          <div className="ml-4">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Inconsistent Forms:
            </h3>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Error:</span> "She enjoys reading,
              to write, and swimming."
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Correction:</span> "She enjoys
              reading, writing, and swimming."
            </p>
          </div>
          <div className="ml-4 mt-4">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Mismatched Constructions:
            </h3>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Error:</span> "He is both
              intelligent and has a lot of patience."
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Correction:</span> "He is both
              intelligent and patient."
            </p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Practice Exercises
          </h2>
          <div className="ml-4">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Revise for Parallel Structure:
            </h3>
            <p className="text-justify leading-relaxed">
              "The conference will cover how to market your business, gaining
              customer loyalty, and to improve sales."
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Answer:</span> "The conference
              will cover how to market your business, gain customer loyalty, and
              improve sales."
            </p>
          </div>
          <div className="ml-4 mt-4">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Identify and Correct Errors:
            </h3>
            <p className="text-justify leading-relaxed">
              "The job requires attention to detail, organization, and being
              able to multitask."
            </p>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold">Answer:</span> "The job requires
              attention to detail, organization, and multitasking."
            </p>
          </div>
        </section>
        {userData ? (
          <>
            {userData?.modules_completed[6] ? (
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
