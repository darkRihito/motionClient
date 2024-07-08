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
      await finishRead(7);
      updateModulesCompleted(7);
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
          <title>Prepositions</title>
        </Head>
        <h1 className="text-4xl font-extrabold mb-6 text-center">
          Prepositions
        </h1>
        <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">Introduction to Prepositions</h2>
        <p className="text-justify leading-relaxed">
          Prepositions are a fundamental component of English grammar, serving as vital connectors in sentences. Their proper use is essential for accurate and fluent communication, as they help to show relationships between different parts of a sentence.
        </p>
        <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">Definition of Prepositions and Their Role in English Grammar</h3>
        <p className="text-justify leading-relaxed">
          Definition: Prepositions are words that typically precede nouns or pronouns to express their relationship to another word in the sentence. This relationship can involve direction, place, time, cause, manner, and amount.
        </p>
        <p className="text-justify leading-relaxed">
          Role in Grammar:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Prepositions are crucial for constructing clear and coherent sentences.</li>
          <li>They provide necessary details that clarify how the actions, locations, or conditions are related to the rest of the sentence.</li>
          <li>Without prepositions, much of what we say or write would be ambiguous or incomplete.</li>
        </ul>
        <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">Explanation of How Prepositions Function to Connect Nouns, Pronouns, or Phrases to Other Words Within a Sentence</h3>
        <p className="text-justify leading-relaxed">
          Connecting Function:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>
            Spatial Relationships: Prepositions can indicate location or position. For example, "The book is on the table," where "on" tells us the relationship between "book" and "table."
          </li>
          <li>
            Temporal Relationships: They can specify when something happens. For example, "We will meet at noon," with "at" indicating the timing of the meeting.
          </li>
          <li>
            Logical Relationships: Prepositions like "because of" or "due to" show causal relationships, as in "The game was canceled because of rain."
          </li>
        </ul>
        <p className="text-justify leading-relaxed">
          Versatility in Usage:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>
            Prepositions are used in a wide array of contexts and can govern nouns, pronouns, or phrases, turning them into prepositional phrases that function as adjectives or adverbs in a sentence.
            <ul className="list-disc list-inside ml-4">
              <li>
                As Adjectives: The prepositional phrase can modify a noun. Example: "The man with the hat is my uncle." Here, "with the hat" describes "the man."
              </li>
              <li>
                As Adverbs: The prepositional phrase can modify a verb, adjective, or another adverb. Example: "She spoke in a low voice." Here, "in a low voice" modifies how she spoke.
              </li>
            </ul>
          </li>
          <li>
            Complex Prepositional Phrases: Sometimes, prepositions are part of a set phrase or idiomatic expression. Example: "In addition to her skills, she brings a great attitude."
          </li>
          <li>
            Prepositions are also critical in phrasal verbs, where they change the meaning of the verb. Example: "Look up" (to search in a reference book), where "up" changes the basic meaning of "look."
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">Types of Prepositions</h2>
        <p className="text-justify leading-relaxed">
          Prepositions in English can be categorized based on the types of relationships they describe. These include time, place, direction, and agent. Understanding these categories helps in choosing the correct preposition for a given context.
        </p>
        <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">Overview of Different Types of Prepositions</h3>
        <ul className="list-disc list-inside ml-4">
          <li>
            Prepositions of Time: These prepositions indicate when something happens. Common prepositions of time include "at," "on," "in," "before," and "after."
            <ul className="list-disc list-inside ml-4">
              <li>At: Used for precise times. Example: "Meet me at 5 p.m."</li>
              <li>On: Used for days and dates. Example: "We will leave on Monday."</li>
              <li>In: Used for months, years, centuries, and long periods. Example: "She was born in 1988."</li>
              <li>Before: Used to indicate something happening earlier than a point in time. Example: "Finish your homework before dinner."</li>
              <li>After: Indicates something happening subsequent to a point in time. Example: "We will discuss this after the meeting."</li>
            </ul>
          </li>
          <li>
            Prepositions of Place: These indicate the location or position of something. Common prepositions of place include "at," "on," "in," "between," and "beside."
            <ul className="list-disc list-inside ml-4">
              <li>At: Used for specific locations. Example: "She is waiting at the entrance."</li>
              <li>On: Indicates something on a surface. Example: "The book is on the table."</li>
              <li>In: Used for enclosed spaces. Example: "He is in the car."</li>
              <li>Between: Used when something is in the middle of two points. Example: "The park is between the museum and the library."</li>
              <li>Beside: Indicates being next to something. Example: "She sat beside me during the concert."</li>
            </ul>
          </li>
          <li>
            Prepositions of Direction: These prepositions indicate movement towards a particular destination. They include "to," "through," "into," "toward," and "onto."
            <ul className="list-disc list-inside ml-4">
              <li>To: Direction towards a specific place. Example: "We are going to the office."</li>
              <li>Through: Moving from one side to another within. Example: "She walked through the door."</li>
              <li>Into: Indicates movement from outside to inside. Example: "He jumped into the pool."</li>
              <li>Toward: Movement in the direction of something but not necessarily arriving there. Example: "He ran toward the crowd."</li>
              <li>Onto: Movement to the top of a surface. Example: "The cat jumped onto the roof."</li>
            </ul>
          </li>
          <li>
            Prepositions of Agent: These prepositions show a relationship between an action and its doer, typically used with passive voice. The most common preposition of agent is "by."
            <ul className="list-disc list-inside ml-4">
              <li>By: Indicates who performed the action in passive sentences. Example: "The novel was written by George Orwell."</li>
            </ul>
          </li>
        </ul>
        <p className="text-justify leading-relaxed">
          Examples to Illustrate Their Uses
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Time: "We will start the movie in ten minutes."</li>
          <li>Place: "The keys are on the counter."</li>
          <li>Direction: "Walk towards the park, then turn left."</li>
          <li>Agent: "This painting was created by Picasso."</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">Common Prepositions and Their Uses</h2>
        <p className="text-justify leading-relaxed">
          Prepositions are small words with big roles, helping to clarify the relationships between different elements in a sentence. Here, we’ll examine some of the most frequently used prepositions in English—"at," "in," "on," "by," "with," "under," "over"—and discuss their specific uses and rules.
        </p>
        <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">Detailed Examination of Frequently Used Prepositions</h3>
        <ul className="list-disc list-inside ml-4">
          <li>
            At
            <ul className="list-disc list-inside ml-4">
              <li>Uses: Indicates specific points in time or precise locations.</li>
              <li>Examples:
                <ul className="list-disc list-inside ml-4">
                  <li>Time: "Meet me at 3 p.m."</li>
                  <li>Location: "She is waiting at the entrance."</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            In
            <ul className="list-disc list-inside ml-4">
              <li>Uses: Used for enclosed spaces or for larger areas (cities, countries). Also indicates months, years, and longer periods of time.</li>
              <li>Examples:
                <ul className="list-disc list-inside ml-4">
                  <li>Place: "He is in the garden."</li>
                  <li>Time: "She was born in July."</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            On
            <ul className="list-disc list-inside ml-4">
              <li>Uses: Indicates surfaces (for place) or specific days/dates (for time).</li>
              <li>Examples:
                <ul className="list-disc list-inside ml-4">
                  <li>Place: "The book is on the table."</li>
                  <li>Time: "We will leave on Friday."</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            By
            <ul className="list-disc list-inside ml-4">
              <li>Uses: Indicates the agent in passive sentences or means of transport; can also express proximity.</li>
              <li>Examples:
                <ul className="list-disc list-inside ml-4">
                  <li>Agent: "The book was written by her."</li>
                  <li>Transport: "We traveled by train."</li>
                  <li>Proximity: "The school is by the supermarket."</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            With
            <ul className="list-disc list-inside ml-4">
              <li>Uses: Indicates accompaniment or tools/instruments used to perform an action.</li>
              <li>Examples:
                <ul className="list-disc list-inside ml-4">
                  <li>Accompaniment: "She came with her friends."</li>
                  <li>Instruments: "He wrote the letter with a pen."</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Under
            <ul className="list-disc list-inside ml-4">
              <li>Uses: Indicates something lower or covered by something else; can also mean less than or subjection to authority.</li>
              <li>Examples:
                <ul className="list-disc list-inside ml-4">
                  <li>Lower/covered: "The cat is under the table."</li>
                  <li>Subjection: "They work under strict regulations."</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Over
            <ul className="list-disc list-inside ml-4">
              <li>Uses: Indicates something higher without direct contact; can also mean more than.</li>
              <li>Examples:
                <ul className="list-disc list-inside ml-4">
                  <li>Higher: "A lamp hung over the table."</li>
                  <li>More than: "It costs over $50."</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">Usage Rules and Additional Examples for Each Preposition</h3>
        <ul className="list-disc list-inside ml-4">
          <li>
            At is more specific than "in" and "on" when indicating time and place. It’s used for precise addresses, specific points in time, and smaller locations within larger contexts.
            <ul className="list-disc list-inside ml-4">
              <li>"Let’s meet at the coffee shop at noon."</li>
            </ul>
          </li>
          <li>
            In is used to describe enclosed spaces and locations within larger geographical or abstract areas. It is also used for unspecific times during a day, month, or year.
            <ul className="list-disc list-inside ml-4">
              <li>"In the morning, she likes to be in her garden."</li>
            </ul>
          </li>
          <li>
            On is used when something is in contact with a surface. It's also the correct choice for days of the week and specific dates.
            <ul className="list-disc list-inside ml-4">
              <li>"On Monday, we put the vase on the shelf."</li>
            </ul>
          </li>
          <li>
            By as a preposition of agent is central in passive constructions but is also widely used to indicate method or means.
            <ul className="list-disc list-inside ml-4">
              <li>"The payment must be made by credit card."</li>
            </ul>
          </li>
          <li>
            With highlights instruments used in an action or companionship.
            <ul className="list-disc list-inside ml-4">
              <li>"He fixed the roof with new tools."</li>
            </ul>
          </li>
          <li>
            Under often conveys a sense of being covered or lower than something else, and metaphorically can express control or less than.
            <ul className="list-disc list-inside ml-4">
              <li>"Under new management, the store thrived."</li>
            </ul>
          </li>
          <li>
            Over is often used to describe spatial relationships where something is above something else without touching it; it also describes exceeding amounts.
            <ul className="list-disc list-inside ml-4">
              <li>"They built a new bridge over the river."</li>
            </ul>
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">Prepositions in Phrasal Verbs</h2>
        <p className="text-justify leading-relaxed">
          Phrasal verbs in English incorporate prepositions (or adverbs) to significantly alter the meaning of the main verb. Understanding how these prepositions change the verb's meaning is crucial for mastery of informal and idiomatic English.
        </p>
        <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">Exploration of Prepositions in Phrasal Verbs</h3>
        <p className="text-justify leading-relaxed">
          Phrasal verbs consist of a verb plus a preposition (or adverb) that together create a meaning different from the original verb alone. The preposition in a phrasal verb often gives a verb a completely new meaning, which can be vastly different depending on the preposition used.
        </p>
        <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">Examples of Common Phrasal Verbs and Changes in Meaning</h3>
        <ul className="list-disc list-inside ml-4">
          <li>
            Turn
            <ul className="list-disc list-inside ml-4">
              <li>Turn up: To arrive unexpectedly or without a plan. Example: "He turned up at my house last night."</li>
              <li>Turn down: To refuse or reject something. Example: "She turned down the job offer."</li>
              <li>Turn out: To develop in a particular way or to conclude. Example: "Everything turned out fine in the end."</li>
            </ul>
          </li>
          <li>
            Break
            <ul className="list-disc list-inside ml-4">
              <li>Break down: To stop functioning (machinery or vehicle); to lose emotional control. Example: "My car broke down on the highway." / "He broke down after hearing the sad news."</li>
              <li>Break up: To end a relationship; to start laughing (informal). Example: "They decided to break up after five years together." / "The joke was so funny, everyone broke up laughing."</li>
            </ul>
          </li>
          <li>
            Look
            <ul className="list-disc list-inside ml-4">
              <li>Look after: To take care of someone or something. Example: "Can you look after my dog while I’m on vacation?"</li>
              <li>Look into: To investigate or research. Example: "The police are looking into the incident."</li>
              <li>Look forward to: To anticipate something pleasantly. Example: "I’m looking forward to the weekend."</li>
            </ul>
          </li>
          <li>
            Get
            <ul className="list-disc list-inside ml-4">
              <li>Get over: To recover from an ailment or an emotional setback. Example: "It took him weeks to get over the flu."</li>
              <li>Get on with: To have a good relationship with; to continue doing something. Example: "She gets on with her colleagues very well." / "I need to get on with my work."</li>
            </ul>
          </li>
          <li>
            Take
            <ul className="list-disc list-inside ml-4">
              <li>Take off: To start to fly (airplanes); to become successful. Example: "The plane took off on time." / "Her business has really taken off."</li>
              <li>Take back: To retract a statement; to return something to a place. Example: "I take back what I said earlier." / "Don't forget to take your shoes back to your room."</li>
            </ul>
          </li>
        </ul>
        <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">Tips for Mastering Phrasal Verbs</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Practice Regularly: Learning phrasal verbs can be challenging due to their idiomatic nature. Regular practice through reading, listening, and speaking can help internalize their meanings.</li>
          <li>Learn in Context: Try to learn phrasal verbs in context rather than in isolation to better remember their meanings.</li>
          <li>Use a Good Reference: A reliable dictionary or a specialized phrasal verb dictionary can be invaluable in understanding different uses and examples.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">Common Mistakes with Prepositions</h2>
        <p className="text-justify leading-relaxed">
          Prepositions are often a source of confusion for English learners due to their subtle differences in usage and meaning. Identifying common errors and understanding how to correct them is crucial for improving proficiency and accuracy in English.
        </p>
        <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">Identification of Frequent Errors in the Use of Prepositions</h3>
        <ul className="list-disc list-inside ml-4">
          <li>
            Incorrect Choice of Preposition: Choosing the wrong preposition for a particular context is a common mistake, as many prepositions can seem interchangeable but differ subtly in meaning.
            <ul className="list-disc list-inside ml-4">
              <li>Example Error: "She married with him last year." Correction: "She married him last year."</li>
            </ul>
          </li>
          <li>
            Redundant Use of Prepositions: Sometimes, extra prepositions are used unnecessarily, particularly at the end of sentences.
            <ul className="list-disc list-inside ml-4">
              <li>Example Error: "Where is my phone at?" Correction: "Where is my phone?"</li>
            </ul>
          </li>
          <li>
            Omission of Necessary Prepositions: Omitting needed prepositions can also lead to confusing or incomplete sentences.
            <ul className="list-disc list-inside ml-4">
              <li>Example Error: "She is married him." Correction: "She is married to him."</li>
            </ul>
          </li>
          <li>
            Literal Translation from Mother Tongue: Directly translating prepositions from one’s native language to English can result in errors because prepositional use varies significantly between languages.
            <ul className="list-disc list-inside ml-4">
              <li>Example Error: "We discussed about the problem." (Common in speakers whose native languages require a preposition after "discuss.") Correction: "We discussed the problem."</li>
            </ul>
          </li>
        </ul>
        <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">Correction Strategies to Ensure Proper Usage and Placement</h3>
        <ul className="list-disc list-inside ml-4">
          <li>
            Learn Prepositions as Part of Phrases: Instead of trying to memorize prepositions on their own, learn them as part of phrases or in the context of sentences. This approach helps in understanding how they modify or relate to other words.
            <ul className="list-disc list-inside ml-4">
              <li>Practice: Compile lists of verbs, adjectives, and nouns that are commonly paired with specific prepositions.</li>
            </ul>
          </li>
          <li>
            Read Extensively: Exposure to well-written material helps internalize the correct use of prepositions. Reading books, articles, and other professional writings can enhance your understanding and usage.
            <ul className="list-disc list-inside ml-4">
              <li>Practice: Pay special attention to prepositional usage while reading and try to note or highlight examples for review.</li>
            </ul>
          </li>
          <li>
            Use Online Tools and Resources: Online language tools such as grammar checkers can help identify and correct prepositional errors in writing.
            <ul className="list-disc list-inside ml-4">
              <li>Practice: Use tools like Grammarly to check your written work for prepositional mistakes and note the corrections.</li>
            </ul>
          </li>
          <li>
            Engage in Targeted Exercises: Engage in exercises designed to test and improve your knowledge of prepositions. Many language learning books and websites offer targeted practice.
            <ul className="list-disc list-inside ml-4">
              <li>Practice: Complete exercises focusing on filling in blanks with appropriate prepositions or correcting errors in prepositional phrases.</li>
            </ul>
          </li>
          <li>
            Seek Feedback: Getting feedback from proficient English speakers or teachers can be invaluable. They can provide insights into errors and offer advice on proper preposition usage.
            <ul className="list-disc list-inside ml-4">
              <li>Practice: Have discussions or writing reviewed by mentors or peers who are fluent in English and ask for specific feedback on prepositions.</li>
            </ul>
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">Prepositions at the End of Sentences</h2>
        <p className="text-justify leading-relaxed">
          The question of whether it's acceptable to end sentences with prepositions is one of the most enduring topics in English grammar discussions. This section will clarify the myth versus reality of this issue and provide guidelines on when it's appropriate to end a sentence with a preposition.
        </p>
        <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">Myth vs. Reality</h3>
        <p className="text-justify leading-relaxed">
          Myth: Traditional grammar rules state that sentences should not end with prepositions. This rule stems from an attempt to align English grammar with Latin, where such a construction is impossible. Over time, this rule has been debated and often contested by modern linguists and style guides.
        </p>
        <p className="text-justify leading-relaxed">
          Reality: Ending sentences with prepositions is often natural in English and can make sentences sound more fluent and less formal or stilted. Many respected authors and linguists argue that it is entirely acceptable in many contexts, especially in conversational English.
        </p>
        <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">Guidelines and Examples Where Ending a Sentence with a Preposition is Acceptable</h3>
        <ul className="list-disc list-inside ml-4">
          <li>
            When the Preposition is Part of a Phrasal Verb: Phrasal verbs are integral parts of English idiom. When a sentence includes a phrasal verb that ends with a preposition, altering the structure could make the sentence awkward or change its meaning.
            <ul className="list-disc list-inside ml-4">
              <li>Example: "What are you talking about?" Awkward Alternative: "About what are you talking?"</li>
            </ul>
          </li>
          <li>
            When Rearranging Makes the Sentence Overly Formal: Sometimes, rearranging a sentence to avoid a final preposition results in a sentence that sounds overly formal or unnatural, particularly in spoken English.
            <ul className="list-disc list-inside ml-4">
              <li>Example: "This is the type of challenge we thrive on." Overly Formal Alternative: "This is the type of challenge on which we thrive."</li>
            </ul>
          </li>
          <li>
            When the Object of the Preposition is Implied: In many cases, especially in questions and relative clauses, the object of the preposition is not stated but understood.
            <ul className="list-disc list-inside ml-4">
              <li>Example: "Who did you go with?" Explicit Alternative: "With whom did you go?"</li>
            </ul>
          </li>
          <li>
            To Avoid Confusion: Rearranging a sentence to move the preposition can sometimes create confusion.
            <ul className="list-disc list-inside ml-4">
              <li>Example: "That's the situation we are currently in." Confusing Alternative: "That's the situation in which we are currently."</li>
            </ul>
          </li>
          <li>
            Informal and Conversational Contexts: In informal writing and conversation, ending sentences with prepositions is widely accepted and often sounds more natural.
            <ul className="list-disc list-inside ml-4">
              <li>Example: "Where is she from?"</li>
            </ul>
          </li>
        </ul>
        <h3 className="text-xl md:text-2xl font-semibold mb-2 italic">Embracing Flexibility in Modern Usage</h3>
        <p className="text-justify leading-relaxed">
          Modern English usage supports flexibility, and the strict adherence to not ending sentences with prepositions is often relaxed in everyday communication. It's important to consider the context and audience when deciding on sentence structure. Formal writings might still follow the traditional rule for stylistic and clarity reasons, whereas, in everyday communication, ending a sentence with a preposition can be perfectly natural.
        </p>
      </section>
      {userData ? (
          <>
            {userData?.modules_completed[7] ? (
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
